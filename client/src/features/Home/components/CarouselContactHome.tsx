"use client";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import imgContact from '../../../../public/imgContact.svg'
import imgVolunteer from '../../../../public/imgVolunteer.png'
import imgSponsor from '../../../../public/imgSponsor.svg'

function CarouselContactHome() {
    return (
        <div className="sm:h-64 xl:h-80 2xl:h-96">
            <Carousel rightControl={" "} leftControl={" "} className="h-screen">
                
                {/* <div className="bg-[url('../../../../img-contact.svg')] bg-cover bg-no-repeat h-screen w-full flex justify-center items-center"> */}
                <div className="relative h-screen w-full flex justify-center items-center">
                    <img src={imgContact} className="absolute w-full z-[-1]" alt="" />
                    <h1 className="text-4xl font-semi-bold text-primary font-headerText mt-28">Si quieres recibir información haz click <Link to="/contacto" className="text-tertiary">aquí</Link></h1>
                </div>
                <div className="relative h-screen w-full flex justify-center items-center">
                    <img src={imgVolunteer} className="absolute w-full z-[-1]" alt="" />
                    <h1 className="text-4xl font-semi-bold text-primary font-headerText mt-28">Si quieres ser Voluntaria/o haz click <Link to="/contacto" className="text-tertiary">aquí</Link></h1>
                </div>
                <div className="relative h-screen w-full flex justify-center items-center">
                    <img src={imgSponsor} className="absolute w-full z-[-1]" alt="" />                        
                    <h1 className="text-4xl font-semi-bold text-primary font-headerText mt-28">Si quieres ser Sponsor haz click aquí <Link to="/contacto" className="text-tertiary">aquí</Link></h1>
                </div>
            </Carousel>
        </div>
    );
}
export default CarouselContactHome