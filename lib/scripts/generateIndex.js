"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
// Nombre del archivo index a generar
var indexFileName = "index.ts";
// Obtener el directorio objetivo desde los argumentos o usar el actual
var targetDir = path.resolve(process.argv[2] || ".");
// Ruta completa del archivo index.ts
var indexPath = path.join(targetDir, indexFileName);
/**
 * Genera un archivo index.ts que exporta todos los archivos .ts del directorio dado.
 * También crea un backup si el archivo index.ts ya existe.
 * @param dir Ruta del directorio donde generar el index
 */
function generateBarrelFile(dir) {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
        console.error("❌ El directorio especificado no existe o no es válido.");
        process.exit(1);
    }
    var files = fs.readdirSync(dir);
    var exportStatements = files
        .filter(function (file) {
        var ext = path.extname(file);
        var base = path.basename(file);
        return ext === ".ts" && !base.endsWith(".d.ts");
    })
        .map(function (file) {
        var nameWithoutExt = "./" + path.basename(file, ".ts");
        return "export * from \"".concat(nameWithoutExt, "\";");
    });
    var output = exportStatements.join("\n") + "\n";
    // Si index.ts ya existe, crear backup
    if (fs.existsSync(indexPath)) {
        var backupPath = indexPath + ".bak";
        fs.copyFileSync(indexPath, backupPath);
        console.log("\uD83D\uDCE6 Backup creado: ".concat(path.basename(backupPath)));
    }
    fs.writeFileSync(indexPath, output);
    console.log("\u2705 Archivo ".concat(indexFileName, " generado en ").concat(dir));
}
generateBarrelFile(targetDir);
