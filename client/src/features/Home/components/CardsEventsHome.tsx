import { Card } from "flowbite-react";
import { styles } from "../../../style";
import imgEvents from '../../../../public/imgEvents.png'

function CardsEventsHome() {
    return (
        <div className="flex gap-16">
            <div>
                <Card
                    className="w-[350px] rounded-2xl p-0"
                    
                    renderImage={() => <div className="h-52 flex items-end rounded-t-2xl relative overflow-hidden"><img src={imgEvents} className="absolute w-full rounded-t-[16px]" alt="" /><h2 className="text-primary font-headerText font-bold ml-4 mb-4 z-[2]">Titulo: Phasellus aliquam luctus dignissim.</h2></div>}>
                    
                    <div className="flex w-full justify-between">
                    <h5 className="text-[14px] text-contrast/70 font-headerText font-bold">
                        viernes, 15 de Marzo
                    </h5 >
                    <span className="text-[14px] text-contrast/70 font-headerText font-bold">Barcelona</span>
                    </div>
                    <p className="text-[16px] text-contrast font-bodyText pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className={`${styles.primaryBtn} w-[200px] self-center`}>Ver más</button>
                </Card>
            </div>
            <div>
                <Card
                   className="w-[350px] rounded-2xl p-0"
                    
                   renderImage={() => <div className="h-52 flex items-end rounded-t-2xl relative overflow-hidden"><img src={imgEvents} className="absolute w-full rounded-t-[16px]" alt="" /><h2 className="text-primary font-headerText font-bold ml-4 mb-4 z-[2]">Titulo: Phasellus aliquam luctus dignissim.</h2></div>}>
                   
                   <div className="flex w-full justify-between">
                   <h5 className="text-[14px] text-contrast/70 font-headerText font-bold">
                       viernes, 15 de Marzo
                   </h5 >
                   <span className="text-[14px] text-contrast/70 font-headerText font-bold">Barcelona</span>
                   </div>
                   <p className="text-[16px] text-contrast font-bodyText pb-2">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>
                   <button className={`${styles.primaryBtn} w-[200px] self-center`}>Ver más</button>
                </Card>
            </div>
            <div>
                <Card
                    className="w-[350px] rounded-2xl p-0"
                    
                    renderImage={() => <div className="h-52 flex items-end rounded-t-2xl relative overflow-hidden"><img src={imgEvents} className="absolute w-full rounded-t-[16px]" alt="" /><h2 className="text-primary font-headerText font-bold ml-4 mb-4 z-[2]">Titulo: Phasellus aliquam luctus dignissim.</h2></div>}>
                    
                    <div className="flex w-full justify-between">
                    <h5 className="text-[14px] text-contrast/70 font-headerText font-bold">
                        viernes, 15 de Marzo
                    </h5 >
                    <span className="text-[14px] text-contrast/70 font-headerText font-bold">Barcelona</span>
                    </div>
                    <p className="text-[16px] text-contrast font-bodyText pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button className={`${styles.primaryBtn} w-[200px] self-center`}>Ver más</button>
                </Card>
            </div>
            
        </div>
    );
}

export default CardsEventsHome
