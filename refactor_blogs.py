
import re
import os

SOURCE_FILE = r"src\lib\blogs.ts"
OUTPUT_DIR = r"src\lib\data"
CHUNK_SIZE = 50

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find all blog objects.
# We look for objects starting with { slug: "..." and ending with },
# This regex is a bit complex to handle nested braces content content:`...`
# A safer approach is to assume the structure:
# {
#    slug: "...",
#    ...
# },
# And split by "},\n    {" or similar.

# Let's find "export const INITIAL_BLOGS: BlogPost[] = ["
start_marker = "export const INITIAL_BLOGS: BlogPost[] = ["
start_idx = content.find(start_marker)

if start_idx == -1:
    print("Could not find INITIAL_BLOGS start.")
    exit(1)

# Get the array content
array_content = content[start_idx + len(start_marker):]
# Remove the last "];"
last_brace_idx = array_content.rfind("];")
if last_brace_idx != -1:
    array_content = array_content[:last_brace_idx]

# Now split by objects.
# Since the formatting is consistent, we can split by `    },\n    {`
# But we need to be careful about the first and last braces.
# The content starts with `\n    {\n` or similar.

# Rough split strategy:
# split by `    },\n    {`
# This consumes the braces. We need to put them back.

# normalize newlines
array_content = array_content.replace("\r\n", "\n")

# The separator is usually: "\n    },\n    {"
# But sometimes spaces might differ.
# Let's use a regex to split.
# pattern: \n\s*},\s*{\n
# But wait, inside content strings there might be code blocks.
# Those code blocks won't have the exact indentation pattern of the main object separator.
# The objects are indented by 4 spaces.
# Separator: `    },\n    {`

# Let's try matching the objects directly.
# Each object starts with `    {` and ends with `    }` (on a new line).
# But checking for `slug:` inside is a good validation.

blogs = []
# We will iterate line by line to capture blocks.
lines = array_content.split('\n')
current_blog_lines = []
in_blog = False
brace_depth = 0

for line in lines:
    stripped = line.strip()
    if not in_blog:
        if stripped == '{' or stripped.startswith('{'):
            in_blog = True
            current_blog_lines.append(line)
            brace_depth += line.count('{') - line.count('}')
    else:
        current_blog_lines.append(line)
        brace_depth += line.count('{') - line.count('}')
        if brace_depth == 0:
            # End of blog object
            # check if it ends with "}," or "}"
            # Actually, standard splitting is safer if we just grab strings.
            # But "brace counting" is unreliable inside strings (e.g. ` content: " { " `)
            pass

# ALTERNATIVE STRATEGY:
# Since we know the previous scripts generated weird formatting, let's use the SLUG as an anchor.
# Every blog has `slug: "..."`.
# We can find the start of a blog by finding `    {` before `slug:`.
# And the end is the `    },` before the next `    {` or the end of file.

# Find all indices of `slug: "`
slug_indices = [m.start() for m in re.finditer(r'slug:\s*"', array_content)]

# We will carve out slices.
# Start of blog i is the first `{` backwards from slug_index[i]
# End of blog i is the first `}` forwards from end of content, OR just before start of blog i+1

parsed_blogs = []

for i in range(len(slug_indices)):
    current_slug_idx = slug_indices[i]
    
    # Find start: Look backwards for `{`
    # We limit search to, say, 500 chars back (headers aren't that big)
    # The `{` should be at start of line (with indentation)
    
    # Actually, simpler:
    # The file is a list of objects separated by commas.
    # Let's just Regex capture the whole objects? No, content regex is hard.
    
    # Let's use the separators: `    },\n    {`
    pass

# FALLBACK STRATEGY:
# Just split by `    },\n    {` which has been the consistent separator used by all my scripts.
chunks = re.split(r'\n\s*},\s*\{\n', array_content.strip())

# Fix up the first and last chunk
# First chunk starts with `{` (stripped)
# Last chunk ends with `}` (stripped)

final_blogs = []
for i, chunk in enumerate(chunks):
    clean_chunk = chunk.strip()
    # Add back the braces consumed by split
    if not clean_chunk.startswith('{'):
        clean_chunk = '{' + clean_chunk
    if not clean_chunk.endswith('}'):
        clean_chunk = clean_chunk + '}'
    
    # Verify it looks like a blog
    if 'slug:' in clean_chunk:
        final_blogs.append(clean_chunk)

print(f"Found {len(final_blogs)} blogs.")

# Write chunks
chunk_files = []
for i in range(0, len(final_blogs), CHUNK_SIZE):
    batch_num = (i // CHUNK_SIZE) + 1
    batch_blogs = final_blogs[i : i + CHUNK_SIZE]
    
    filename = f"blogs_part{batch_num}.ts"
    file_full_path = os.path.join(OUTPUT_DIR, filename)
    chunk_files.append(filename)
    
    with open(file_full_path, 'w', encoding='utf-8') as f:
        f.write('import { BlogPost } from "../blogs";\n\n')
        f.write(f"export const BLOGS_PART_{batch_num}: BlogPost[] = [\n")
        # Join them with commas
        f.write(",\n".join(batch_blogs))
        f.write("\n];\n")
    
    print(f"Written {len(batch_blogs)} to {filename}")

# Rewrite main file
# We need to preserve the Interface
interface_code = content[:start_idx]

imports = ""
arrays = ""
for i, fname in enumerate(chunk_files):
    name = f"BLOGS_PART_{i+1}"
    imports += f'import {{ {name} }} from "./data/{fname.replace(".ts", "")}";\n'
    arrays += f"...{name},\n    "

new_main_content = f"""{interface_code}

{imports}

export const INITIAL_BLOGS: BlogPost[] = [
    {arrays}
];
"""

with open(SOURCE_FILE, 'w', encoding='utf-8') as f:
    f.write(new_main_content)

print("Main blogs.ts rewritten.")
