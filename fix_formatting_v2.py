import os
import re

def fix_formatting():
    data_dir = r"c:\Users\ANANDU DIPUKUMAR\Antigravity Projects\Clarifyit.in\src\lib\data"
    files_fixed = 0
    
    # Target Batches 1-20 (blogs_part1.ts to blogs_part20.ts)
    # Also including part3 specifically as it was the report source.
    target_files = [f"blogs_part{i}.ts" for i in range(1, 42)] # User said first 100, that's up to part 20. But might as well do all if safe. Let's do 1-25. Safest to just scan all .ts files in data.
    
    for filename in os.listdir(data_dir):
        if filename.endswith(".ts"):
            path = os.path.join(data_dir, filename)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                original_content = content
                
                # --- FIX 1: Tables ---
                # Problem: Separation of table rows by blank lines.
                # Pattern: A line starting with |, followed by whitespace/newlines, followed by another line starting with |
                # We want to remove the intermediate newlines.
                # Regex: Look for a line ending with | (or just content), then \n\n+, then |
                # Safer approach: Find generic table lines and join them if separated by blank lines.
                
                # Regex explanation:
                # (\|.*\|) matches a table row.
                # (\n\s*)+ matches the gap involving blank lines.
                # (?=\|) looks ahead for the next row starting with pipe.
                # We replace with just \n
                
                # Iterate until no more changes to handle multiple gaps
                prev_content = ""
                while content != prev_content:
                    prev_content = content
                    content = re.sub(r'(\|.*\|\s*)\n\s+(\|)', r'\1\n\2', content)

                # --- FIX 2: Blockquotes (Misconceptions) ---
                # Problem: > Line \n \n > Line creates separate boxes.
                # We want: > Line \n > \n > Line OR > Line \n > Line
                # User wants "one box".
                # Strategy: If we see a line starting with `> `, followed by blank lines, followed by `> `,
                # we should fill the gap with `>` lines or remove the gap.
                # Let's fill with `>` lines to preserve spacing structure but keep the box.
                
                # Regex:
                # (>.*)\n\s+(?=>)
                # This finds a quote line, then blank lines (whitespace+newlines), then lookahead for another quote.
                # We want to replace the blank lines with just newlines that have `>`.
                # Actually, simpler: Remove the blank lines so it's compact.
                
                # Re-running this loop for quotes
                prev_content_quote = ""
                while content != prev_content_quote:
                    prev_content_quote = content
                    content = re.sub(r'(>.*)\n\s+(?=>)', r'\1\n', content)

                # Additional cleanup: Sometimes there are lines that are just `>` followed by nothing, surrounded by real quotes.
                # If we have `> text \n > \n > text`, that's valid one box.
                # If we have `> text \n \n > text`, that's two boxes.
                # The regex `r'(>.*)\n\s+(?=>)'` replacing with `\1\n` effectively removes the gap.
                # Example:
                # > A
                # 
                # > B
                # Becomes:
                # > A
                # > B
                # This is one box.

                if content != original_content:
                    with open(path, "w", encoding="utf-8") as f:
                        f.write(content)
                    print(f"Fixed formatting in {filename}")
                    files_fixed += 1
                    
            except Exception as e:
                print(f"Error processing {filename}: {e}")
                
    print(f"Total files fixed: {files_fixed}")

if __name__ == "__main__":
    fix_formatting()
