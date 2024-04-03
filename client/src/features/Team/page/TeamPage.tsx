import { Layout } from '../../../components/Layout/Layout';
import { styles } from '../../../style';
import CardTeamMember from '../components/CardTeamMember';
import bgTeam from '../../../../public/bgTeam.svg'

const TeamPage = () => {

  return (
    <Layout>
      <section className="flex flex-col justify-center text-center items-center bg-center" style={{ backgroundImage: `url(${bgTeam})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", height: '600px',  backgroundPosition: "center bottom" }}>
        <h1 className={`${styles.heading3} font-headerText`}>
          Conoce nuestro equipo
        </h1> 
        <p className={`${styles.text} text-primary font-semibold font-headerText px-[300px] pt-6 `}>Somos una vibrante comunidad de mujeres apasionadas por la tecnología, el crecimiento personal y el empoderamiento femenino.
          En FemCoders Club, nos dedicamos a crear un espacio seguro y enriquecedor donde mujeres tecnólogas puedan reunirse, colaborar y crecer juntas. Creemos firmemente en el poder de la diversidad y la fuerza colectiva para superar barreras y lograr un impacto significativo en la industria tecnológica.</p>
      </section>
      <section>
        
       
      </section>
      <div className='px-[350px] py-[100px]'>
      <CardTeamMember/>
      </div>
    </Layout>
  )
}
export default TeamPage