import { createPortal } from "react-dom";
import { styles } from "../../../style";
import bgModal from '../../../../public/bgModal.svg'

export const ConfirmationModal = ({ isVisible, onClose}: { isVisible: boolean, onClose:()=>void}) => {
    if ( !isVisible ) {
        return null;
    }

    return (
        <>
            {createPortal(
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-[50]'>
                    <div className="relative w-[800px] h-[700px] flex flex-col justify-center bg-primary rounded-[24px] md:px-24 sm:px-10 min-w-80 px-4 overflow-hidden">
                        <img src={bgModal} className="absolute top-0 left-0" alt="" />
                        <button className="absolute right-3 top-2 text-primary text-2xl place-self-end" onClick={() => onClose()}>(x)</button>
                        <div className="w-full flex justify-center items-center">
                            <button className={`${styles.cancelModalBtn} w-[250px] z-[3] absolute bottom-[250px]`} onClick={() => onClose()}>aceptar</button>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 z-[1] py-10 rounded-[24px] bg-primary">
                            <h1 className="text-center text-xl font-semibold text-contrast">¡Mensaje enviado con exito!</h1>
                            <p>En breve nos comunicaremos contigo</p>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}
export default ConfirmationModal;