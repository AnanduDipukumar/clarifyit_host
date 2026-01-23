
import glob
import os
import re

DATA_DIR = r"src\lib\data"
files = glob.glob(os.path.join(DATA_DIR, "blogs_part*.ts"))

print("Scanning for blogs...")
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find slugs and titles
    # Assuming standard format: slug: "...", title: "...",
    slugs = re.findall(r'slug:\s*"([^"]+)"', content)
    titles = re.findall(r'title:\s*"([^"]+)"', content)
    
    print(f"\n--- {os.path.basename(fpath)} ({len(slugs)} blogs) ---")
    for i in range(min(len(slugs), len(titles))):
        print(f"{slugs[i]} | {titles[i]}")

