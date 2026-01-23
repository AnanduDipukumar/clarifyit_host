
import os

file_path = r"c:\Users\ANANDU DIPUKUMAR\Antigravity Projects\Clarifyit.in\src\lib\blogs.ts"

try:
    with open(file_path, 'rb') as f:
        content_bytes = f.read()
    
    # Try decoding as utf-8 first to see if it works, or fallback to latin-1/cp1252 if mixed
    try:
        content_str = content_bytes.decode('utf-8')
        print("File is already valid UTF-8. No changes made.")
    except UnicodeDecodeError:
        print("Detected invalid UTF-8 sequences. Attempting to repair...")
        # detailed recovery: try decoding as cp1252 (common windows) or just ignore errors
        try:
             # Often it's Windows-1252 mixed with UTF-8
            content_str = content_bytes.decode('cp1252')
        except:
             # If that fails, force utf-8 with replacement
            content_str = content_bytes.decode('utf-8', errors='replace')
            
        # Write back as strict UTF-8
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content_str)
        print("File successfully converted to UTF-8.")

except Exception as e:
    print(f"Error processing file: {e}")
