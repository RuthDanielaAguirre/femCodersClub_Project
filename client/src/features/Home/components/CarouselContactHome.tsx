"use client";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import imgContact from '../../../../public/imgContact.svg'
import imgVolunteer from '../../../../public/imgVolunteer.png'
import imgSponsor from '../../../../public/imgSponsor.svg'

function CarouselContactHome() {
    return (
        <div className="h-96 w-full lg:h-full lg:max-w-[1700px]  rounded-3xl flex flex-col items-center justify-center">
            <Carousel slide={false}
        rightControl={" "} leftControl={" "}>
                <div className="flex justify-center  text-center items-center bg-center" style={{ backgroundImage: `url(${imgContact})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", height: '100%', borderRadius:"24px" }}>
                    <h1 className="text-4xl font-semi-bold text-primary font-headerText ">Si quieres recibir información haz click <Link to="/contacto" className="text-tertiary">aquí</Link></h1>
                </div>

                <div className="flex justify-center  text-center items-center bg-center" style={{ backgroundImage: `url(${imgVolunteer})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", height: '100%', borderRadius:"24px" }}>
                    <h1 className="text-4xl font-semi-bold text-primary font-headerText ">Si quieres recibir información haz click <Link to="/contacto" className="text-tertiary">aquí</Link></h1>
                </div>
                <div className="flex justify-center  text-center items-center bg-center" style={{ backgroundImage: `url(${imgSponsor})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", height: '100%', borderRadius:"24px" }}>
                    <h1 className="text-4xl font-semi-bold text-primary font-headerText ">Si quieres recibir información haz click <Link to="/contacto" className="text-tertiary">aquí</Link></h1>
                </div>
               
            </Carousel>
        </div>
    );
}
export default CarouselContactHome