
import os

file_path = r"c:\Users\ANANDU DIPUKUMAR\Antigravity Projects\Clarifyit.in\src\lib\blogs.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Identifier for the START of the corruption
# The corruption turned "tags?: string[];" into "tags?: string[    }," followed by the anemometer blog.
# We look for the specific corrupted string.
corrupt_start_marker = 'tags?: string[    },'
# The Corruption contains the anemometer blog
blog_slug = 'slug: "how-anemometers-work-cup-spin"'

if corrupt_start_marker in content and blog_slug in content:
    print("Corruption detected.")
    
    # We want to replace everything from 'tags?: string[' ... up to the end of that injected block ... back to 'tags?: string[];'
    # The injected block likely ends with a bracket and semicolon because the PowerShell script replaced "];" with the content.
    # However, determining exactly WHERE it ends is tricky because there are multiple "];" in the file now.
    
    # Strategy: Find the start index.
    start_idx = content.find(corrupt_start_marker)
    
    # The original text was likely "tags?: string[];"
    # So we want to keep "tags?: string" and verify if we can find the resumption of the interface.
    # The interface should close with "}" on a new line soon after.
    # But wait, the injected content is HUGE (20 blogs).
    
    # Let's simple split the file into two parts:
    # 1. Pre-corruption
    # 2. Post-corruption (The real INITIAL_BLOGS array start)
    
    # We know the interface ends and then "export const INITIAL_BLOGS" starts.
    # The corruption is INSIDE the interface.
    # So we can search for the next "export const INITIAL_BLOGS" AFTER the corruption start.
    
    next_export_idx = content.find('export const INITIAL_BLOGS', start_idx)
    
    if next_export_idx != -1:
        # We found the real start of the array.
        # The corruption ends just before the closing brace of the interface "}".
        # Or does it?
        # The file structure was:
        # interface { ... tags?: string[]; }
        # export const ...
        
        # If "];" was replaced, it might have eaten the closing brace if it was on the same line? 
        # No, usually formatting is "tags?: string[];\n}"
        
        # Safe bet: Reconstruct the header entirely.
        # We know what the header SHOULD look like.
        
        header_end_signature = "export const INITIAL_BLOGS"
        
        # Read the file from the disk again to be safe
        clean_header = '''import { BlogPostStats } from "./db";

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    category: string;
    categorySlug?: string;
    imageUrl?: string;
    content: string;
    publishedAt: string;
    tags?: string[];
}

'''
        # Now we need to find where the "real" content begins.
        # It begins at "export const INITIAL_BLOGS".
        
        # Find the index of "export const INITIAL_BLOGS"
        # There might be one INSIDE the corrupted text? Unlikely, the blog content is just strings.
        # So the first occurrence of "export const INITIAL_BLOGS" in the file is likely the correct one?
        # WAIT. The corrupted file has imports at top.
        # Then interface.
        # Then "export const INITIAL_BLOGS" (valid one).
        
        # So if we just find "export const INITIAL_BLOGS", that gives us the start of the valid code.
        # Everything before that is the corrupted interface.
        
        real_start_idx = content.find('export const INITIAL_BLOGS')
        
        if real_start_idx != -1:
             new_content = clean_header + content[real_start_idx:]
             
             with open(file_path, 'w', encoding='utf-8') as f:
                 f.write(new_content)
             print("File repaired successfully.")
        else:
            print("Could not find 'export const INITIAL_BLOGS' marker.")

    else:
        print("Could not find 'export const INITIAL_BLOGS' after corruption.")
else:
    print("Corruption marker not found. File might differ from expectation.")

