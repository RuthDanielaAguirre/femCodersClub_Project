"use client"
import { Card } from "flowbite-react";
import { styles } from "../../../style";
import imgEvents from '../../../../public/imgEvents.png'

function CardsEventsHome() {
    return (
        <div className="flex gap-16">
            <div>
                <Card
                    className="max-w-sm rounded-2xl"
                    
                    renderImage={() => <div className="h-52 m-6 flex items-end rounded-2xl relative"><img src={imgEvents} className="absolute w-full rounded-t-[16px]" alt="" /><h2 className="text-primary font-headerText font-bold ml-4 mb-4 z-[2]">Titulo: Phasellus aliquam luctus dignissim.</h2></div>}>
                    
                    <h5 className="text-md text-contrast font-headerText font-bold px-2">
                        Fecha: Phasellus aliquam luctus dignissim.
                    </h5>
                    <p className="text-md text-contrast font-bodyText px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className={`${styles.primaryBtn}`}>Ver más</button>
                </Card>
            </div>
            <div>
                <Card
                    className="max-w-sm rounded-2xl"
                    
                    renderImage={() => <div className="h-52 m-6 flex items-end rounded-2xl relative"><img src={imgEvents} className="absolute w-full rounded-t-[16px]" alt="" /><h2 className="text-primary font-headerText font-bold ml-4 mb-4 z-[2]">Titulo: Phasellus aliquam luctus dignissim.</h2></div>}>
                    
                    <h5 className="text-md text-contrast font-headerText font-bold px-2">
                        Fecha: Phasellus aliquam luctus dignissim.
                    </h5>
                    <p className="text-md text-contrast font-bodyText px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className={`${styles.primaryBtn}`}>Ver más</button>
                </Card>
            </div>
            <div>
                <Card
                    className="max-w-sm rounded-2xl"
                    
                    renderImage={() => <div className="h-52 m-6 flex items-end rounded-2xl relative"><img src={imgEvents} className="absolute w-full rounded-t-[16px]" alt="" /><h2 className="text-primary font-headerText font-bold ml-4 mb-4 z-[2]">Titulo: Phasellus aliquam luctus dignissim.</h2></div>}>
                    
                    <h5 className="text-md text-contrast font-headerText font-bold px-2">
                        Fecha: Phasellus aliquam luctus dignissim.
                    </h5>
                    <p className="text-md text-contrast font-bodyText px-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className={`${styles.primaryBtn}`}>Ver más</button>
                </Card>
            </div>
            
        </div>
    );
}

export default CardsEventsHome
