# CEPEC SpA — Corporate Website

Official corporate website for **CEPEC SpA** (Centro de Estudios, Proyectos y Construcción), a Chilean construction and engineering company based in the Región de Valparaíso.

Developed by [AnichLabs OÜ](https://anichlabs.com) as part of its digital infrastructure services.

---

## Tech Stack

- [Astro](https://astro.build/) 6.4.4 — static site generator
- [React](https://react.dev/) — component islands
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- Based on the [AstroFlow](https://github.com/your-template-source) template

## Pages

| Route | Description |
|---|---|
| `/` | Inicio — homepage |
| `/empresa` | Nuestra Empresa |
| `/servicios` | Servicios |
| `/estudios` | Unidad de Estudios |
| `/alianzas` | Alianzas Estratégicas |
| `/galeria` | Galería |
| `/contacto` | Contáctanos |

## Local Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build

```bash
npm run build
```

Output is generated in the `dist/` directory. This is a fully static build with no server-side rendering.

## Deployment

The site is deployed via GitHub Pages. Pushing to `main` triggers the build and deployment workflow automatically.

The live site is served at [cepec.cl](https://cepec.cl).

## Project Structure

```
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Organisation

CEPEC SpA is the parent company. Associated entities:

- **Constructora MyS** — primary construction filial
- **AnichLabs OÜ** — technology and AI alliance (developer of this site)
- **Planic SpA** — engineering alliance
- **INCOS** — civil works alliance

## Contact

contacto@cepec.cl

---

© CEPEC SpA. Developed by [AnichLabs OÜ](https://anichlabs.com).
