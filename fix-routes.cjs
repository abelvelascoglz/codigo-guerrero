const fs = require('fs');
const path = require('path');

// Función para procesar archivos .astro
function processAstroFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Agregar import de baseUrl si no existe
  if (!content.includes('const baseUrl = import.meta.env.BASE_URL')) {
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd !== -1) {
      const beforeFrontmatter = content.substring(0, frontmatterEnd);
      const afterFrontmatter = content.substring(frontmatterEnd);
      
      content = beforeFrontmatter + 'const baseUrl = import.meta.env.BASE_URL;\n\n' + 
                'const resolveUrl = (url) => {\n' +
                '  if (!url || url.startsWith("http") || url.startsWith("#")) return url;\n' +
                '  if (url.startsWith("/")) return `${baseUrl}${url.slice(1)}`;\n' +
                '  return url;\n' +
                '};\n' + afterFrontmatter;
      modified = true;
    }
  }

  // Reemplazar href="/..." con href={resolveUrl("/...")}
  const hrefPattern = /href="(\/[^"]*?)"/g;
  const newContent = content.replace(hrefPattern, (match, url) => {
    if (url.startsWith('/#')) {
      return match; // Mantener anchors como están
    }
    return `href={resolveUrl("${url}")}`;
  });

  if (newContent !== content) {
    modified = true;
    content = newContent;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  }
}

// Procesar todos los archivos .astro
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

// Ejecutar el procesamiento
processDirectory('./src');
console.log('Route fixing completed!');
