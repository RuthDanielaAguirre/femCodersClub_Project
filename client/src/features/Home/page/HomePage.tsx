import { Layout } from '../../../components/Layout/Layout'
import { Link } from "react-router-dom";
import CarouselContactHome from '../components/CarouselContactHome'
import CardsEventsHome from '../components/CardsEventsHome'
import { styles } from "../../../style";
import heroImg2 from '../../../../public/heroImg2.png'
import bgValuesHome from '../../../../public/bgValuesHome.png'
import CarouselValues from '../../About/components/CarouselValues';

const HomePage = () => {
  return (
    <Layout>

     
<section className="flex flex text-left bg-center" style={{ backgroundImage: `url(${heroImg2})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", height: 'vh' }}>
  <div className="flex flex-col items-start justify-center px-16">
    <h1 className={`${styles.heading1} font-headerTex w-16 leading-none`}>FemCoders Club</h1>
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


      <section className="flex justify-center text-left bg-center py-16" style={{ backgroundImage: `url(${bgValuesHome})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", height: 'vh' }}>
        <div className='w-full flex flex-col justify-center text-center items-center mt-8'>
          <h3 className={`${styles.heading3} font-headerText py-2 leading-tight`}>En FemCoders Club </h3>
          <p className="text-2xl text-primary font-bodyText pb-12">Somos un vibrante equipo de mujeres apasionadas por la tecnologia y el desarrollo web</p>
          <CarouselValues />
          <p className={`${styles.heading5} text-primary font-base font-headerText pt-8 mx-8`}>FRASE CÉLEBRE DE UNA MUJER IMPORTANTE EN LA TECNOLOGÍA</p>
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
