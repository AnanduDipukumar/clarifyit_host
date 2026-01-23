
import glob
import re
import os

DATA_DIR = r"c:\Users\ANANDU DIPUKUMAR\Antigravity Projects\Clarifyit.in\src\lib\data"

def remove_duplicates():
    # Order matters: Part 1 -> Part 2 -> Part 3 ...
    # We keep the FIRST occurrence (or LAST? User prefered "revised content" so maybe LAST?)
    # User said: "content size is too short... add more content... revisions..."
    # If the newer parts (3, 4, 5) have better content, we should keep those.
    # So we should process in REVERSE order: Part 5 -> Part 4 -> Part 3 -> Part 2 -> Part 1.
    # Keep the one in the higher part number.
    
    files = sorted(glob.glob(os.path.join(DATA_DIR, "blogs_part*.ts")), reverse=True)
    # Ensure Part 8 is Top.
    # Ensure Part 6 is at the top of the list manually if glob sort is weird (e.g. 10 vs 2)
    # But reverse string sort of "part6" vs "part3" works fine.
    print(f"File Priority Order (Winner First): {[os.path.basename(f) for f in files]}")
    
    seen_slugs = set()
    
    for file_path in files:
        print(f"Processing {os.path.basename(file_path)}...")
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # We need to parse objects.
        # This is tricky with regex. 
        # A robust way is to finding `slug: "..."` and then finding the start `{` and end `},` of that object.
        # But nested braces in content strings make this hard.
        # However, our format is consistent: 
        # { 
        #    slug: "...",
        #    ...
        # },
        
        # Let's try splitting by `\n    {` or similar? 
        # No, dangerous.
        
        # Strategy:
        # 1. Find all `slug: "(.*?)"` matches with indices.
        # 2. For each slug, check if it's in `seen_slugs`.
        # 3. If yes, mark this object for deletion.
        # 4. To delete, we need the start and end index.
        #    Start is roughly the `{` before "slug:".
        #    End is the `},` after content.
        
        # Alternative: Read the whole array as text, perform regex helper.
        
        # Let's assume the standard format `{\s*slug: "..."` ... `},`
        
        # Helper to find object boundaries:
        # Work backwards from `slug:` to find `{`.
        # Work forwards to find matching `},` (counting braces).
        
        to_delete_ranges = []
        
        # Find all slugs
        slug_matches = list(re.finditer(r'slug:\s*"(.*?)"', content))
        
        # We want to process from LAST to FIRST in the file so deletion indices don't shift.
        for match in reversed(slug_matches):
            slug = match.group(1)
            slug_start_index = match.start()
            
            # Find the start `{`
            # Look backwards from slug_start_index
            # We assume the `{` is the immediately preceding opening brace ignoring whitespace
            
            # Find the object start `{`
            # We can search backwards for `{`
            substring_before = content[:slug_start_index]
            start_brace_match = list(re.finditer(r'\{', substring_before))
            if not start_brace_match:
                print(f"Error: Could not find start brace for {slug}")
                continue
            
            obj_start = start_brace_match[-1].start()
            
            # To find the end `}`:
            # We must balance braces starting from obj_start
            
            item_end = -1
            brace_count = 0
            in_string = False
            string_char = ''
            escape = False
            
            for i in range(obj_start, len(content)):
                char = content[i]
                
                if in_string:
                    if escape:
                        escape = False
                    elif char == '\\':
                        escape = True
                    elif char == string_char:
                        in_string = False
                else:
                    if char == '"' or char == '`' or char == "'":
                        in_string = True
                        string_char = char
                    elif char == '{':
                        brace_count += 1
                    elif char == '}':
                        brace_count -= 1
                        if brace_count == 0:
                            item_end = i + 1 # Include the }
                            # Check for trailing comma
                            if i + 1 < len(content) and content[i+1] == ',':
                                item_end += 1
                            break
            
            if item_end == -1:
                print(f"Error: Could not find end brace for {slug}")
                continue
                
            # Now, check duplication
            if slug in seen_slugs:
                print(f"  Removing duplicate: {slug}")
                to_delete_ranges.append((obj_start, item_end))
            else:
                seen_slugs.add(slug)
                
        # Apply deletions
        new_content = content
        for start, end in to_delete_ranges:
            # Remove content, but be careful of surrounding whitespace/newlines to keep it clean?
            # Replace with empty string.
            # Ideally try to remove the newline before it too if it exists.
            
            new_content = new_content[:start] + new_content[end:]
            
        if len(to_delete_ranges) > 0:
             with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
             print(f"Updated {file_path}")

if __name__ == "__main__":
    remove_duplicates()
