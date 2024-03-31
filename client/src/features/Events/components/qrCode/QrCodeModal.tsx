"use client";

import { Modal } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import { styles } from "../../../../style";
import QRCode from 'qrcode'

function QrCodeModal() {
    const [openModal, setOpenModal] = useState(false);
    const [userName, setUserName] = useState('');
    const [src, setSrc] = useState('');

    const generate = () => {
        QRCode.toDataURL(`${userName}`).then(setSrc);
        setOpenModal(true);
    }

    const setData = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    return (
        <div className="flex flex-col rounded-[24px] h-fit gap-5 mt-10 p-8 bg-accent/90 w-[500px]">
            <input onChange={setData} className={`${styles.input}`}/>
            <button className={`${styles.primaryBtn} w-[250px] self-center`} onClick={generate}>Abrir modal</button>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                    <div className="relative w-[800px] h-[700px] flex flex-col items-center gap-3 justify-center bg-primary rounded-[24px] px-24 overflow-hidden">
                        <button className="absolute right-3 top-2 text-secondary font-bold text-2xl place-self-end" onClick={() => setOpenModal(false)}>(x)</button>
                        <img src={src} className="w-[300px]"/>
                        <h1 className="text-3xl text-secondary font-bold">¡Se ha confirmado tu reserva!</h1>
                        <p className="text-contrast w-[360px] text-center">No te olvides de tener a mano tu código QR cuando llegues al evento.</p>
                        <p className="text-contrast">¡Nos vemos!</p>
                        <button className={`${styles.primaryBtn} w-[250px] mt-2`} onClick={() => setOpenModal(false)}>Aceptar</button>
                        <a href={src} download className={`${styles.tertiaryBtn} w-[250px] mt-2 flex items-center justify-center`} onClick={() => setOpenModal(false)}>Descargar codigo QR</a>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default QrCodeModal;