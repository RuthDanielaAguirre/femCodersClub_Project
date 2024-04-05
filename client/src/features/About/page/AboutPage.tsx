import { Layout } from '../../../components/Layout/Layout'
import { styles } from "../../../style";
import CarouselValues from '../components/CarouselValues';
import bgAbout from '../../../../public/bgAbout.png'
import AboutUs2 from '../../../../public/AboutUs2.png'
import iconMission from '../../../../public/iconMission.png'
import iconVision from '../../../../public/iconVision.png'
import iconCommitment from '../../../../public/iconCommitment.png'
import imgCommitment from '../../../../public/imgCommitment.png'
import iconIdea from '../../../../public/iconIdea.png'
import FemCodersClubLogo from '../../../../public/FemCodersClubLogo.png'
import ContactForm from '../../Contact/components/ContactForm';



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
          <h1 className={`${styles.heading2} font-headerText text-contrast leading-tight`}>
            FemCoders Club
          </h1>
        </div>

        <div className='flex flex-col mx-8 mt-8 lg:flex-row lg:items-center lg:mx-16 gap-8'>
          <img src={AboutUs2} className="max-w-full lg:max-w-none lg:w-full lg:order-2 lg:max-h-sm" alt="Icono de equidad" />
          <div className="order-2 lg:order-1 ">
            <p className='text-bodyText text-base text-contrast text-justify '>FemCoders Club es una comunidad de mujeres desarrolladoras, cuyo principal objetivo es romper la brecha de género digital y ser un referente que fomente la inclusión femenina en el mundo tecnológico.
              Somos un grupo de mujeres dedicadas al ámbito de la tecnología que buscan promover la participación real de las mujeres dentro del sector IT.
              <br />
              <br />
              Nuestra intención es crear un espacio seguro donde poder reunirnos y trabajar juntas para así todas tener la oportunidad de crecer.
              Para ello, deseamos realizar actividades que visibilicen a la mujer programadora y promover el desarrollo profesional de las mujeres así como abrir canales de diálogo abierto y respetuoso promoviendo la colaboración y el apoyo entre mujeres para fortalecer nuestra comunidad.
            </p>
          </div>
        </div>
        <p className='mx-8 my-8 text-bodyText text-base text-contrast text-justify lg:mx-16'>
          Nuestra labor es promover la inclusión y equidad de género en el sector IT. Nos unimos para apoyarnos mutuamente, compartir conocimientos y ofrecer un espacio de networking y crecimiento profesional. Buscamos derribar barreras y estereotipos, fomentando un entorno donde todas las mujeres se sientan empoderadas para prosperar en sus carreras tecnológicas.
          A través de eventos, talleres y recursos, trabajamos juntas para crear un impacto duradero en la industria y en las vidas de nuestros miembros.
          <br />
          <br />
          En definitiva, nuestro objetivo principal es impulsar la inclusión, equidad y visibilidad de las mujeres en el sector IT. En FemCoders Club, creemos en el poder de la diversidad y en la fuerza colectiva para superar barreras y lograr un impacto positivo en la industria tecnológica.
          FemCoders Club es un espacio donde nuestra principal misión es empoderar a las mujeres y así lograr que cada una de nosotras pueda tener una carrera de éxito con igualdad de posibilidades, mientras nos conectamos unas con otras.
        </p>

      </section>

      <section>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className="flex flex-col items-center justify-center bg-accent/20 py-16">
            <img src={iconMission} className='w-[50px]' alt="" />
            <h3 className={`${styles.heading6} text-secondary font-headerText my-2`}>Misión</h3>
            <p className='text-bodyText text-base text-contrast px-6 md:px-40 text-center w-full'>Nuestra misión es empoderar y elevar a las mujeres en el mundo del desarrollo web. Nos esforzamos por cerrar la brecha de género en la tecnología, fomentando una comunidad que nutre habilidades, conocimientos y confianza. A través de eventos, talleres y recursos, trabajamos incansablemente para crear un impacto duradero en la industria y en las vidas de nuestras miembros.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-tertiary/20 py-16">
            <img src={iconVision} className='w-[60px]' alt="" />
            <h3 className={`${styles.heading6} text-secondary font-headerTex my-2`}>Visión</h3>
            <p className='text-bodyText text-base text-contrast px-6 md:px-40 text-center w-full'>Nuestra visión es un futuro donde las mujeres desarrolladoras web lideren, innoven y den forma al panorama digital. Aspiramos a un sector IT equitativo e inclusivo, donde la diversidad y la inclusión sean principios fundamentales que impulsen el progreso tecnológico. Nuestro club aspira a ser el catalizador del cambio, donde cada mujer, sin importar su origen, encuentre estímulo, recursos y una comunidad vibrante para destacarse como codificadora y líder.</p>
          </div>
        </div>
      </section>

      <section className='my-16'>
        <h3 className={`${styles.heading6} text-secondary font-headerTex mb-8 text-center`}>Nuestro valores</h3>
        <CarouselValues />
      </section>

      <section className='flex justify-center'>
        <div className='flex flex-col mt-8 lg:flex-row lg:items-center'>
          <img src={imgCommitment} className="px-8 lg:order-1 lg:h-96 mb-8" alt="Icono de equidad" />
          <div className='flex flex-col items-center justify-center '>
            <img src={iconCommitment} alt="" />
            <h3 className={`${styles.heading6} text-center text-secondary font-headerText my-6`}>Nuestros compromisos</h3>
            <p className='mx-8 mb-16 text-bodyText text-base text-contrast text-justify md:w-[550px] '>
              Nuestra comunidad se compromete a realizar un esfuerzo real por disminuir la brecha de género digital, a fomentar la inclusión y a generar oportunidades para que las mujeres encuentren su lugar en la industria tecnológica.
              Nos comprometemos a ser el espacio en el cual las mujeres encuentren motivación y recursos que les permitan crecer personal y profesionalmente, donde puedan y elijan crear comunidad para potenciar todo tipo de crecimiento.
            </p>
          </div>
        </div>
      </section>

      <section className='h-full md:my-16 bg-gradient-to-r from-secondary to-accent'>
        <div className='flex flex-col items-center px-2 py-16 lg:flex lg:items-center lg:pt-8 gap-6'>
          <img src={iconIdea} className='w-[50px]' alt="" />
          <h3 className={`${styles.heading6} text-primary text-center font-headerText px-2`}>Nuestros compromisos</h3>
         <ul className='max-w-6xl text-primary text-base font-textBody space-y-4 mx-8'>

          <li className='list-disc'><span className='font-bold'>Directorio de Miembros:</span>Crear un directorio de mujeres que pertenecen a nuestra comunidad brindando un lugar mas donde autopromocionarse.</li>
          <li className='list-disc'><span className='font-bold'>Espacios de Colaboración y Desarrollo:</span> Plantear espacios de Coworking y Laboratorios de Creación donde el trabajo colaborativo fomenta la innovación y el diseño.</li>
          <li className='list-disc'><span className='font-bold'>Alianzas Estratégicas:</span>Buscar la colaboración con empresas que apoyen nuestra misión y visión.</li>
          <li className='list-disc'><span className='font-bold'>Eventos Tecnológicos en Vivo:  </span> Una celebración de la creación de código, donde todos están invitados a unirse y experimentar la magia de la tecnología.</li>
          <li className='list-disc'><span className='font-bold'>Mentorías: </span> Establecer programas de mentorías donde mujeres con experiencia en tecnología puedan guiar y apoyar a aquellas que están comenzando o buscando avanzar en sus carreras. </li>
          <li className='list-disc'><span className='font-bold'>Recursos y Herramientas:  </span>  Proporcionar acceso a recursos y herramientas útiles para el desarrollo profesional de las mujeres en tecnología, como cursos en línea, plataformas de aprendizaje, bibliotecas de código abierto, etc.</li>
          <li className='list-disc'><span className='font-bold'>Espacios de Networking: </span> Crear eventos regulares, tanto virtuales como presenciales, donde las mujeres en tecnología puedan reunirse para conectar, compartir experiencias y establecer relaciones profesionales significativas.</li>
          <li className='list-disc'><span className='font-bold'>Grupos de Interés Especial:  </span> Crear grupos de interés especial dentro de la comunidad, centrados en áreas específicas de la tecnología o en temas relevantes para las mujeres, como inteligencia artificial, ciberseguridad, tecnología blockchain, etc.</li>
          <li className='list-disc'><span className='font-bold'>Programas de Emprendimiento:  </span> Ofrecer programas de apoyo para mujeres emprendedoras en tecnología, que incluyan asesoramiento, oportunidades de networking y acceso a inversores.</li>
          <li className='list-disc'><span className='font-bold'>Actividades de Concientización:  </span> Organizar campañas y eventos para concientizar sobre la importancia de la diversidad de género en la tecnología y abogar por cambios positivos en la industria y en la sociedad en general.</li>
          <li className='list-disc'><span className='font-bold'>Comunidad Virtual:  </span>  Establecer una plataforma en línea donde las miembros de FemCoders Club puedan conectarse, compartir recursos, colaborar en proyectos, hacer preguntas y recibir apoyo continuo.</li>

         </ul>
        </div>
      </section>

      <section className='flex flex-col justify-center items-center h-full my-8'>
        <h3 className={`${styles.heading6} text-secondary text-center font-headerText mb-8 px-2`}>¿Quieres saber mas?</h3>
        <ContactForm/>
      </section>

    </Layout>
  )
}

export default AboutPage