
import os

file_path = r"c:\Users\ANANDU DIPUKUMAR\Antigravity Projects\Clarifyit.in\src\lib\blogs.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Line 12901 in 1-based index is 12900 in 0-based index.
# Let's check context to be sure.
# Line 12898 (index 12897) should be `    },`
# Line 12900 (index 12899) should be empty or newline
# Line 12901 (index 12900) should be `    },` <- The duplicate

target_index = 12900
if lines[target_index].strip() == "},":
    print(f"Removing duplicate bracket at line {target_index + 1}")
    del lines[target_index]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Fix applied.")
else:
    print(f"Line {target_index + 1} content was: '{lines[target_index].strip()}'. Expected '},'. Aborting safety check.")
