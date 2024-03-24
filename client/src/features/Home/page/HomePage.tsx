import { Layout } from '../../../components/Layout/Layout'
import CarouselContactHome from '../components/CarouselContactHome'
import CardsEventsHome from '../components/CardsEventsHome'


const HomePage = () => {
  return (
    <Layout>

      <section className="bg-[url('../../../hero-img.svg')] bg-no-repeat bg-righ w-full h-screen" >
        <div className="h-screen px-24 justify-start content-center mt-70">
          <h1 className="text-6xl font-bold text-secondary font-headerText">FemCoders Club</h1>
          <br />
          <h2 className="text-2xl font-bold text-secondary font-headerText"><span className="text-tertiary">Juntas</span>  potenciamos el <br />crecimiento y liderazgo de las <br /> mujeres tech.</h2>
        </div>
      </section>

      <section className='h-screen w-full flex flex-row justify-center items-center'>
        <h1>¡Próximos eventos!</h1>
        <CardsEventsHome/>
        <p>Ver todos los evzentos</p>
      </section>

      <section className="bg-[url('../../../bg-values-home.png')] bg-no-repeat bg-righ w-full h-screen">
        <div></div>
      </section>

      <section className='h-screen w-full'>
        <CarouselContactHome/>
      </section>
    </Layout>
  )
}

export default HomePage
