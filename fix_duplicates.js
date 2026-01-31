const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'lib', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.match(/blogs_part\d+\.ts$/));

// Sort files to ensure stability (though the previous script seemed to sort by default fs order)
// Let's rely on the order they are processed to determine "v2", "v3".
// Ideally, we respect the numeric part of the filename: blogs_part10 < blogs_part100.
files.sort((a, b) => {
    const numA = parseInt(a.match(/blogs_part(\d+)/)[1]);
    const numB = parseInt(b.match(/blogs_part(\d+)/)[1]);
    return numA - numB;
});

const slugMap = new Map(); // slug -> [file1, file2, ...]

// 1. Build the map
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

// 2. Fix duplicates
let fixCount = 0;
slugMap.forEach((fileList, slug) => {
    if (fileList.length > 1) {
        console.log(`Fixing duplicate slug: ${slug}`);
        // Keep the first one as is.
        // Rename the rest.
        for (let i = 1; i < fileList.length; i++) {
            const fileToFix = fileList[i];
            const suffix = `-v${i + 1}`;
            const newSlug = `${slug}${suffix}`;

            console.log(`  -> Modifying ${fileToFix}: ${slug} => ${newSlug}`);

            const filePath = path.join(dataDir, fileToFix);
            let content = fs.readFileSync(filePath, 'utf-8');

            // Be careful to only replace the specific slug occurrence
            // Using replace with string might be dangerous if the slug is a substring of another slug.
            // But slugs usually are distinct.
            // Safer regex:
            const regex = new RegExp(`slug:\\s*"${slug}"`);
            if (regex.test(content)) {
                content = content.replace(regex, `slug: "${newSlug}"`);
                fs.writeFileSync(filePath, content, 'utf-8');
                fixCount++;
            } else {
                console.error(`  !! Could not find slug "${slug}" in ${fileToFix} (maybe already fixed or formatting differs?)`);
            }
        }
    }
});

console.log(`Fixed ${fixCount} duplicates.`);
