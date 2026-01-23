const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../lib/data');

const slugMap = new Map(); // slug -> [files]

try {
    const files = fs.readdirSync(dataDir).filter(f => f.startsWith('blogs_part') && f.endsWith('.ts'));

    files.forEach(file => {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        const regex = /slug:\s*"([^"]+)"/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const slug = match[1];
            if (!slugMap.has(slug)) {
                slugMap.set(slug, []);
            }
            slugMap.get(slug).push(file);
        }
    });

    console.log("--- DUPLICATE SLUGS REPORT ---");
    let count = 0;
    slugMap.forEach((files, slug) => {
        if (files.length > 1) {
            console.log(`${slug}: [${files.join(', ')}]`);
            count++;
        }
    });
    console.log(`Total duplicates found: ${count}`);

} catch (err) {
    console.error("Error:", err);
}
