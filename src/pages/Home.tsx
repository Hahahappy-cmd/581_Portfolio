import {ProjectCard} from "../components/ProjectCard";
export function Home() { return <>

<section className="hero" id="home"><canvas id="stars" aria-hidden="true"></canvas><div className="hero-content"><p className="eyebrow"><span className="status"></span> CPSC 581 · HUMAN-COMPUTER INTERACTION</p><h1>Happy<br />Prajapati<span className="accent">.</span></h1><p className="hero-role">Computer Science Student | University of Calgary</p><p className="hero-course">CPSC 581 | Human-Computer Interaction II</p><div className="hero-bottom"><p>Learning to design interactive experiences that are clear and enjoyable to use.</p><div className="hero-actions"><a className="button" href="#projects">Explore My Work ↓</a><a className="text-link" href="#philosophy">My Design Philosophy ↘</a></div></div></div><div className="hero-foot"><span>UNIVERSITY OF CALGARY</span><span>DESIGN PORTFOLIO / FALL 2026</span></div></section>
<section className="section" id="about"><p className="eyebrow">01 / ABOUT ME</p><div className="split"><h2>Building things.<br />Understanding people.</h2><div><p className="large">I’m a Computer Science student at the University of Calgary with an interest in technology, user experience, and interactive design.</p><p>My software development background has taught me how to build working systems. Through HCI, I’m learning to ask a different set of questions: Is the interaction understandable? Does the feedback make sense? Is the experience enjoyable to use?</p><p>This portfolio follows that learning through my course projects, with attention to the ideas I explored, the decisions I contributed to, and what I would improve.</p></div></div></section><section className="section" id="philosophy"><div className="section-heading"><p className="eyebrow">02 / MY DESIGN PHILOSOPHY · EDITABLE DRAFT</p><h2>How I approach<br />design.</h2><p>I want to design around the people using a system: what they need to do, what they expect, and what helps them feel confident exploring it. People should be able to understand what a system does and how to use it.</p></div><div className="contribution-grid"><article><span className="step">01 / CLARITY</span><h3>Make the next step understandable.</h3><p>I value simple interfaces and clear language. Meaningful feedback should help someone understand what changed and why, without needing a long explanation.</p></article><article><span className="step">02 / EXPLORATION</span><h3>Give alternatives a chance.</h3><p>Discussing ideas and reviewing sketches helps me compare different possibilities before committing to code. I want to choose a direction because it fits the problem, then keep improving it through review and iteration.</p></article><article><span className="step">03 / PEOPLE</span><h3>Make participation easier.</h3><p>I want to consider accessibility and usability throughout the process: readable content, keyboard access, reduced motion, and feedback that does not depend on sound or colour alone.</p></article></div></section><section className="section" id="projects"><div className="section-heading reveal"><p className="eyebrow">03 / SELECTED WORK</p><h2>Projects in<br />interaction design.</h2><p>Exploring how interactions can communicate identity, connect people, and support learning.</p></div>
<div className="project-list">
<ProjectCard />
<ProjectCard
  slug="airsculpt"
  image="/assets/airsculpt/poster.jpg"
  imageAlt="AirSculpt studio with a live class wall of independent student sculptures and expert guidance controls"
  imageHeight={1069}
  label="EXPERTISE SHARING"
  context="GROUP PROJECT 02 · REMOTE 3D SCULPTING"
  title="AirSculpt"
  description="Sharing sculpting techniques through movement, practice, and feedback."
  tags={['Embodied interaction', 'Expertise sharing', '3D sculpting']}
/>
</div></section>
<section className="section contact" id="contact"><p className="eyebrow">04 / CONTACT</p><h2>Let’s talk<br />about interaction.</h2><p>Questions about my course work or design process?</p><a className="contact-email" href="mailto:happy.prajapati@ucalgary.ca">happy.prajapati@ucalgary.ca ↗</a></section>
</>; }
