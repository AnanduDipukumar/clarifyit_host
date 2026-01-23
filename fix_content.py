import os
import re

def fix_content():
    data_dir = r"c:\Users\ANANDU DIPUKUMAR\Antigravity Projects\Clarifyit.in\src\lib\data"
    files_fixed = 0
    
    for filename in os.listdir(data_dir):
        if filename.endswith(".ts"):
            path = os.path.join(data_dir, filename)
            try:
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                original_content = content
                
                # Fix fractions: \frac{a},{b} -> \frac{a}{b}
                # Handles spaces after comma: \frac{a}, {b}
                # Using non-greedy match. Note: might fail on nested braces if }, appears inside the first arg.
                # But looking at the data, it seems consistent with the comma issue.
                content = re.sub(r'\\frac\{(.*?)\},\s*\{(.*?)\}', r'\\frac{\1}{\2}', content)
                
                # Fix Voltage/Current table headers
                content = content.replace("Voltage ($V$)", "Voltage (V)")
                content = content.replace("Current ($I$)", "Current (I)")
                content = content.replace("Voltage ( V V)", "Voltage (V)") # Handling user reported variant
                
                # Fix Empty Boxes in Mental Model Summary
                # Pattern seems to be: > **Mental Model Summary** ... then some messy empty > lines
                # We will collapse multiple empty blockquote lines into one, or remove them if they are just placeholders.
                # Regex to find lines that are just whitespace and > and newline, repeated.
                # Pattern: (\n\s*>\s*\n)+ -> \n>\n
                content = re.sub(r'(\n\s*>\s*){2,}\n', r'\n>\n', content)
                
                # Also remove the "  >" indented artifact if it exists alone
                content = re.sub(r'\n\s{2,}>\s*\n', r'\n>\n', content)

                if content != original_content:
                    with open(path, "w", encoding="utf-8") as f:
                        f.write(content)
                    print(f"Fixed {filename}")
                    files_fixed += 1
                    
            except Exception as e:
                print(f"Error checking {filename}: {e}")
                
    print(f"Total files fixed: {files_fixed}")

if __name__ == "__main__":
    fix_content()
