export function Navigation({caseStudy}: {caseStudy: boolean}) {
  const home = caseStudy ? '/' : '';
  return <header className="header"><a className="wordmark" href={home + '#home'} aria-label="Happy Prajapati home">HP<span>.</span></a><nav aria-label="Main navigation">{[['home','Home'],['about','About'],['philosophy','Design Philosophy'],['projects','Projects'],['contact','Contact']].map(([id,label]) => <a key={id} href={home + '#' + id} className={caseStudy && id === 'projects' ? 'active' : undefined} aria-current={caseStudy && id === 'projects' ? 'page' : undefined}>{label}</a>)}</nav></header>;
}
