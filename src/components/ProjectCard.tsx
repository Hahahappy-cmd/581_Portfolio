import {sitePath} from '../paths';

type ProjectCardProps = {
  slug?: string;
  image?: string;
  imageAlt?: string;
  imageHeight?: number;
  label?: string;
  context?: string;
  title?: string;
  description?: string;
  tags?: string[];
};

export function ProjectCard({
  slug = 'four-part-harmony',
  image = '/assets/demo-poster.jpg',
  imageAlt = 'Four-Part Harmony application with a shared stage and a supporting band information panel',
  imageHeight = 935,
  label = 'A FAMILY OF BUTTONS',
  context = 'GROUP PROJECT 01 · INTERACTIVE WEB APPLICATION',
  title = 'Four-Part Harmony',
  description = 'When personality becomes sound, movement, and connection.',
  tags = ['Interaction design', 'Iterative prototyping', 'Canvas + Web Audio'],
}: ProjectCardProps) {
  const caseStudy = sitePath(`/projects/${slug}`);
  return <article className="project-card reveal">
    <a className="project-visual" href={caseStudy}>
      <img src={sitePath(image)} alt={imageAlt} width="1600" height={imageHeight} />
      <span className="image-label">{label}</span>
      <span className="visual-arrow" aria-hidden="true">↗</span>
    </a>
    <div className="project-info">
      <div>
        <p className="eyebrow">{context}</p>
        <h3><a href={caseStudy}>{title}</a></h3>
        <p>{description}</p>
      </div>
      <a className="text-link" href={caseStudy}>Read the case study <span>↘</span></a>
    </div>
    <div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </article>;
}
