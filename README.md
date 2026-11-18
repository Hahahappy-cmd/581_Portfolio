# Happy Prajapati | CPSC 581 Portfolio

CPSC 581 portfolio for Check-ins 1 and 2, built with React, TypeScript, Vite, and plain CSS. All work lives in this repository. The portfolio is hosted on GitHub Pages; local changes require a commit and push to publish.

## Run locally

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

The site uses the `/581_Portfolio/` base path locally and on GitHub Pages. The homepage is `/581_Portfolio/`, the case studies are `/581_Portfolio/projects/four-part-harmony/` and `/581_Portfolio/projects/airsculpt/`, and the preserved original application is `/581_Portfolio/project/index.html`. Use the URL printed by Vite when starting the development server.

## GitHub Pages hosting

In the GitHub repository, select **Settings > Pages > Build and deployment > Source > GitHub Actions**. After you push the changes to `main`, `.github/workflows/deploy-pages.yml` installs dependencies, builds, and deploys `dist`. You can also run the workflow manually from the Actions tab. No push or deployment has been performed locally.

The published URL is `https://<username>.github.io/581_Portfolio/`. The repository name and casing must match `base` in `vite.config.js`. The build creates physical HTML entries for both case studies so direct visits and refreshes work without server rewrites. Public assets and navigation use `src/paths.ts` to retain the repository prefix.

## Edit content

- `src/pages/Home.tsx`: introduction, about, draft design philosophy, selected projects, contact.
- `src/pages/CaseStudy.tsx`: evidence, collaborative design process, individual contributions, video, and draft reflection for Four-Part Harmony.
- `src/pages/AirSculpt.tsx`: Group Project 2 overview, six-stage design process, group evidence, individual contributions, video, and draft reflection.
- `src/components/`: shared navigation, footer, project cards, and evidence images.
- `src/styles.css`: responsive layout, colours, and reduced-motion rules.
- `src/interactions.js`: hero canvas particles, section animation, active navigation, and video play control.
- `src/components/Preloader.tsx` and `Preloader.css`: the isolated GSAP greeting/warp intro.
- `src/assets/preloader-fonts/`: reference typography and font licenses.
- `public/assets/`: supplied video and write-up, plus authentic page renders and the final application screenshot extracted from the write-up.

## Contribution attribution

A teammate drew the sketches in the group documentation. Happy contributed through design discussions, collaborative decisions, and the demonstration video. The case study keeps group process images separate from individual contributions and has no personal sketch gallery.

## Evidence and disclosure

Case-study facts come from the supplied Four-Part Harmony and AirSculpt write-ups. The official portfolio requirements and rubric guided the content structure. Reflection and design philosophy are editable AI-assisted drafts; review them before submission. The homepage footer has an AI Acknowledgement button that opens a native dialog with the supplied acknowledgement and two prompt examples. The dialog supports a Close button, Escape, and backdrop dismissal. The group project’s separate disclosure remains in the linked write-up.

Both real demonstration videos use native playback controls, `preload="none"`, inline mobile playback, and no autoplay. The posters are screenshots extracted from the respective group write-ups, not decoded video frames. No captions or transcript were supplied.

Content is visible without animation initialization. Reduced motion disables motion effects; the canvas pauses offscreen and when the tab is hidden. The custom preloader follows the supplied greeting/warp timeline: HELLO, नमस्ते, કેમ છો, then white radial streaks. The overlay hides around 5.15 seconds and finishes around 6.05 seconds, restoring the previous body overflow. Reduced motion skips it, including when enabled during playback. It runs once per mount, so full document navigation replays it and anchor links do not. Its fonts are bundled locally with their licenses, and its CSS is scoped to the component. React requires JavaScript to render the application itself.

## Group Project 2: AirSculpt

The AirSculpt case study uses the supplied report and demonstration video, stored in `public/assets/airsculpt/`. Its project link is `https://airsculpt.onrender.com`. Happy’s confirmed contributions are collaborative design and feature decisions and creating the demonstration video. Group sketches and implementation iterations are presented as team evidence. The report distinguishes task-based and heuristic evaluation from controlled learning-outcome research; the portfolio preserves that distinction. The reflection is an editable draft. No new Sources & credits section was added.

AirSculpt media: `demonstration.mp4` is the original supplied video, `write-up.pdf` is the original supplied report, `process-*.jpg` are rendered report pages, and `poster.jpg` is the final classroom screenshot from report p. 12. Video rendering and playback still need a browser check before submission.
