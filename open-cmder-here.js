// Obtener la ruta de la carpeta seleccionada
var ruta_folder = FV.FolderItem.Path;

// Reemplazar barras invertidas por barras normales (opcional, pero no necesario)
var folder = ruta_folder.replace(/\\/g, '/');

// Ruta al ejecutable de Cmder
var cmderPath = "D:/PRO/iDE/cmder/Cmder.exe"; // Cambia esta ruta si es necesario

// Construir el comando
var command = '"' + cmderPath + '" /start "' + folder + '"';

// Mostrar el comando para verificarlo
// WScript.Echo(command);

// Crear un objeto para ejecutar comandos
var shell = new ActiveXObject("WScript.Shell");

// Ejecutar Cmder
try {
    shell.Run(command);
} catch (e) {
    WScript.Echo("Error al ejecutar el comando: " + e.message);
}
