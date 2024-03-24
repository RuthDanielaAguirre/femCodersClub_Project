"use client"
import { Card } from "flowbite-react";
import { styles } from "../../../style";

function CardsEventsHome() {
    return (
        
        <div className="flex gap-16">
        <div>
            <Card
                className="max-w-sm rounded-2xl"
                renderImage={()=> <div className="bg-[url('../../../../img-events.png')] bg-cover bg-no-repeat h-64 m-6 flex items-end rounded-2xl "><h2 className="text-primary font-headerText font-bold ml-4 mb-4">Titulo: Phasellus aliquam luctus dignissim.</h2></div> }>

                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white px-2">
                    Fecha: Phasellus aliquam luctus dignissim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className={`${styles.primaryBtn}`}>Ver más</button>
            </Card>
        </div>
        <div>
            <Card
                className="max-w-sm rounded-2xl"
                renderImage={()=> <div className="bg-[url('../../../../img-events.png')] bg-cover bg-no-repeat h-64 m-6 flex items-end rounded-2xl "><h2 className="text-primary font-headerText font-bold ml-4 mb-4">Titulo: Phasellus aliquam luctus dignissim.</h2></div> }>

                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white px-2">
                    Fecha: Phasellus aliquam luctus dignissim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className={`${styles.primaryBtn}`}>Ver más</button>
            </Card>
        </div>
        <div>
            <Card
                className="max-w-sm rounded-2xl"
                renderImage={()=> <div className="bg-[url('../../../../img-events.png')] bg-cover bg-no-repeat h-64 m-6 flex items-end rounded-2xl "><h2 className="text-primary font-headerText font-bold ml-4 mb-4">Titulo: Phasellus aliquam luctus dignissim.</h2></div> }>

                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white px-2">
                    Fecha: Phasellus aliquam luctus dignissim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className={`${styles.primaryBtn}`}>Ver más</button>
            </Card>
        </div>
        </div>
    );
}

export default CardsEventsHome
