// import React from 'react'

const GoogleButton = () => {
    return (
        <div className="flex justify-center flex-col w-full">
            <button type="button" className="text-contrast bg-primary hover:bg-contrast/20 focus:ring-4 focus:ring-secondary-300 rounded-[8px] text-[18px] h-[40px] w-full border-2 border-accent/5 hover:border-none shadow-lg shadow-accent/20 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Registrarme con Google</button>
        </div>
    )
}

export default GoogleButton