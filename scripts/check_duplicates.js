const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/lib/data');

function scanForDuplicates() {
    if (!fs.existsSync(dataDir)) {
        console.error(`Data directory not found: ${dataDir}`);
        process.exit(1);
    }

    const files = fs.readdirSync(dataDir).filter(f => f.startsWith('blogs_part') && f.endsWith('.ts'));
    const slugMap = new Map();
    let duplicateCount = 0;

    console.log(`Scanning ${files.length} files...`);

    files.forEach(file => {
        const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
        // Regex to find slugs: slug: "value" or slug: 'value'
        const regex = /slug:\s*["']([^"']+)["']/g;
        let match;

        while ((match = regex.exec(content)) !== null) {
            const slug = match[1];
            if (slugMap.has(slug)) {
                console.error(`DUPLICATE FOUND: "${slug}"`);
                console.error(`  - Defined in: ${slugMap.get(slug)}`);
                console.error(`  - And in:     ${file}`);
                duplicateCount++;
            } else {
                slugMap.set(slug, file);
            }
        }
    });

    if (duplicateCount === 0) {
        console.log('\n✅ No duplicate slugs found!');
    } else {
        console.error(`\n❌ Found ${duplicateCount} duplicate(s).`);
        process.exit(1);
    }
}

scanForDuplicates();
