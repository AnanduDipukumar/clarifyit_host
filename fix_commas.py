
import glob
import re
import os

DATA_DIR = r"c:\Users\ANANDU DIPUKUMAR\Antigravity Projects\Clarifyit.in\src\lib\data"

def fix_missing_commas():
    files = glob.glob(os.path.join(DATA_DIR, "blogs_part*.ts"))
    
    for file_path in files:
        print(f"Scanning {file_path}...")
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern: Closing brace, optional whitespace, Opening brace
        # We want to insert a comma in betweeen.
        # But we must be careful not to match inside strings. 
        # (Though `} {` is unlikely inside these specific blog strings).
        
        # Regex:
        # Match `}` followed by whitespace (including newlines) then `{`
        # Replace with `}, {` preserving the whitespace.
        
        # Capture group 1: `}`
        # Capture group 2: whitespace
        # Capture group 3: `{`
        
        # Be more specific: `^\s*}` at start of line?
        # The objects are usually:
        #    },
        #    {
        # So we look for `}` followed by `\s*` followed by `{`
        # and checking if comma is missing.
        
        regex = r'}(\s*)\{'
        
        # Function to ensure we don't mess up if comma is already there.
        # Wait, if comma is there, it would constitute `},\s*{` which doesn't match `}(\s*){` (unless whitespace includes comma, which \s doesn't).
        
        matches = list(re.finditer(regex, content))
        if matches:
            print(f"Found {len(matches)} missing commas in {os.path.basename(file_path)}")
            
            # Use sub to replace
            # We want to insert a comma.
            # If the whitespace contains newlines, we usually want the comma on the line of the `}`.
            # Example: `}\n    {` -> `},\n    {`
            
            new_content = re.sub(regex, r'},\1{', content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print("Fixed.")
        else:
            print("Clean.")

if __name__ == "__main__":
    fix_missing_commas()
