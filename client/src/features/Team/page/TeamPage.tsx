import { Layout } from '../../../components/Layout/Layout';
import { styles } from '../../../style';
import CardTeamMember from '../components/CardTeamMember';
import bgTeam from '../../../../public/bgTeam.png'

const TeamPage = () => {

  return (
    <Layout>
      <section className="flex flex-col lg:pt-[100px] xl:pb-[150px] xxl:pt-[200px] xxl:pb-[260px] pt-10 pb-[100px] text-center items-center bg-center xxl:gap-12 gap-10 h-fit px-5" style={{ backgroundImage: `url(${bgTeam})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat",  backgroundPosition: "center top" }}>
        <h1 className={`${styles.heading3} font-headerText`}>
          Conoce nuestro equipo
        </h1> 
        <p className="text-xl bg-gradient-to-b from-[#ffff] via-accent to-secondary xl:via-primary xl:to-primary font-semibold inline-block text-transparent bg-clip-text font-headerText max-w-[1000px]">Somos una vibrante comunidad de mujeres apasionadas por la tecnología, el crecimiento personal y el empoderamiento femenino.
          En FemCoders Club, nos dedicamos a crear un espacio seguro y enriquecedor donde mujeres tecnólogas puedan reunirse, colaborar y crecer juntas. Creemos firmemente en el poder de la diversidad y la fuerza colectiva para superar barreras y lograr un impacto significativo en la industria tecnológica.</p>
      </section>
      <div className='flex justify-center px-5 pb-24'>
      <CardTeamMember/>
      </div>
    </Layout>
  )
}
export default TeamPage