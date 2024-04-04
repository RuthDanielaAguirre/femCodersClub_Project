import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import QrCodeModal from "./qrCode/QrCodeModal";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import QRCode from 'qrcode';

const EmbeddedCheckout = ({ isVisible, onClose, eventId}: { isVisible: boolean, onClose: () => void, eventId:string}) => {

    const [showQr, setShowQr] = useState<boolean>(false);
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [src, setSrc] = useState('');
    const[currentUser, ] = useLocalStorage('user', '');
    const { name, lastName } = currentUser;

    const generate = () => {
        const user = userName + ' ' + userLastName;
        QRCode.toDataURL(`Asistente: ${user}, Id del Evento: #${eventId}`).then(setSrc);
    }

    const closeModal = () => onClose();

    const exampleCallback = () => { 
        setUserName(name);
        setUserLastName(lastName);
        generate();
        closeModal();
        setShowQr(true);
    };
    
    useEffect(() => {
        window.EBWidgets.createWidget({ 
            widgetType: 'checkout',
            eventId: eventId,
            iframeContainerId: (`eventbrite-widget-container-${eventId}`),
            iframeContainerHeight: 425,
            onOrderComplete: exampleCallback
        });
    })
    

    return (
        <>
        {isVisible?
        <>
            {createPortal(
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
                    <div className="relative rounded-2xl overflow-hidden w-[960px]">
                        <button className="absolute right-3 top-2 text-primary text-2xl place-self-end" onClick={closeModal}>(x)</button>
                        <div id={`eventbrite-widget-container-${eventId}`} className="w-full">
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
        :
        <></>
        }
        <QrCodeModal showQr={showQr} onClose={() => setShowQr(false)} qrCode={src}/>
        </>
    )
}

export default EmbeddedCheckout
