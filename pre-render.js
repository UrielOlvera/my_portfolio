const fs = require('fs');
const path = require('path');
const pug = require('pug');

const viewsDir = path.join(__dirname, 'src/views');
const distDir = path.join(__dirname, 'dist');

// Asegúrate de que exista la carpeta dist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Renderiza cada archivo Pug a HTML
fs.readdirSync(viewsDir).forEach(file => {
  if (file.endsWith('.pug')) {
    const html = pug.renderFile(path.join(viewsDir, file));
    const outputFilePath = path.join(distDir, file.replace('.pug', '.html'));
    fs.writeFileSync(outputFilePath, html, 'utf8');
  }
});

console.log('Archivos HTML prerenderizados en la carpeta dist.');