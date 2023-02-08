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
    id: 'MV3',
    alt: 'MV3',
    url: 'https://mv3.io/',
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
