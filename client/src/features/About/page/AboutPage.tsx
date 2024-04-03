import { Layout } from '../../../components/Layout/Layout'
import { styles } from "../../../style";
import bgAbout from '../../../../public/bgAbout.png'
import AboutUs2 from '../../../../public/AboutUs2.png'
import FemCodersClubLogo from '../../../../public/FemCodersClubLogo.png'



const AboutPage = () => {
  return (
    <Layout>
      <section>
        <div className="flex justify-center text-center items-center bg-center"
          style={{ backgroundImage: `url(${bgAbout})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", height: '500px' }}>
        </div>
      </section>

      <section>
        <div className='flex flex-col justify-center text-center items-center mt-8'>
          <img src={FemCodersClubLogo} className="w-48" alt="Icono de equidad" />
          <h1 className={`${styles.heading2} font-headerText`}>
            FemCoders Club
          </h1>
        </div>
        <div className='flex flex-col mx-24 mt-16 md:flex-row md:items-center gap-8'>
          <img src={AboutUs2} className="max-w-2xl md:max-w-none md:w-full md:order-2 md:max-h-sm" alt="Icono de equidad" />
          <div className="md:w-1/2 md:order-1 ">
            <p className='text-bodyText text-base text-contrast text-justify'>FemCoders Club es una comunidad de mujeres desarrolladoras, cuyo principal objetivo es romper la brecha de género digital y ser un referente que fomente la inclusión femenina en el mundo tecnológico.
              Somos un grupo de mujeres dedicadas al ámbito de la tecnología que buscan promover la participación real de las mujeres dentro del sector IT.
              <br />
              <br />
              Nuestra intención es crear un espacio seguro donde poder reunirnos y trabajar juntas para así todas tener la oportunidad de crecer.
              Para ello, deseamos realizar actividades que visibilicen a la mujer programadora y promover el desarrollo profesional de las mujeres así como abrir canales de diálogo abierto y respetuoso promoviendo la colaboración y el apoyo entre mujeres para fortalecer nuestra comunidad.
            </p>
          </div>
        </div>
        <p className='mx-24 my-8 text-bodyText text-base text-contrast text-justify'>
          Nuestra labor es promover la inclusión y equidad de género en el sector IT. Nos unimos para apoyarnos mutuamente, compartir conocimientos y ofrecer un espacio de networking y crecimiento profesional. Buscamos derribar barreras y estereotipos, fomentando un entorno donde todas las mujeres se sientan empoderadas para prosperar en sus carreras tecnológicas.
          A través de eventos, talleres y recursos, trabajamos juntas para crear un impacto duradero en la industria y en las vidas de nuestros miembros.
          <br />
          <br />
          En definitiva, nuestro objetivo principal es impulsar la inclusión, equidad y visibilidad de las mujeres en el sector IT. En FemCoders Club, creemos en el poder de la diversidad y en la fuerza colectiva para superar barreras y lograr un impacto positivo en la industria tecnológica.
          FemCoders Club es un espacio donde nuestra principal misión es empoderar a las mujeres y así lograr que cada una de nosotras pueda tener una carrera de éxito con igualdad de posibilidades, mientras nos conectamos unas con otras.
        </p>
      </section>


    </Layout>
  )
}

export default AboutPage