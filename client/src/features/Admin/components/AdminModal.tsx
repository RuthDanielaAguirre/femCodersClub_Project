"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";
import { styles } from "../../../style";
import bgModal from '../../../../public/bgModal.svg'

interface ModalProps{
    children: React.ReactNode,
    text: string,
    width: string,
    bg: string,
    fontColor?: string,
    fonthover?: string,
}

function AdminModal(element:ModalProps) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <button onClick={() => setOpenModal(true)} 
                className={`${styles.basicModalBtn} 
                w-[${element.width}]
                bg-${element.bg}
                text-${element.fontColor}
                hover:text-${element.fonthover}
                `}>
                {element.text}
            </button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                    <div className="relative w-[800px] h-[700px] flex flex-col justify-center bg-primary rounded-[24px] md:px-24 sm:px-10 min-w-80 px-4 overflow-hidden">
                        <img src={bgModal} className="absolute top-0 left-0" alt="" />
                        <button className="absolute right-3 top-2 text-primary text-2xl place-self-end" onClick={() => setOpenModal(false)}>(x)</button>
                        <div className="w-full flex justify-center items-center">
                            <button className={`${styles.cancelModalBtn} w-[250px] z-[3] absolute bottom-[250px]`} onClick={() => setOpenModal(false)}>aceptar</button>
                        </div>
                        {element.children}
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default AdminModal;