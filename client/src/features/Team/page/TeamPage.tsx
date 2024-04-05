import { Layout } from '../../../components/Layout/Layout';
import { styles } from '../../../style';
import CardTeamMember from '../components/CardTeamMember';
import bgTeam from '../../../../public/bgTeamP1.png'

const TeamPage = () => {

  return (
    <Layout>
      <section className="flex px-5 py-[100px] lg:py-[200px] xl:py-[250px] xxl:py-[300px] justify-center text-center h-fit relative" style={{ backgroundImage: `url(${bgTeam})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat",  backgroundPosition: "center top" }}>
        <div className='absolute w-full h-[27%] bottom-0 bg-gradient-to-t from-primary/40 to-transparent'/>
        <div className='absolute w-full h-[25%] bottom-0 bg-gradient-to-t from-primary/50 to-transparent'/>
        <div className='absolute w-full h-[22%] bottom-0 bg-gradient-to-t from-primary/60 to-transparent'/>
        <div className='absolute w-full h-[20%] bottom-0 bg-gradient-to-t from-primary/80 to-transparent'/>
        <div className='absolute w-full h-[18%] bottom-0 bg-gradient-to-t from-primary/90 to-transparent'/>
        <div className='absolute w-full h-[10%] bottom-0 bg-gradient-to-t from-primary to-transparent'/>
        <div className='absolute w-full h-[10%] bottom-0 bg-gradient-to-t from-primary to-transparent'/>
        <h1 className={`${styles.heading3} font-headerText`}>
          Conoce nuestro equipo
        </h1> 
      </section>
      <section className='w-full flex flex-col items-center py-10 lg:py-16 gap-10 xl:gap-20'>
        <p className="text-xl text-contrast font-semibold font-headerText max-w-[1200px] text-center md:mx-10 mx-3">Somos una vibrante comunidad de mujeres apasionadas por la tecnología, el crecimiento personal y el empoderamiento femenino.
          En FemCoders Club, nos dedicamos a crear un espacio seguro y enriquecedor donde mujeres tecnólogas puedan reunirse, colaborar y crecer juntas. Creemos firmemente en el poder de la diversidad y la fuerza colectiva para superar barreras y lograr un impacto significativo en la industria tecnológica.</p>
        <CardTeamMember/>
      </section>
    </Layout>
  )
}
export default TeamPage