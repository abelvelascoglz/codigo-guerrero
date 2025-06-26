const fs = require('fs');
const path = require('path');

// Nueva función resolveUrl corregida
const newResolveUrlFunction = `const resolveUrl = (url) => {
  if (!url || url.startsWith("http") || url.startsWith("#")) return url;
  if (url.startsWith("/")) {
    const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
    const cleanUrl = url.startsWith("/") ? url.slice(1) : url;
    return \`\${cleanBaseUrl}/\${cleanUrl}\`;
  }
  return url;
};`;

function processAstroFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Reemplazar la función resolveUrl existente
  const oldResolveUrlPattern = /const resolveUrl = \(url[^}]+\};/gs;
  if (oldResolveUrlPattern.test(content)) {
    content = content.replace(oldResolveUrlPattern, newResolveUrlFunction);
    modified = true;
    console.log(`Updated resolveUrl function in: ${filePath}`);
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.astro')) {
      processAstroFile(fullPath);
    }
  }
}

processDirectory('./src');
console.log('URL resolution fixing completed!');
