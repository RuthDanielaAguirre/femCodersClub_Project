import { Layout } from '../../../components/Layout/Layout'
import { Link } from "react-router-dom";
import CarouselContactHome from '../components/CarouselContactHome'
import CardsEventsHome from '../components/CardsEventsHome'
import ValuesCardsHome from '../components/ValuesCardsHome';
import { styles } from "../../../style";



const HomePage = () => {
  return (
    <Layout>

      <section className="bg-[url('../../../hero-img.svg')] bg-no-repeat bg-righ w-full h-[680px] bg-cover" >
        <div className="h-screen px-24 justify-start content-center mt-70">
          <h1 className="text-6xl font-bold text-secondary font-headerText">FemCoders Club</h1>
          <br />
          <h2 className="text-2xl font-bold text-secondary font-headerText"><span className="text-tertiary">Juntas</span>  potenciamos el <br />crecimiento y liderazgo de las <br /> mujeres tech.</h2>
          <div className='py-2 flex gap-4 mt-4'>
            <Link to="/contacto"><button className={`${styles.primaryBtn} w-[180px]`}>Únete al club</button></Link>
            <Link to="/eventos"><button className={`${styles.primaryBtn} w-[180px] `}>Ver eventos</button></Link>
          </div>
        </div>
      </section>

      <section className='h-screen w-full flex justify-center items-center px-24 mt-8 mb-8'>
        <div className='flex flex-col items-center'>
          <h1 className='text-6xl font-bold text-secondary font-headerText mb-16'>¡Próximos eventos!</h1>
          <CardsEventsHome />
          <Link to="/eventos"><p className='text-xl font-bold text-secondary font-headerText py-2 my-4 hover:border-b-2 border-tertiary'>Ver todos los eventos</p></Link>
        </div>
      </section>

      <section className="bg-[url('../../../bg-values-home.png')] bg-no-repeat bg-righ bg-cover w-full h-[650px] flex justify-center items-center">
        <div className='flex flex-col items-center'>
          <h1 className="text-6xl font-bold text-primary font-headerText pb-2">En FemCoders Club </h1>
          <p className="text-2xl text-primary font-bodyText pb-12">Somos un vibrante equipo de mujeres apasionadas por la tecnologia y el desarrollo web</p>
          <ValuesCardsHome />
          <p className="text-2xl text-primary font-headerText pt-12">FRASE CÉLEBRE DE UNA MUJER IMPORTANTE EN LA TECNOLOGÍA</p>
          <Link to="/sobrenosotras"><p className='text-2xl text-primary font-bodyText flex justify-center items-center hover:border-b-2 border-primary'>Ver más</p></Link>
        </div>
      </section>

      <section className='h-screen w-full mb-24 mt-24 px-24'>
        <CarouselContactHome />
      </section>



    </Layout>
  )
}

export default HomePage
