"use client";

import { Modal } from "flowbite-react";
import { useState } from "react";
import { styles } from "../../../style";

interface ModalProps{
    children: React.ReactNode,
    text: string,
    width: string,
    bg: string,
}

function AdminModal(element:ModalProps) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <button onClick={() => setOpenModal(true)} 
                className={`${styles.basicModalBtn} 
                    w-[${element.width}]
                    bg-${element.bg}
                    `}>
                {element.text}
            </button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                    <div className="relative w-[800px] h-[700px] flex flex-col justify-center bg-primary rounded-[24px] px-24 bg-[url('../../../public/bg-modal.svg')] bg-no-repeat bg-contain">
                        <button className="absolute right-3 top-2 text-primary text-2xl place-self-end" onClick={() => setOpenModal(false)}>(x)</button>
                        {element.children}
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default AdminModal;