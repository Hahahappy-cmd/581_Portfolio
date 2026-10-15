import {sitePath} from "../paths";
import {useRef} from 'react';

export function Footer({showAcknowledgement = false}: {showAcknowledgement?: boolean}) {
  const acknowledgement = useRef<HTMLDialogElement>(null);
  return <footer className="site-footer">
    {showAcknowledgement && <dialog ref={acknowledgement} id="ai-acknowledgement" className="acknowledgement-dialog" aria-labelledby="ai-acknowledgement-title" onClick={event => {
      if (event.target === event.currentTarget) {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) acknowledgement.current?.close();
      }
    }}>
      <div className="acknowledgement-toolbar"><button type="button" className="acknowledgement-close" onClick={() => acknowledgement.current?.close()} autoFocus>Close <span aria-hidden="true">×</span></button></div>
      <section className="ai-acknowledgement">
      <h2 id="ai-acknowledgement-title">Generative AI Acknowledgement</h2>
      <p>I used OpenAI Codex as a coding assistant to develop my CPSC 581 portfolio website. The design ideas, layout preferences, visual direction, and project contributions were my own. Codex assisted with translating my requirements into code, implementing animations, organizing components, and resolving technical issues. I reviewed the generated code and made decisions about what to include in the final portfolio.</p>
      <h3>Prompt Examples:</h3>
      <blockquote><p>I have created my own design ideas and layout plan for my CPSC 581 portfolio. My design includes a homepage introducing myself, an About Me section, a Design Philosophy section, and a dedicated project showcase for Four-Part Harmony. I want to present my sketches, design decisions, iterations, and personal contributions in a clear visual timeline with screenshots and short descriptions. I also want a modern, minimalistic appearance with subtle animations and a particle background, inspired by my existing personal portfolio. Help me implement these ideas using React, TypeScript, and CSS in a separate repository. Act only as a coding assistant and follow my design direction.</p></blockquote>
      <blockquote><p>I have prepared the content and design process for my CPSC 581 Group Project 1, Four-Part Harmony. Help me organize it into a clear and visually appealing case study using my project write-up, sketches, screenshots, and demonstration video. Structure the content around our initial ideas, design decisions, prototyping, evaluation, final design, and personal reflection. Highlight my individual contributions, which include participating in design discussions, making collaborative design decisions, and creating the project demonstration video. The sketches were created by my teammates and should be presented as group work. Keep the writing simple and concise, and use only the information I provide. Act as a coding and content-organization assistant without inventing project details or contributions.</p></blockquote>
    </section></dialog>}
    <div className="footer-bar"><a className="wordmark" href={sitePath("/#home")}>HP<span>.</span></a><p>Happy Prajapati · CPSC 581 · Fall 2026</p>{showAcknowledgement && <button type="button" className="acknowledgement-trigger" aria-haspopup="dialog" aria-controls="ai-acknowledgement" onClick={() => acknowledgement.current?.showModal()}>AI Acknowledgement <span aria-hidden="true">↗</span></button>}<a href={sitePath("/#home")}>Back to home ↑</a></div>
  </footer>;
}
