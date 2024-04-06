import { Layout } from '../../../components/Layout/Layout'
import { Link } from "react-router-dom";
import CarouselContactHome from '../components/CarouselContactHome'
import CardUpcomingEvent from '../../Events/components/CardUpcomingEvent';
import { styles } from "../../../style";
import heroImg2 from '../../../../public/heroImg2.png'
import bgValuesHome from '../../../../public/bgValuesHome.png'
import CarouselValues from '../../About/components/CarouselValues';
import { useQuery } from '@tanstack/react-query';
import { getUpcomingEvents } from '../../../api/eventsApi';



const HomePage = () => {

  const { data: upcomingEventsData, isLoading: isLoadingUpcomingEvents } = useQuery(
    {
      queryKey: ['upcomingEvents'],
      queryFn: getUpcomingEvents,
    }
  );

  return (
    <Layout>

      <section className='lg:h-screen h-full w-full flex flex-col lg:flex-row'>


        <div className="h-full flex flex-col justify-center items-center text-center px-6 order-2 lg:order-1 lg:px-16 lg:text-left ">
          <h1 className={`${styles.heading1} px-4 py-4 font-headerText leading-none text-center lg:text-left`}>FemCoders Club</h1>
          <br />
          <h2 className="text-2xl font-bold text-secondary font-headerText px-4"><span className="text-tertiary">Juntas</span>  potenciamos el crecimiento y liderazgo de las mujeres tech.</h2>
          <div className='py-2 px-4 flex flex-col lg:flex-row gap-4 mt-4'>
            <Link to="/contacto"><button className={`${styles.primaryBtn} w-[180px] text-bodyText`}>Únete al club</button></Link>
            <Link to="/eventos"><button className={`${styles.primaryBtn} w-[180px] text-bodyText `}>Ver eventos</button></Link>
          </div>
        </div>
        <img src={heroImg2} className="w-full order-1" alt="" />


      </section>


      <section className='h-full w-full flex justify-center items-center px-4 my-16'>

        <div className='flex flex-col items-center gap-y-8'>
          <div className='flex'>
            <h2 className={`${styles.heading2} font-headerText my-8 text-center leading-none`}>¡Próximos eventos!</h2>
          </div>
          {!isLoadingUpcomingEvents && upcomingEventsData.events.map((event: { start: { local: string | number | Date; }; name: { text: string; }; logo: { original: { url: string; }; }; venue: { address: { localized_address_display: string; }; }; description: { text: string; }; id: string }) => {

            const date = new Date(event?.start?.local)
            const formateDate = date.toLocaleDateString("es-ES", { weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true })

            return <CardUpcomingEvent
              title={event.name.text}
              image={event?.logo?.original?.url}
              date={formateDate}
              location={event?.venue?.address?.localized_address_display}
              description={event.description.text}
              eventId={event.id}
            />
          })}
          
          <Link to="/eventos"><p className={`${styles.text}text-xl font-bold text-secondary font-headerText hover:border-b-2 border-tertiary`}>Ver todos los eventos</p></Link>

        </div>
        
      </section>


      <section className="flex justify-center text-left bg-center py-16" style={{ backgroundImage: `url(${bgValuesHome})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", height: 'vh' }}>
        <div className='w-full flex flex-col justify-center text-center items-center mt-8'>
          <h3 className={`${styles.heading3} font-headerText py-2 leading-tight`}>En FemCoders Club </h3>
          <p className="text-2xl text-primary font-bodyText pb-12">Somos un vibrante equipo de mujeres apasionadas por la tecnologia y el desarrollo web</p>
          <CarouselValues />
          <p className={`${styles.heading5} text-primary font-base font-headerText pt-8 mx-8`}>"La tecnología no tiene género, y cada mujer tiene el potencial de ser una líder en este campo si se le brindan las oportunidades y el apoyo adecuados." - Mariana Costa (Perú)</p>
          <Link to="/sobrenosotras"><p className='text-2xl text-primary font-bodyText flex justify-center items-center hover:border-b-2 border-primary'>Ver más</p></Link>
        </div>
      </section>

      <section className='h-full w-full flex flex-col items-center justify-center px-8 py-20 lg:px-40 lg:h-screen'>
        <CarouselContactHome />
      </section>


    </Layout>
  )
}

export default HomePage
