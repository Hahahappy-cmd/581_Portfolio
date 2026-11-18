import {sitePath} from '../paths';
import {EvidenceImage} from '../components/EvidenceImage';

const evidence = (page: number) => sitePath(`/assets/airsculpt/process-${page}.jpg`);

export function AirSculpt() {
  return <>
    <div className="case-breadcrumb">
      <a href={sitePath('/#projects')}>← Back to projects</a>
      <span>GROUP PROJECT 2 / AIRSCULPT</span>
    </div>

    <section className="section case-intro" id="case-study">
      <p className="eyebrow">THE CASE STUDY / AIRSCULPT</p>
      <div className="split">
        <h2>Sharing a skill<br />through movement.</h2>
        <div>
          <p className="large">How can an expert show someone where, how, and how strongly to sculpt when they are learning remotely?</p>
          <p>AirSculpt is a browser-based 3D sculpting lesson. An expert demonstrates Pull, Push, and Smooth using webcam-tracked finger movement and a pinch gesture, with mouse input available as a fallback. The learner sees a translucent ghost and stroke path, then practises on a separate clay model.</p>
          <p>Feedback shows where the learner needs to add or remove material. The expert can point at the learner’s model without editing it. A later classroom mode lets students join on their phones and practise independently while the teacher sees their progress.</p>
          <div className="actions">
            <a className="button" href="https://airsculpt.onrender.com" target="_blank" rel="noopener noreferrer">Try AirSculpt ↗</a>
            <a className="text-link" href={sitePath('/assets/airsculpt/write-up.pdf')}>Read the group write-up ↗</a>
          </div>
        </div>
      </div>
      <dl className="facts">
        <div><dt>CONTEXT</dt><dd>CPSC 581 · Group Project 2<br />Expertise Sharing</dd></div>
        <div><dt>TEAM</dt><dd>Hardik Mehta · Shashwat Tank<br />Happy Prajapati · Jawad Naheen Shamim</dd></div>
        <div><dt>MY CONTRIBUTION</dt><dd>Design and feature decisions<br />Demonstration video</dd></div>
      </dl>
      <figure className="airsculpt-final">
        <a href={sitePath('/assets/airsculpt/poster.jpg')} target="_blank" rel="noopener">
          <img src={sitePath('/assets/airsculpt/poster.jpg')} alt="AirSculpt classroom studio with Pull, Push, and Smooth tools, a class wall of separate student models, and expert guidance controls" width="1600" height="1069" />
        </a>
        <figcaption className="caption">Final classroom interface from the group write-up, p. 12. The class wall shows separate attempts and progress.</figcaption>
      </figure>
    </section>

    <section className="section" id="process">
      <div className="section-heading reveal">
        <p className="eyebrow">02 / THE DESIGN PROCESS</p>
        <h2>From hand gestures<br />to a shared lesson.</h2>
        <p>The group write-up documents six implementation iterations. These images show the group’s concepts and refinements; they are not presented as my individual sketches. Some sketches were created retrospectively to explain the design.</p>
      </div>
      <div className="process-grid airsculpt-process">
        <article className="process-step reveal">
          <span className="step">01 / EXPLORE THE INPUT</span>
          <h3>Compare ways to demonstrate movement.</h3>
          <p>The group explored a phone wand, webcam pinch control, and a tracked stylus. Webcam input kept hand movement central without requiring specialist equipment. Pointing positions the brush and pinching starts a stroke, while tool selection stays explicit. Mouse input provides a reliable alternative when tracking or camera access is unavailable.</p>
          <EvidenceImage src={evidence(3)} alt="Group write-up page 3 showing phone wand, webcam hand-pinch, and tracked stylus concepts" />
          <p className="caption">Group evidence · Input alternatives, write-up p. 3.</p>
        </article>
        <article className="process-step reveal">
          <span className="step">02 / ESTABLISH THE TEACHING LOOP</span>
          <h3>Demonstrate, observe, then practise.</h3>
          <p>The first prototype gave the expert and novice distinct roles and separate clay models. Demonstration strokes appeared as a live ghost and path for the learner. Keeping the models separate meant the expert could teach a technique while the learner remained responsible for applying it.</p>
          <EvidenceImage src={evidence(6)} alt="Group write-up page 6 with expert and novice wireframes, gesture mapping, and first prototype screenshots" />
          <p className="caption">Group evidence · Interaction rules and iteration 1, write-up p. 6.</p>
        </article>
        <article className="process-step reveal">
          <span className="step">03 / MAKE CORRECTION ACTIONABLE</span>
          <h3>A percentage was not enough.</h3>
          <p>The original global comparison could give an untouched sphere approximately 97% similarity because most vertices were unchanged. Iteration 2 focused comparison on the sculpted region. Blue marks areas needing Pull, orange-red marks areas needing Push, and Point &amp; guide lets the expert indicate a location without changing the learner’s model.</p>
          <EvidenceImage src={evidence(7)} alt="Group write-up page 7 documenting the misleading initial score and the blue Pull and orange-red Push feedback" />
          <p className="caption">Group evidence · Scoring and directional feedback, write-up p. 7.</p>
        </article>
        <article className="process-step reveal">
          <span className="step">04 / EXTEND THE TECHNIQUE</span>
          <h3>Show pressure and inspect the shape.</h3>
          <p>Iteration 3 added calibrated hand-distance pressure, stronger-looking stroke beads, and optional audio feedback. Iteration 4 made rotation easier to discover and added a rounded cube, capsule, and torus alongside the sphere. Shape selection is locked once sculpting begins so recorded strokes remain meaningful.</p>
          <EvidenceImage src={evidence(9)} alt="Group write-up page 9 showing torus and capsule lessons and the move toward a clay-centred studio" />
          <p className="caption">Group evidence · Object choice, view controls, and studio refinement, write-up p. 9.</p>
        </article>
        <article className="process-step reveal">
          <span className="step">05 / REFINE THE HIERARCHY</span>
          <h3>Keep the clay in focus.</h3>
          <p>Large panels competed with the object being taught. Iteration 5 moved controls onto floating translucent panels and adjusted the lighting so small ridges were easier to see. Narrow-screen review views were stacked, and rotation instructions and Reset view remained available.</p>
          <EvidenceImage src={evidence(1)} alt="Group write-up cover showing the refined expert demonstration and novice practice studios side by side" />
          <p className="caption">Group evidence · Refined expert and novice views, write-up p. 1.</p>
        </article>
        <article className="process-step reveal">
          <span className="step">06 / INVOLVE THE CLASS</span>
          <h3>Give each learner their own attempt.</h3>
          <p>Classroom mode lets students join by QR code and sculpt on their phones without camera calibration. Each learner receives the demonstration but keeps independent edits and feedback. A live class wall gives the expert a shared progress view, with pointing and hints available to the class.</p>
          <EvidenceImage src={evidence(11)} alt="Group write-up page 11 showing QR joining, the live class wall, and ghost and correction concepts" />
          <p className="caption">Group evidence · Classroom participation and feedback layers, write-up p. 11.</p>
        </article>
      </div>
      <div className="insight reveal">
        <span>THE MAIN DESIGN LESSON</span>
        <p>Feedback needs to show a learner<br />what to change, where, and why.</p>
      </div>
      <div className="limitations">
        <h3>Evaluation and scope</h3>
        <p>The write-up describes walkthroughs, heuristic review, task-based testing, and regression checks. Study logging and a verbal-only baseline were implemented, but no controlled participant learning outcomes are reported. Shape match is a geometric comparison, not a measure of learning.</p>
        <p>AirSculpt teaches Blender-like techniques in its own sculpting environment; it does not integrate with Blender. Session state is stored in server memory, so a restart starts new sessions.</p>
      </div>
    </section>

    <section className="section" id="contributions">
      <div className="section-heading reveal">
        <p className="eyebrow">03 / MY INDIVIDUAL CONTRIBUTION</p>
        <h2>My role<br />in AirSculpt.</h2>
        <p>I contributed to design and feature decisions with the group and created the demonstration video. The implementation progression above describes the team’s work.</p>
      </div>
      <div className="contribution-grid contribution-pair">
        <article>
          <span className="step">01 / COLLABORATION</span>
          <h3>Design and feature decisions</h3>
          <p>I took part in discussions about the design and which features to include. These decisions involved balancing the hand-based interaction with a lesson that people could follow, clear corrective feedback, and practical ways to participate. The final direction was decided collaboratively.</p>
        </article>
        <article>
          <span className="step">02 / COMMUNICATION</span>
          <h3>Demonstrating the experience</h3>
          <p>I created the demonstration video to communicate AirSculpt’s interactions and features. Showing the application in use helped explain how demonstration, practice, and feedback fit together.</p>
        </article>
      </div>
      <div className="video-section reveal" id="demonstration">
        <div className="video-heading"><div><p className="eyebrow">INDIVIDUAL CONTRIBUTION / COMMUNICATION</p><h3>Project Demonstration Video</h3></div></div>
        <p>I prepared this demonstration to show the application’s main interactions and how they support sharing a sculpting technique.</p>
        <div className="video-wrap">
          <video controls preload="none" playsInline poster={sitePath('/assets/airsculpt/poster.jpg')} aria-label="AirSculpt project demonstration created by Happy Prajapati">
            <source src={sitePath('/assets/airsculpt/demonstration.mp4')} type="video/mp4" />
            Your browser does not support embedded video. <a href={sitePath('/assets/airsculpt/demonstration.mp4')}>Download the demonstration</a>.
          </video>
          <button className="video-play" type="button" aria-label="Play project demonstration"><span aria-hidden="true">▶</span><span>Play demonstration</span></button>
        </div>
        <a className="video-fallback" href={sitePath('/assets/airsculpt/demonstration.mp4')}>Open video directly ↗</a>
      </div>
    </section>

    <section className="section reflection" id="reflection">
      <p className="eyebrow">04 / REFLECTION · DRAFT</p>
      <div className="split">
        <h2>What I learned<br />about sharing a skill.</h2>
        <div>
          <p className="large">A learner needs a useful next step.</p>
          <div id="reflection-draft">
            <p>Taking part in the design and feature discussions made me think about how someone would learn from the interaction. A hand gesture can make the demonstration more expressive, but the learner still needs to understand where to act and what to change.</p>
            <p>The scoring issue was a useful example of why feedback needs to match the task. A high percentage would not help if someone had barely changed their model. The directional feedback made the difference easier to interpret.</p>
            <p>Creating the demonstration video helped me look at the application as a sequence of steps. I had to think about what a first-time viewer needed to see to understand the expert’s demonstration and the learner’s response.</p>
          </div>
          <p className="caption">Draft reflection for review and editing.</p>
        </div>
      </div>
      <div className="philosophy">
        <p className="eyebrow">EMERGING DESIGN PHILOSOPHY · DRAFT</p>
        <h3>Make feedback useful for the next action.</h3>
        <p>Four-Part Harmony explored how feedback could explain relationships. AirSculpt helped me consider how it could guide someone through a skill. I want to keep asking whether an interface gives people enough information to decide what to do next.</p>
      </div>
    </section>
  </>;
}
