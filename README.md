# Scripts para tablacus explorer

los siguientes han sido probados usando solo dos paneles a la vez (para abrir en otro panel, copiar y mover)

## copiar

Copiar el archivo seleccionado a otro panel (usando solo 2 paneles)

DEPENDENCIA: x-finder
hotkey (addon: `key`)

**key:** Ctrl+1 
**type:** X-Finder 
**options:** 

```x-finder
Copy: %Selected% /t %other% /a /b
```

## mover

Mover el archivo seleccionado a otro panel (usando solo 2 paneles)

DEPENDENCIA: x-finder 
hotkey (addon: `key`) 

**key:** Ctrl+2 
**type:** X-Finder 
**options:**

```x-finder
Move: %Selected% /t %other% /a /b
```

## abre en otro panel
abre el folder seleccionado en el otro panel (usando solo 2 paneles)

DEPENDENCIA: x-finder 
hotkey (addon: `key`) 

**key:** Ctrl+Q 
**type:** JavaScript 
**options:**

```js
Sync.SwitchPane.NextFV().Navigate(GetFolderView(), SBSP_NEWBROWSER);
```

