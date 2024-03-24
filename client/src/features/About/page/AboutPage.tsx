
import { Layout } from '../../../components/Layout/Layout'

const AboutPage= () => {
  return (
    <Layout>
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-1/2  bg-no-repeat"style={{backgroundImage: "url('/bg-about.svg')"}} >
        </div>

        <div className='absolute bg-primary w-full  flex flex-col lg:flex items-center pt-'>
          <h1 className="text-4xl lg:text-6xl font-bold text-secondary">FemCoders Club</h1>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage