
import re
import os
import glob

DATA_DIR = r'src\lib\data'
CATALOG_FILE = r'C:\Users\ANANDU DIPUKUMAR\.gemini\antigravity\brain\9d81e294-1790-445b-8df9-82b6b63ad1f5\blog_catalog.md'

def generate_catalog():
    if not os.path.exists(DATA_DIR):
        print(f"Error: {DATA_DIR} not found.")
        return

    # Find all part files
    files = glob.glob(os.path.join(DATA_DIR, "blogs_part*.ts"))
    
    # Sort them by number part
    # blogs_part1, blogs_part2, ...
    def get_part_num(fname):
        match = re.search(r'part(\d+)', fname)
        return int(match.group(1)) if match else 0
        
    files.sort(key=get_part_num)
    
    all_blogs = []

    for fpath in files:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Regex capture
        slugs = re.findall(r'slug:\s*"(.*?)"', content)
        titles = re.findall(r'title:\s*"(.*?)"', content)
        dates = re.findall(r'publishedAt:\s*"(.*?)"', content)
        
        # We assume they are in sync.
        # This is a weak assumption but usually holds for these generated files.
        count = min(len(slugs), len(titles), len(dates))
        
        for i in range(count):
            all_blogs.append({
                'date': dates[i],
                'title': titles[i],
                'slug': slugs[i]
            })

    # Sort by Date? Or just list them?
    # Usually list by ID (order in file).
    
    catalog_content = "# Blog Catalog\n\n| ID | Date | Title | Slug |\n|---|---|---|---|\n"
    
    for i, blog in enumerate(all_blogs):
        catalog_content += f"| {i+1} | {blog['date']} | {blog['title']} | {blog['slug']} |\n"

    os.makedirs(os.path.dirname(CATALOG_FILE), exist_ok=True)
    with open(CATALOG_FILE, 'w', encoding='utf-8') as f:
        f.write(catalog_content)
    
    print(f"Catalog regenerated with {len(all_blogs)} entries from {len(files)} files.")

if __name__ == "__main__":
    generate_catalog()
