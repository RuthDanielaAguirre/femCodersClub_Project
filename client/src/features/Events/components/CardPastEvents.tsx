"use client"
import { Card } from "flowbite-react";
import imgEvents from '../../../../public/imgEvents.png'

function CardPastEvents({title, image, date, location, description}) {
    return (

        <Card
            className="w-[350px] rounded-2xl p-0"

            renderImage={() => <div className="h-60 flex items-end rounded-t-2xl relative overflow-hidden"><img src={image||imgEvents} className="absolute w-full rounded-t-[16px]" alt="" /><h2 className="text-primary font-headerText font-bold ml-4 mb-4 z-[2]">{title}</h2></div>}>

            <div className="flex w-full justify-between">
                <h5 className="text-[14px] text-contrast/70 font-headerText font-bold">
                    {date}
                </h5 >
                <span className="text-[14px] text-contrast/70 font-headerText font-bold">{location}</span>
            </div>
            <p className="text-[16px] text-contrast font-bodyText pb-2">
                {description}
            </p>
        </Card>

    );
}

export default CardPastEvents
