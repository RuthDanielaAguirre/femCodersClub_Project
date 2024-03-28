import { Layout } from '../../../components/Layout/Layout'
import { Link } from "react-router-dom";
import CarouselContactHome from '../components/CarouselContactHome'
import CardsEventsHome from '../components/CardsEventsHome'
import ValuesCardsHome from '../components/ValuesCardsHome';
import { styles } from "../../../style";
import heroImg from '../../../../public/heroImg.svg'
import bgValuesHome from '../../../../public/bgValuesHome.png'

const HomePage = () => {
  return (
    <Layout>

      <div className='flex flex-col'>
      <section className="w-full h-screen relative" >
        <div className='absolute z-[-1] w-full'><img src={heroImg} alt="" className='w-full h-full'/></div>
        <div className="h-screen relative px-24 content-center">
          <h1 className={`${styles.heading1} font-headerText`}>FemCoders Club</h1>
          <br />
          <h2 className="text-2xl font-bold text-secondary font-headerText"><span className="text-tertiary">Juntas</span>  potenciamos el <br />crecimiento y liderazgo de las <br /> mujeres tech.</h2>
          <div className='py-2 flex gap-4 mt-4'>
            <Link to="/contacto"><button className={`${styles.primaryBtn} w-[180px] text-bodyText`}>Únete al club</button></Link>
            <Link to="/eventos"><button className={`${styles.primaryBtn} w-[180px] text-bodyText `}>Ver eventos</button></Link>
          </div>
        </div>
      </section>

      <section className='h-screen w-full flex justify-center items-center mt-24 mb-8'>
        <div className='flex flex-col items-center'>
          <div className='flex'>
          <h2 className={`${styles.heading2} font-headerText mb-16`}>¡Próximos eventos!</h2>
          <Link to="/eventos"><p className={`${styles.text}text-xl font-bold text-secondary font-headerText py-2 absolute ml-20 hover:border-b-2 border-tertiary`}>Ver todos los eventos</p></Link>
          </div>
          <CardsEventsHome />
        </div>
      </section>

      <section className="relative w-full h-screen flex justify-center items-center">
        <img src={bgValuesHome} className="absolute z-[-1] w-full" alt="" />
        <div className='flex flex-col items-center'>
          <h3 className={`${styles.heading3} font-headerText py-2`}>En FemCoders Club </h3>
          <p className="text-2xl text-primary font-bodyText pb-12">Somos un vibrante equipo de mujeres apasionadas por la tecnologia y el desarrollo web</p>
          <ValuesCardsHome />
          <p className={`${styles.heading5} text-primary font-normal font-headerText pt-12`}>FRASE CÉLEBRE DE UNA MUJER IMPORTANTE EN LA TECNOLOGÍA</p>
          <Link to="/sobrenosotras"><p className='text-2xl text-primary font-bodyText flex justify-center items-center hover:border-b-2 border-primary'>Ver más</p></Link>
        </div>
      </section>

      <section className='h-screen w-full mb-24 mt-24 px-24'>
        <CarouselContactHome />
      </section>
      </div>
      
    </Layout>
  )
}

export default HomePage
