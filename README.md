# Scripts para tablacus explorer

los siguientes han sido probados usando solo dos paneles a la vez (para abrir en otro panel, copiar y mover)

## copiar

> hotkey (addon: `key`) | DEPENDENCIA: x-finder

Copiar el archivo seleccionado a otro panel (usando solo 2 paneles)

**key:** `Ctrl+1`

**type:** `X-Finder`

**options:**

```x-finder
Copy: %Selected% /t %other% /a /b
```

## mover

> hotkey (addon: `key`) | DEPENDENCIA: x-finder

Mover el archivo seleccionado a otro panel (usando solo 2 paneles)

**key:** `Ctrl+2`

**type:** `X-Finder`

**options:**

```x-finder
Move: %Selected% /t %other% /a /b
```

## abre en otro panel

> hotkey (addon: `key`) | DEPENDENCIA: -

abre el folder seleccionado en el otro panel (usando solo 2 paneles)

**key:** `Ctrl+Q`

**type:** `JavaScript`

**options:**

```js
Sync.SwitchPane.NextFV().Navigate(GetFolderView(), SBSP_NEWBROWSER);
```

