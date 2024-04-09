import { useEffect, useState } from 'react';
import { Carousel } from "flowbite-react";
import iconArrowR from "../../../../public/iconArrowR.png";
import iconArrowL from "../../../../public/iconArrowL.png";
import iconEquity from '../../../../public/iconEquity.png';
import iconInclusion from '../../../../public/iconInclusion.png';
import iconVisibility from '../../../../public/iconVisibility.png';
import iconDevelopment from '../../../../public/iconDevelopment.png';
import iconCollaboration from '../../../../public/iconCollaboration.png';
import iconEmpowerment from '../../../../public/iconEmpowerment.png';
import iconDiversity from '../../../../public/iconDiversity.png';
import iconEthics from '../../../../public/iconEthics.png';
import iconInnovation from '../../../../public/iconInnovation.png';
import iconBalance from '../../../../public/iconBalance.png';
import iconResponsibility from '../../../../public/iconResponsibility.png';

function getInitialDeviceWidth() {

  if (window.innerWidth <= 976) {
    return "tablet"
  }

  if (window.innerWidth <= 768) {
    return "mobile"
  }

  return "desktop"
}

function CarouselValues() {
  const [deviceType, setDeviceType] = useState<"desktop" | "tablet" | "mobile">(getInitialDeviceWidth);

  useEffect(() => {
    const handleResize = () => {

      if (window.innerWidth > 976) {
        setDeviceType("desktop")
      }

      if (window.innerWidth <= 976) {
        setDeviceType("tablet")
      }

      if (window.innerWidth <= 768) {
        setDeviceType("mobile")
      }

    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="h-[500px] w-full">

      {deviceType === "mobile" && <Carousel slide={false}
        rightControl={""} leftControl={""}>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconEquity} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Equidad</h1>
          <p className="text-center px-6">Las mujeres deben tener las mismas oportunidades de desarrollo profesional que los hombres,
            sin discriminación por género.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconInclusion} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Inclusión</h1>
          <p className="text-center px-6">Las mujeres deben sentirse bienvenidas y apoyadas en el sector IT,
            independientemente de sus antecedentes o experiencias.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconVisibility} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Visibilidad</h1>
          <p className="text-center px-6">Los logros de las mujeres en el sector IT deben ser reconocidos y celebrados.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconDevelopment} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Desarrollo profesional</h1>
          <p className="text-center px-6">Las mujeres deben tener acceso a oportunidades de desarrollo
            profesional que les permitan alcanzar su máximo potencial.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconCollaboration} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Colaboración</h1>
          <p className="text-center px-6">Fomentar un ambiente donde las mujeres trabajen juntas de manera colaborativa,
            compartiendo conocimientos y experiencias para impulsar el crecimiento mutuo.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconEmpowerment} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Empoderamiento</h1>
          <p className="text-center px-6">Capacitar a las mujeres para que tomen el control de sus carreras en tecnología,
            brindándoles las herramientas y el apoyo necesarios para alcanzar sus metas.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconDiversity} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Diversidad</h1>
          <p className="text-center px-6">Reconocer y valorar las diversas perspectivas,
            habilidades y experiencias que cada mujer aporta al campo de la tecnología, promoviendo un entorno inclusivo y enriquecedor.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconEthics} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Ética</h1>
          <p className="text-center px-6">Promover prácticas éticas en el trabajo tecnológico, priorizando la integridad,
            la transparencia y el respeto hacia los demás y hacia la sociedad en general.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconInnovation} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Innovación</h1>
          <p className="text-center px-6">Fomentar la creatividad y la innovación entre las mujeres en tecnología,
            alentándolas a pensar de manera crítica y a proponer soluciones disruptivas para los desafíos actuales y futuros.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconBalance} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4 text-center">Equilibrio entre vida laboral y personal</h1>
          <p className="text-center px-6">Promover un equilibrio saludable entre la vida laboral y personal, reconociendo la importancia de cuidar el bienestar físico,
            emocional y mental de las mujeres en la industria tecnológica.</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl  w-[300px] h-[350px]"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
          <img src={iconResponsibility} className="" alt="" />
          <h1 className="text-xl font-bold text-secondary font-headerText my-4">Responsabilidad social</h1>
          <p className="text-center px-6">Comprometerse con la responsabilidad social corporativa, participando en iniciativas y
            proyectos que tengan un impacto positivo en la comunidad y en el mundo en general.</p>
        </div>

      </Carousel>}

      {deviceType === "tablet" && <Carousel indicators={false} slide={false}
        rightControl={""} leftControl={""}>

        <div className="grid justify-items-center items-center grid-cols-2 w-[720px]">
          <div className="flex flex-col items-center justify-center bg-primary rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconEquity} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Equidad</h1>
            <p className="text-center px-6">Las mujeres deben tener las mismas oportunidades de desarrollo profesional que los hombres,
              sin discriminación por género.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconInclusion} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Inclusión</h1>
            <p className="text-center px-6">Las mujeres deben sentirse bienvenidas y apoyadas en el sector IT,
              independientemente de sus antecedentes o experiencias.</p>
          </div>
        </div>

        <div className="grid justify-items-center items-center md:grid-cols-2 w-[720px]">
          <div className="flex flex-col items-center justify-center bg-primary rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconVisibility} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Visibilidad</h1>
            <p className="text-center px-6">Los logros de las mujeres en el sector IT deben ser reconocidos y celebrados.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconDevelopment} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Desarrollo profesional</h1>
            <p className="text-center px-6">Las mujeres deben tener acceso a oportunidades de desarrollo
              profesional que les permitan alcanzar su máximo potencial.</p>
          </div>
        </div>

        <div className="grid justify-items-center items-center md:grid-cols-2 w-[720px]">
          <div className="flex flex-col items-center justify-center bg-primary rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconEthics} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Colaboración</h1>
            <p className="text-center px-6">Promover prácticas éticas en el trabajo tecnológico, priorizando la integridad,
              la transparencia y el respeto hacia los demás y hacia la sociedad en general.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconEmpowerment} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Empoderamiento</h1>
            <p className="text-center px-6">Capacitar a las mujeres para que tomen el control de sus carreras en tecnología,
              brindándoles las herramientas y el apoyo necesarios para alcanzar sus metas.</p>
          </div>
        </div>

        <div className="grid justify-items-center items-center md:grid-cols-2 w-[720px]">
          <div className="flex flex-col items-center justify-center bg-primary rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconDiversity} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Diversidad</h1>
            <p className="text-center px-6">Reconocer y valorar las diversas perspectivas,
              habilidades y experiencias que cada mujer aporta al campo de la tecnología, promoviendo un entorno inclusivo y enriquecedor.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconEthics} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Ética</h1>
            <p className="text-center px-6">Promover prácticas éticas en el trabajo tecnológico, priorizando la integridad,
              la transparencia y el respeto hacia los demás y hacia la sociedad en general.</p>
          </div>
        </div>


        <div className="grid justify-items-center items-center md:grid-cols-2 w-[720px]">
          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconInnovation} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Innovación</h1>
            <p className="text-center px-6">Fomentar la creatividad y la innovación entre las mujeres en tecnología,
              alentándolas a pensar de manera crítica y a proponer soluciones disruptivas para los desafíos actuales y futuros.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconBalance} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4 text-center px-8">Equilibrio entre vida laboral y personal</h1>
            <p className="text-center px-8">Promover un equilibrio saludable entre la vida laboral y personal, reconociendo la importancia de cuidar el bienestar físico,
              emocional y mental de las mujeres en la industria tecnológica.</p>
          </div>
        </div>

        <div className="grid justify-items-center items-center md:grid-cols-1 max-w-6xl">

          <div className="flex flex-col items-center justify-center bg-primary rounded-3xl w-[320px] h-[330px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconResponsibility} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Responsabilidad social</h1>
            <p className="text-center px-6">Comprometerse con la responsabilidad social corporativa, participando en iniciativas y
              proyectos que tengan un impacto positivo en la comunidad y en el mundo en general.</p>
          </div>

        </div>

      </Carousel>}

      {deviceType === "desktop" && <Carousel indicators={false} slide={false}
        rightControl={<img className="pr-8" src={iconArrowR} />} leftControl={<img className="pl-8" src={iconArrowL} />}>

        <div className="grid justify-items-center items-center md:grid-cols-3 max-w-6xl">

          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconEquity} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Equidad</h1>
            <p className="text-center px-6">Las mujeres deben tener las mismas oportunidades de desarrollo profesional que los hombres,
              sin discriminación por género.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconInclusion} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Inclusión</h1>
            <p className="text-center px-6">Las mujeres deben sentirse bienvenidas y apoyadas en el sector IT,
              independientemente de sus antecedentes o experiencias.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconVisibility} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Visibilidad</h1>
            <p className="text-center px-6">Los logros de las mujeres en el sector IT deben ser reconocidos y celebrados.</p>
          </div>

        </div>

        <div className="grid justify-items-center items-center md:grid-cols-3 max-w-6xl">
          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconDevelopment} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Desarrollo profesional</h1>
            <p className="text-center px-6">Las mujeres deben tener acceso a oportunidades de desarrollo
              profesional que les permitan alcanzar su máximo potencial.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconCollaboration} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Colaboración</h1>
            <p className="text-center px-6">Fomentar un ambiente donde las mujeres trabajen juntas de manera colaborativa,
              compartiendo conocimientos y experiencias para impulsar el crecimiento mutuo.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconEmpowerment} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Empoderamiento</h1>
            <p className="text-center px-6">Capacitar a las mujeres para que tomen el control de sus carreras en tecnología,
              brindándoles las herramientas y el apoyo necesarios para alcanzar sus metas.</p>
          </div>
        </div>

        <div className="grid justify-items-center items-center md:grid-cols-3 max-w-6xl">
          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconDiversity} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Diversidad</h1>
            <p className="text-center px-6">Reconocer y valorar las diversas perspectivas,
              habilidades y experiencias que cada mujer aporta al campo de la tecnología, promoviendo un entorno inclusivo y enriquecedor.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconEthics} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Ética</h1>
            <p className="text-center px-6">Promover prácticas éticas en el trabajo tecnológico, priorizando la integridad,
              la transparencia y el respeto hacia los demás y hacia la sociedad en general.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconInnovation} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Innovación</h1>
            <p className="text-center px-6">Fomentar la creatividad y la innovación entre las mujeres en tecnología,
              alentándolas a pensar de manera crítica y a proponer soluciones disruptivas para los desafíos actuales y futuros.</p>
          </div>
        </div>

        <div className="grid justify-items-center items-center md:grid-cols-2 max-w-6xl">
          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconBalance} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4 text-center">Equilibrio entre vida laboral y personal</h1>
            <p className="text-center px-6">Promover un equilibrio saludable entre la vida laboral y personal, reconociendo la importancia de cuidar el bienestar físico,
              emocional y mental de las mujeres en la industria tecnológica.</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-primary py-8 rounded-3xl w-[350px] h-[280px]"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 6px 4px 12px 3px' }}>
            <img src={iconResponsibility} className="" alt="" />
            <h1 className="text-xl font-bold text-secondary font-headerText my-4">Responsabilidad social</h1>
            <p className="text-center px-6">Comprometerse con la responsabilidad social corporativa, participando en iniciativas y
              proyectos que tengan un impacto positivo en la comunidad y en el mundo en general.</p>
          </div>
        </div>

      </Carousel>}

    </div>
  );
}
export default CarouselValues;