# Titan War – Clan Guide Night Wolves

Landing en React + Vite para publicar las reglas del clan y las normas de ataque en Atlantis, con soporte de idiomas.

## Características

- React + Vite + TypeScript.
- Contenido en **inglés** y **español** con un switch en el header.
- Estructura preparada para un tercer idioma (por ejemplo ruso).
- Changelog/versionado visible en la propia landing.
- Fondo personalizable (`public/bg.jpg`).

## Cómo ejecutar

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Construir para producción:

```bash
npm run build
```

## Agregar un tercer idioma (ej. ruso)

1. En `src/data/content.ts`:
   - Cambia el tipo `GuideContent` para incluir también la entrada `ru` en `contentByLang`.
   - Agrega la sección `ru:` con los textos traducidos.
2. En `App.tsx`:
   - Agrega `"ru"` a `AVAILABLE_LANGS` si quieres mostrar el botón.
3. Commit y despliegas de nuevo.

