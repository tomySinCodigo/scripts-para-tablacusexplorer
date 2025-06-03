// obtener el folder (parent) del archivo seleccionado
var ruta_folder = FV.FolderItem.Path;
folder = ruta_folder.replace(/\\/g, '/');
clipboardData.setData("text", folder);
