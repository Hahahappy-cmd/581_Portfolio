export function EvidenceImage({src,alt}: {src: string;alt: string}) {
 return <a className="document-image" href={src} target="_blank" rel="noopener"><img loading="lazy" src={src} alt={alt} width="1468" height="1899" /></a>;
}
