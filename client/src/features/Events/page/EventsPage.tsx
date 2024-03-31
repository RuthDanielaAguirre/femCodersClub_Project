
import AuthLayout from '../../../components/Layout/AuthLayout'
import bgEvents1 from '../../../../public/bgEvents1.png'
import CardPastEvents from '../components/CardPastEvents'
import { styles } from "../../../style";


const EventsPage = () => {
  return (
    <AuthLayout>

      <section className="relative h-5/6">
        <div className="absolute z-[-1] w-full">
          <img src={bgEvents1} alt="" className="w-full h-5/6" />
        </div>
        <div className="flex items-start justify-center h-full">
        </div>
        <h1 className={`${styles.heading3} font-headerText flex justify-center text-center mt-60`}>
          Próximos eventos
        </h1>
      </section>

      <section className='h-screen'>
      </section>

      <section className="bg-gradient-to-b from-accent/40 to-primary h-screen w-full flex justify-center items-center gap-16">
        
          <CardPastEvents title={"Título evento"} image={""} date={"viernes, 17 de mayo"} location={"Barcelona"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
          <CardPastEvents title={"Título evento"} image={""} date={"viernes, 17 de mayo"} location={"Barcelona"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
          <CardPastEvents title={"Título evento"} image={""} date={"viernes, 17 de mayo"} location={"Barcelona"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>

        
      </section>

    </AuthLayout>
  )
}

export default EventsPage