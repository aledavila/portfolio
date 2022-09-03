const projects = [
  {
    id: 'IBM-React',
    alt: 'Carbon Design System - React',
    url: 'https://react.carbondesignsystem.com/',
    src: 'images/carbon-react.png'
  },
  {
    id: 'IBM-Website',
    alt: 'Carbon Design System Website',
    url: 'https://carbondesignsystem.com/',
    src: 'images/carbon-website.png'
  },
  {
    id: 'IBM-Reid',
    alt: 'IBM - Racial Equity in Design',
    url: 'https://www.ibm.com/design/racial-equity-in-design/',
    src: 'images/reid-bg.png'
  },
  {
    id: 'MV3-Mint',
    alt: 'MV3 Minting',
    url: 'https://www.mv3access.com/',
    src: 'images/mv3-access.png'
  },
  {
    id: 'MV3-Gallery',
    alt: 'MV3 Gallery',
    url: 'https://gallery.mv3.io/',
    src: 'images/mv3-gallery.png'
  },
];

export default function ProjectCard() {
  return (
    <>
      {projects.map((project) => (
        <div key={project.id} className="grid">
          <a href={project.url} className='project-card w-full'>
            <img alt={project.alt} src={project.src} />
          </a>
          <p>{project.alt}</p>
        </div>
      ))}
    </>
  )
}