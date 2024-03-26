"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { styles } from "../../../../style";

function AddSponsorModal() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Button onClick={() => setOpenModal(true)} className={`${styles.addBtn}`}>Agregar</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                    <div className="relative w-[800px] h-[700px] flex flex-col justify-center bg-primary rounded-[24px] px-24 bg-[url('../../../public/bg-modal.svg')] bg-no-repeat bg-contain">
                        <button className="absolute right-3 top-2 text-primary text-2xl place-self-end" onClick={() => setOpenModal(false)}>(x)</button>
                        {/* <h1 className={`${styles.heading4} text-center mb-5`}>¿Que te gustaria editar?</h1>
                        <div className="flex flex-col w-full h-fit p-10 gap-4 bg-accent/90 rounded-[24px]">
                            <form action="#" method="POST" className="flex flex-col items-start gap-1">
                                    <label htmlFor="email" className={`${styles.label2}`}>Nombre:</label>
                                    <input id="email" type="email" name="email"className={`${styles.input} mt-[10px]`}  />
                                    
                                    <label htmlFor="password"  className={`${styles.label2}`}>Entidad:</label>
                                    <input type="password" id="password" name="password"className={`${styles.input}`} />

                                    <label htmlFor="password"  className={`${styles.label2}`}>Telefono:</label>
                                    <input type="password" id="password" name="password"className={`${styles.input}`} />

                                    <label htmlFor="password"  className={`${styles.label2}`}>Status:</label>
                                    <input type="password" id="password" name="password"className={`${styles.input}`} />

                                    <label htmlFor="password"  className={`${styles.label2}`}>Mensaje:</label>
                                    <input type="password" id="password" name="password"className={`${styles.input}`} />
                                    <div className="flex justify-around w-full mt-5">
                                    <button className='bg-secondary/90 hover:bg-contrast text-primary font-semibold w-[180px] rounded-[8px] shadow-md shadow-secondary'>Cancelar</button>
                                    <button className={`${styles.primaryBtn} shadow-md shadow-secondary w-[180px]`}>Guardar</button>
                                    </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default AddSponsorModal;