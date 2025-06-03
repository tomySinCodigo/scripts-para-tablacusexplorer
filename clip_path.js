// path del archivo seleccionado a clipboard (ruta completa)
var ruta_raw = (FV.FocusedItem || FV.FolderItem).Path;
ruta = ruta_raw.replace(/\\/g, '/');
clipboardData.setData("text", ruta);