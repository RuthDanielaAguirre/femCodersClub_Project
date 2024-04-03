
import AuthLayout from '../../../components/Layout/AuthLayout'
import bgEvents1 from '../../../../public/bgEvents1.png'
import CardPastEvents from '../components/CardPastEvents'
import { styles } from "../../../style";
import { useQuery } from '@tanstack/react-query';
import { getPastEvents, getUpcomingEvents } from '../../../api/eventsApi';
import CardUpcomingEvent from '../components/CardUpcomingEvent';



const EventsPage = () => {
  const { data: pastEventsData, isLoading: isLoadingPastEvents } = useQuery(
    {
      queryKey: ['pastEvents'],
      queryFn: getPastEvents,
    }
  );

  const { data: upcomingEventsData, isLoading: isLoadingUpcomingEvents } = useQuery(
    {
      queryKey: ['upcomingEvents'],
      queryFn: getUpcomingEvents,
    }
  );
  console.log(pastEventsData);


  return (
    <AuthLayout>

      <section className="flex justify-center text-center items-center bg-center" style={{ backgroundImage: `url(${bgEvents1})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", height: '500px' }}>
        <h1 className={`${styles.heading3} font-headerText`}>
          Próximos eventos
        </h1>
      </section>

      <section className='mb-16'>
        <div className='mt-16 flex items-center justify-center flex-col gap-y-8'>
          {!isLoadingUpcomingEvents && upcomingEventsData.events.map((event: { start: { local: string | number | Date; }; name: { text: string; }; logo: { original: { url: string; }; }; venue: { address: { localized_address_display: string; }; }; description: { text: string; }; }) => {

            const date = new Date(event?.start?.local)
            const formateDate = date.toLocaleDateString("es-ES", { weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true })

            return <CardUpcomingEvent
              title={event.name.text}
              image={event?.logo?.original?.url}
              date={formateDate}
              location={event?.venue?.address?.localized_address_display}
              description={event.description.text}
              onClickViewMore={() => { }}
            />
          })}

        </div>
      </section>

      <section className="bg-gradient-to-b from-accent/40 to-primary mb-20 pt-8">
        <h1 className={`${styles.heading6} font-headerText text-secondary flex justify-center text-center mb-8`}>Eventos Pasados</h1>
        <div className='flex items-center justify-center flex-col gap-y-8'>
          {!isLoadingPastEvents && pastEventsData.events.map((event: { start: { local: string | number | Date; }; name: { text: any; }; logo: { original: { url: any; }; }; venue: { address: { localized_address_display: any; }; }; description: { text: any; }; }) => {

            const date = new Date(event?.start?.local)
            const formateDate = date.toLocaleDateString("es-ES", { weekday: "long", month: "long", day: "numeric", hour: "numeric", minute: "numeric", hour12: true })

            return <CardPastEvents
              title={event.name.text}
              image={event?.logo?.original?.url}
              date={formateDate}
              location={event?.venue?.address?.localized_address_display}
              description={event.description.text}

            />
          })}
        </div>
      </section>

    </AuthLayout>
  )
}

export default EventsPage