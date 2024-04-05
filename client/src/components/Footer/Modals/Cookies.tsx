import { useState } from 'react';
import { styles } from "../../../style";

const CookiePolicyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="text-primary hover:text-tertiary sm:py-0 md:py-2 text-right">
        Política de cookies
      </button>
      {isOpen && (
        <div className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-primary p-8 h-[650px] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl overflow-y-auto text-left rounded-[24px]">
            <div className="overflow-y-auto max-h-full">
              <div className='mr-6'>
              <div className="flex justify-end">
                <button onClick={closeModal} className="text-accent text-headerText text-3xl hover:text-tertiary focus:outline-none">x</button>
              </div>
              <h2 className="text-2xl mb-4 text-contrast"> Política de cookies</h2>
              <p className="text-contrast text-bodyText">
                Las cookies son pequeños fragmentos de texto enviados por su navegador web por un sitio web que visita. Un archivo cookie se almacena en su navegador web y permite que el Servicio o un tercero lo reconozca y haga que su próxima visita sea más fácil y que el Servicio le resulte más útil.
              </p>
              <h3 className="text-xl mt-4 mb-2 text-contrast text-bodyText">Aviso de Cookies</h3>
              <p className="text-contrast text-bodyText">
                Este sitio web utiliza cookies para mejorar la experiencia del usuario y proporcionar funcionalidades adicionales. Al utilizar nuestro sitio web, aceptas el uso de cookies de acuerdo con nuestra política de cookies.
              </p><br />
              <p className="text-contrast text-bodyText">
                <strong>¿Qué son las cookies?</strong> Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
              </p><br />
              <p className="text-contrast text-bodyText">
                <strong>¿Cómo usamos las cookies?</strong> Utilizamos cookies para varios propósitos, incluyendo:
                <ul className="list-disc ml-8">
                  <li>Mejorar la funcionalidad y rendimiento del sitio.</li>
                  <li>Personalizar tu experiencia en el sitio.</li>
                  <li>Analizar el uso del sitio para realizar mejoras.</li>
                </ul>
              </p><br />
              <p className="text-contrast text-bodyText">
                <strong>¿Cómo puedes gestionar las cookies?</strong> Puedes controlar y/o eliminar las cookies según tus preferencias. Para más detalles, consulta la sección de ayuda de tu navegador. Ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad de este sitio y de otros sitios web.
              </p><br />
              <p className="text-contrast text-bodyText">
                <strong>Política de Privacidad</strong> Para obtener más información sobre cómo manejamos tus datos personales y cookies, consulta nuestra Política de Privacidad.
              </p><br />
              <p className="text-contrast text-bodyText">
                Al continuar utilizando nuestro sitio web, aceptas el uso de cookies según lo descrito en este aviso.
              </p>
              <div className="flex justify-start mt-8 pb-8 space-x-4">
                <button onClick={closeModal} className={`${styles.primaryBtn} w-[180px]`}>
                  Aceptar
                </button>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookiePolicyModal;