const projects = [
  {
    alt: 'Carbon Design System - React',
    url: 'https://react.carbondesignsystem.com/',
    src: 'images/carbon-react.png'
  },
  {
    alt: 'Carbon Design System Website',
    url: 'https://carbondesignsystem.com/',
    src: 'images/carbon-website.png'
  },
  {
    alt: 'IBM - Racial Equity in Design',
    url: 'https://www.ibm.com/design/racial-equity-in-design/',
    src: 'images/reid-bg.png'
  },
  {
    alt: 'MV3 Minting',
    url: 'https://www.mv3access.com/',
    src: 'images/mv3-access.png'
  },
  {
    alt: 'MV3 Gallery',
    url: 'https://gallery.mv3.io/',
    src: 'images/mv3-gallery.png'
  },
];

export default function ProjectCard() {
  return (
    <>
      {projects.map((project) => (
        <div className="grid">
          <a href={project.url} className='project-card w-full'>
            <img alt={project.alt} src={project.src} />
          </a>
          <p>{project.alt}</p>
        </div>
      ))}
    </>
  )
}