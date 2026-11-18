import {useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {Navigation} from './components/Navigation';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';
import {CaseStudy} from './pages/CaseStudy';
import {AirSculpt} from './pages/AirSculpt';
import {setupInteractions} from './interactions';
import './styles.css';
import {sitePath} from './paths';
function App() {
 const path = window.location.pathname.replace(/\/$/, '');
 const airSculpt = path === sitePath('projects/airsculpt');
 const harmony = path === sitePath('projects/four-part-harmony');
 const caseStudy = airSculpt || harmony;
 useEffect(() => {
   document.title = airSculpt ? 'AirSculpt | Happy Prajapati' : harmony ? 'Four-Part Harmony | Happy Prajapati' : 'Happy Prajapati | CPSC 581 HCI Portfolio';
   setupInteractions();
 }, [airSculpt, harmony]);
 return <><div className="preloader" aria-hidden="true"><span>HP<span className="accent">.</span></span><i /></div><a className="skip" href="#main">Skip to content</a><Navigation caseStudy={caseStudy}/><main id="main">{airSculpt ? <AirSculpt/> : harmony ? <CaseStudy/> : <Home/>}</main><Footer showAcknowledgement={!caseStudy}/></>;
}
createRoot(document.getElementById('root')!).render(<App/>);
