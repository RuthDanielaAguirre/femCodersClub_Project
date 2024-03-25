"use client"

function ValuesCardsHome() {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="flex gap-16">
                    <div className="max-w-[300px] p-6 bg-primary rounded-3xl flex flex-col items-center py-6">
                        <img src="icon-equity.png" className="w-12 py-2" alt="Icono de equidad" />
                        <h5 className="text-2xl font-bold text-secondary font-headerText mb-2 text-center">Equidad</h5>
                        <p className="text-md text-contrast font-bodyText text-center">Las mujeres deben tener las mismas oportunidades de desarrollo profesional que los hombres, sin discriminación por género.</p>
                    </div>
                    <div className="max-w-[300px] p-6 bg-primary rounded-3xl flex flex-col items-center py-6">
                        <img src="icon-inclusion.png" className="w-12 py-2" alt="Icono de equidad" />
                        <h5 className="text-2xl font-bold text-secondary font-headerText mb-2 text-center">Inclusión</h5>
                        <p className="text-md text-contrast font-bodyText text-center">Las mujeres deben sentirse bienvenidas y apoyadas en el sector IT, independientemente de sus antecedentes o experiencias.</p>
                    </div>
                    <div className="max-w-[300px] p-6 bg-primary rounded-3xl flex flex-col items-center py-6">
                        <img src="icon-visibility.png" className="w-12 py-2" alt="Icono de equidad" />
                        <h5 className="text-2xl font-bold text-secondary font-headerText mb-2 text-center">Visibilidad</h5>
                        <p className="text-md text-contrast font-bodyText text-center">Los logros de las mujeres en el sector IT deben ser reconocidos y celebrados.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ValuesCardsHome
