import Layout from "../src/components/Layout/layout";
import Projects from "../src/components/Projects";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className='page w-full h-full px-6 lg:px-12 xl:px-20 pt-8 lg:pt-12'>
        <Projects />
      </div>
    </Layout>
  )
}