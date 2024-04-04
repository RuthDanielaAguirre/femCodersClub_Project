import { useEffect } from "react";
import { createPortal } from "react-dom";

const EmbeddedCheckout = ({ isVisible, onClose, eventId}: { isVisible: boolean, onClose: () => void, eventId:string}) => {

    const exampleCallback = () => { 
        console.log('Order complete!'); 
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
                    <div className="relative rounded-2xl overflow-hidden w-[1000px]">
                        <button className="absolute right-3 top-2 text-primary text-2xl place-self-end" onClick={()=> onClose()}>(x)</button>
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
        </>
    )
}

export default EmbeddedCheckout
