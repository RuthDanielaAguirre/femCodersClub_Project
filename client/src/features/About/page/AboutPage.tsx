import { Link } from "react-router-dom";
import DescripciónFoto from "/AboutUs2.png";
import { Layout } from '../../../components/Layout/Layout'

const AboutPage= () => {
  return (
    <Layout>
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-1/2  bg-no-repeat"style={{backgroundImage: "url('/bg-about.svg')"}} >
        </div>

        <div className='relative bg-primary w-full h-1/2 flex flex-col lg:flex items-center pt-'>
          <h1 className="text-4xl lg:text-6xl font-bold text-secondary">FemCoders Club</h1>
        
      <div className="relative bg-gray-100 mt-10">
           
            
                <p className="container">
                FemCoders Club es una comunidad de mujeres desarrolladoras, cuyo principal objetivo es romper la brecha de género digital y ser un referente que fomente la inclusión femenina en el mundo tecnológico. 
Somos un grupo de mujeres dedicadas al ámbito de la tecnología que buscan promover la participación real de las mujeres dentro del sector IT. 
Nuestra intención es crear un espacio seguro donde poder reunirnos y trabajar juntas para así todas tener la oportunidad de crecer.

<div className="grid grid-cols-2 mt-10 gap-10" >
  <p className="">Para ello, deseamos realizar actividades que visibilicen a la mujer programadora y promover el desarrollo profesional de las mujeres así como abrir canales de diálogo abierto y respetuoso promoviendo la colaboración y el apoyo entre mujeres para fortalecer nuestra comunidad.
  </p>
   <img src={DescripciónFoto} alt="Imagen" className="" />
</div>
 <p >
  Nuestra labor es promover la inclusión y equidad de género en el sector IT. Nos unimos para apoyarnos mutuamente, compartir conocimientos y ofrecer un espacio de networking y crecimiento profesional. 
</p>
<br />
<p>
Buscamos derribar barreras y estereotipos, fomentando un entorno donde todas las mujeres se sientan empoderadas para prosperar en sus carreras tecnológicas.  A través de eventos, talleres y recursos, trabajamos juntas para crear un impacto duradero en la industria y en las vidas de nuestros miembros.
</p>
<br />
<p>En definitiva, nuestro objetivo principal es impulsar la inclusión, equidad y visibilidad de las mujeres en el sector IT. En FemCoders Club, creemos en el poder de la diversidad y en la fuerza colectiva para superar barreras y lograr un impacto positivo en la industria tecnológica. FemCoders Club es un espacio donde nuestra principal misión es empoderar a las mujeres y así lograr que cada una de nosotras pueda tener una carrera de éxito con igualdad de posibilidades, mientras nos conectamos unas con otras.
</p>

                </p>
            </div>
            </div>
          
<div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage