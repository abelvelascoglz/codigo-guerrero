const fs = require('fs');
const path = require('path');

function processAstroFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remover la función resolveUrl y las variables baseUrl
  content = content.replace(/const baseUrl = import\.meta\.env\.BASE_URL;\s*/g, '');
  content = content.replace(/const resolveUrl = \([^}]+\};\s*/gs, '');
  
  // Reemplazar href={resolveUrl("/path")} con href={import.meta.env.BASE_URL + "path"}
  content = content.replace(/href=\{resolveUrl\("\/([^"]+)"\)\}/g, 'href={import.meta.env.BASE_URL + "$1"}');
  
  // Reemplazar href={resolveUrl("/")} con href={import.meta.env.BASE_URL}
  content = content.replace(/href=\{resolveUrl\("\/"\)\}/g, 'href={import.meta.env.BASE_URL}');
  
  modified = true;
  console.log(`Processed: ${filePath}`);

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
console.log('Removed resolveUrl functions and replaced with direct BASE_URL usage!');
