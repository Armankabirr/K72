# K72 — React + Vite Creative Website

A modern, animation-heavy front-end website built with React, Vite, Tailwind CSS v4, GSAP, and React Router.

The project contains a fullscreen hero experience, custom animated navigation, route transitions, scroll-driven motion, and responsive page layouts inspired by a creative agency portfolio style.

## Live Demo

- Production URL: https://k72-kbj0.onrender.com/

## Tech Stack

- **Framework:** React 19
- **Bundler/Dev Server:** Vite 7
- **Routing:** React Router DOM 7
- **Animation:** GSAP + ScrollTrigger + `@gsap/react`
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`) + custom CSS
- **Linting:** ESLint 9 (flat config)

## Requirements

- **Node.js:** `>= 20.0.0` (enforced in `package.json`)
- **npm:** latest stable recommended

## Getting Started

1. Clone the repository

```bash
git clone <your-repository-url>
cd K72
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open the local URL shown by Vite (usually `http://localhost:5173`)

## Available Scripts

- `npm run dev` — start local dev server with HMR
- `npm run build` — create production build in `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint across the codebase

## Application Routes

- `/` — Home page (video background + hero text + navigation call-to-actions)
- `/projects` — Project showcase with scroll animation and project cards
- `/agence` — Agency page with pinned image sequence animation and descriptive copy

## Project Structure

```text
src/
	App.jsx                     # Top-level route map + persistent navigation
	main.jsx                    # React root, BrowserRouter, global wrappers
	index.css                   # Tailwind import, fonts, shared animation helpers
	context/
		NavContext.jsx            # Navbar open state + dynamic navbar color context
	pages/
		Home.jsx
		Projects.jsx
		Agence.jsx
	components/
		common/
			Stairs.jsx              # Route transition stair animation wrapper
		navigations/
			Navbar.jsx              # Top fixed navbar + menu trigger
			FullScreenNav.jsx       # Fullscreen menu overlay with GSAP timeline
		home/
			Video.jsx
			HomeHeroText.jsx
			HomeBottomText.jsx
		projects/
			ProjectCard.jsx
			ProjectsFooter.jsx
public/
	video.mp4                   # Home/background video source
	fonts/                      # Local Lausanne font files
```

## Architecture Notes

- `App.jsx` keeps `Navbar` and `FullScreenNav` mounted globally while route content changes.
- `main.jsx` wraps the app in:
	- `BrowserRouter` for client-side routing
	- `Stairs` for route transition effects
	- `NavContext` for shared navigation state
- `NavContext` manages:
	- `navOpen` state (fullscreen menu visibility)
	- `navColor` state (changes by route)
- GSAP is used for:
	- page transition stairs (`Stairs.jsx`)
	- fullscreen nav entrance/exit (`FullScreenNav.jsx`)
	- scroll-triggered image and card motion (`Agence.jsx`, `Projects.jsx`)

## Styling and Assets

- Tailwind CSS is enabled through Vite plugin integration (`@tailwindcss/vite`).
- Local fonts are registered in `src/index.css` as:
	- `font1` (`Lausanne-300.woff2`)
	- `font2` (`Lausanne-500.woff2`)
- Custom utility classes in `index.css` support marquee/hover effects (`moveX`, `moveLink`).
- Several images are loaded from remote URLs; internet access is required for them to display.

## Build and Deployment

### Production Build

```bash
npm run build
```

Vite outputs static assets to `dist/`.

### Local Production Preview

```bash
npm run preview
```

### Deploy Options

Deploy the generated `dist/` folder to any static host, for example:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

If using client-side routing on your host, ensure fallback rewrites route all paths to `index.html`.

## Development Tips

- Run `npm run lint` before pushing changes.
- Keep animation logic in component-local timelines for easier maintenance.
- Prefer context updates in `NavContext` for navigation-related shared state.
- Test route transitions after editing `Stairs.jsx`, `Navbar.jsx`, or `FullScreenNav.jsx`.

## Known Considerations

- Navbar logo color currently switches based on pathname logic in `Navbar.jsx`.
- Some UI labels/text are in French, consistent with current design/content.
- The app depends on external image URLs for multiple sections; unavailable URLs will show broken images.

## License

No license file is currently included in this repository. Add a `LICENSE` file if you plan to distribute publicly.
