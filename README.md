# Happy Prajapati | CPSC 581 Portfolio

Check-in 1 portfolio built with React, TypeScript, Vite, and plain CSS. All work lives in this repository. Nothing has been pushed or deployed.

## Run locally

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

The homepage is `/`. The case study is `/projects/four-part-harmony`. Vite serves both routes locally. A future static host must serve `index.html` for application routes; `public/_redirects` includes the Netlify fallback. The preserved original application is `/project/index.html`.

## Edit content

- `src/pages/Home.tsx`: introduction, about, draft design philosophy, selected project, contact.
- `src/pages/CaseStudy.tsx`: evidence, collaborative design process, individual contributions, video, draft reflection, and disclosures.
- `src/components/`: shared navigation and footer.
- `src/styles.css`: responsive layout, colours, and reduced-motion rules.
- `src/interactions.js`: canvas particles, section animation, active navigation, preloader, and video play control.
- `public/assets/`: supplied video and write-up, plus authentic page renders and the final application screenshot extracted from the write-up.

## Contribution attribution

A teammate drew the sketches in the group documentation. Happy contributed through design discussions, collaborative decisions, and the demonstration video. The case study keeps group process images separate from individual contributions and has no personal sketch gallery.

## Evidence and disclosure

Case-study facts come from the supplied Four-Part Harmony write-up. The official portfolio requirements and rubric guided the content structure. Reflection and design philosophy are editable AI-assisted drafts; review them before submission. The homepage footer has an AI Acknowledgement button that opens a native dialog with the supplied acknowledgement and two prompt examples. The dialog supports a Close button, Escape, and backdrop dismissal. The group project’s separate disclosure remains in the linked write-up.

The real demonstration video uses native playback controls, `preload="none"`, inline mobile playback, and no autoplay. The poster is a screenshot from the group write-up, not a decoded frame from the video. No captions or transcript were supplied.

Content is visible without animation initialization. Reduced motion disables motion effects; the canvas pauses offscreen and when the tab is hidden. The preloader has no fixed minimum duration and a CSS timeout fallback. React requires JavaScript to render the application itself.
