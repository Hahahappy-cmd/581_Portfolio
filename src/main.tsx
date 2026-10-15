import {useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {Navigation} from './components/Navigation';
import {Footer} from './components/Footer';
import {Home} from './pages/Home';
import {CaseStudy} from './pages/CaseStudy';
import {setupInteractions} from './interactions';
import './styles.css';
function App() {
 const caseStudy = window.location.pathname.replace(/\/$/, '') === '/projects/four-part-harmony';
 useEffect(() => {
   document.title = caseStudy ? 'Four-Part Harmony | Happy Prajapati' : 'Happy Prajapati | CPSC 581 HCI Portfolio';
   setupInteractions();
 }, [caseStudy]);
 return <><div className="preloader" aria-hidden="true"><span>HP<span className="accent">.</span></span><i /></div><a className="skip" href="#main">Skip to content</a><Navigation caseStudy={caseStudy}/><main id="main">{caseStudy ? <CaseStudy/> : <Home/>}</main><Footer showAcknowledgement={!caseStudy}/></>;
}
createRoot(document.getElementById('root')!).render(<App/>);
