# Portfolio · Jose Antonio Holgado

Portfolio personal de **Jose Antonio Holgado**, Data Engineer y Frontend Developer.

## Tecnologías

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Motion](https://motion.dev) para las animaciones
- Iconos de [Lucide](https://lucide.dev) y [React Icons](https://react-icons.github.io/react-icons)

## Desarrollo

```bash
bun install
bun dev
```

## Editar el contenido

Todo el texto (perfil, habilidades, proyectos, experiencia) está en [`src/data.ts`](src/data.ts).
Las imágenes de los proyectos están en `src/assets/projects/` y el CV en `public/`.

## Publicar en GitHub Pages

```bash
bun run deploy
```

Esto genera la web y la sube a la rama `gh-pages`. Después, en GitHub, ve a
**Settings → Pages** y elige la rama `gh-pages` como origen.
