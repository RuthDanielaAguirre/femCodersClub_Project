import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';

const QrScanner = () => {
    const [ scanResult, setScanResult] = useState<string | null>(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
            width: 250,
            height: 250,
            },
            fps: 5,
        },
        false);

        scanner.render(success, error);

        function success(result:string) {
            scanner.clear();
            setScanResult(result);
        }

        function error(error: string) {
            console.log(error);
        }

    },[]);
    
    return (
        <div className='flex justify-center w-full h-full'>
            {scanResult 
            ?
            <div className='text-xl text-contrast w-full h-fit overflow-hidden'>
                <h1>Lectura exitosa!!</h1>
                <p>Asistente: {scanResult}</p>
            </div>
            :
            <div className='w-[300px] text-contrast text-xl flex flex-col items-center justify-center' id='reader'></div>
            }
        </div>
    )
}

export default QrScanner;