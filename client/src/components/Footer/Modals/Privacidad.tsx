import React, { useState, useRef, useEffect } from 'react';

const PrivacyPolicyModal= () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowMore(false); 
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollTop = modalRef.current.scrollHeight;
    }
  }, [isOpen]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <button onClick={openModal} className="text-primary hover:text-tertiary font-bold py-2 rounded">
        Política de Privacidad
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div ref={modalRef} className="bg-white p-8 max-w-4xl w-full sm:max-w-full h-full overflow-y-auto rounded-lg">
            <h2 className="text-2xl mb-4 text-black">Política de Privacidad y Términos de Uso</h2>
            <p className="text-black">
              En FemCoders Club, valoramos profundamente tu privacidad. Esta Política de Privacidad y los Términos de Uso describen cómo recopilamos, usamos y divulgamos la información obtenida de nuestras integrantes en nuestro directorio web. Al proporcionarnos tu información, aceptas que tu información personal se manejará según lo descrito en esta Política. Tu uso en nuestro sitio y cualquier disputa sobre la privacidad están sujetos a esta Política y a los Términos de Uso de nuestro sitio, que incluyen limitaciones aplicables a los daños y la resolución de disputas. Los Términos de Uso del sitio web de FemCoders Club se incorporan por referencia en esta Política.
            </p>
                <h3 className="text-xl mt-4 mb-2 text-black">¿Qué información recopilamos sobre ti y por qué?</h3>
                <p className="text-black">
                  Podemos recopilar información sobre ti directamente cuando te registras en el directorio mediante el formulario web de nuestro sitio o cuando envías una consulta a través del formulario correspondiente. También podemos recopilar información durante encuestas eventuales que realicemos.
                  Información que podemos solicitarte: Te pediremos que te registres en nuestro directorio para acceder a ciertos servicios, como recibir beneficios o acceder a contenido específico en nuestro sitio web. En estas áreas, podemos solicitar tu nombre, dirección de correo electrónico y otra información opcional, como detalles sobre tu formación académica. También podemos administrar cuestionarios, encuestas y otras herramientas de investigación y pedirte información como parte de tu participación, siendo siempre opcional y de participación voluntaria.
                  Información que recopilamos automáticamente: Podemos recopilar automáticamente información sobre tu uso de nuestro sitio a través de cookies, balizas web, script java, archivos de registro y otras tecnologías. Esto incluye tu nombre de dominio, tipo de navegador y sistema operativo, páginas web visitadas, enlaces seleccionados, dirección IP, tiempo de visita y URL de referencia. Para más detalles, consulta la sección "Cookies y otros mecanismos de seguimiento" a continuación.
                </p>

                <h3 className="text-xl mt-4 mb-2 text-black">¿Cómo usamos tu información?</h3>
                <p className="text-black">
                  Utilizamos la información que nos brindas, incluida tu información personal, para los siguientes propósitos:
                  Generar estadísticas y comunicarnos contigo: Utilizamos tu información para generar estadísticas, comunicarnos contigo y responder a tus consultas y solicitudes.
                  Personalizar contenido e información: Personalizamos el contenido e información que te enviamos o mostramos, mejoramos nuestro sitio y actividades, y realizamos investigaciones y análisis.
                </p>

            {!showMore && (
              <button onClick={toggleShowMore} className="text-tertiary underline mt-2">
                Saber más
              </button>
            )}

            {showMore && (
              <>

                <h3 className="text-xl mt-4 mb-2 text-black">¿Cómo compartimos tu información?</h3>
                <p className="text-black">
                  Podemos compartir tu información de las siguientes maneras:
                  Compartir con otros miembros: Cualquier información que autorices a publicar será visible para otros miembros en el sitio.
                  Protección propia y de otros: Podemos divulgar información si creemos que es necesario investigar, prevenir o tomar medidas con respecto a actividades ilegales o situaciones que impliquen amenazas potenciales para la seguridad.
                </p>

                <h3 className="text-xl mt-4 mb-2 text-black">Nuestro uso de cookies y otros mecanismos de seguimiento</h3>
                <p className="text-black">
                  Utilizamos cookies, GIFs transparentes y otras tecnologías para rastrear información sobre tu uso de nuestro sitio y servicios. Podemos combinar esta información con otra información personal que recopilamos de ti.
                  Cookies: Transferimos identificadores alfanuméricos a tu computadora mediante tu navegador web. Puedes ajustar las opciones de tu navegador para bloquearlas.
                  GIFs transparentes: Son pequeños gráficos incrustados de forma invisible en las páginas web para rastrear actividades. Los utilizamos para administrar el contenido y recopilar estadísticas.
                  Análisis de terceros: Utilizamos dispositivos y aplicaciones automatizadas para evaluar el uso de nuestros sitios y servicios. Esta información puede ser combinada por terceros proveedores de análisis.
                </p>

                <h3 className="text-xl mt-4 mb-2 text-black">Enlaces de terceros</h3>
                <p className="text-black">
                  Nuestro sitio y servicios pueden contener enlaces a sitios web de terceros. El acceso y uso de estos sitios no está gobernado por esta Política, sino por las políticas de privacidad de los sitios web de terceros.
                </p>

                <h3 className="text-xl mt-4 mb-2 text-black">Comunicaciones de nosotras</h3>
                <p className="text-black">
                  Podemos enviarte correos electrónicos informativos periódicos. Puedes optar por no recibir dichas comunicaciones siguiendo las instrucciones de exclusión que figuran en el correo electrónico.
                </p>

                <h3 className="text-xl mt-4 mb-2 text-black">Seguridad de tu información personal</h3>
                <p className="text-black">
                  Hemos implementado medidas de seguridad para proteger la información que recopilamos, pero ninguna medida puede garantizar el 100% de seguridad.
                </p>

                <h3 className="text-xl mt-4 mb-2 text-black">Cambios a esta política</h3>
                <p className="text-black">
                  Esta Política está vigente a partir de la Fecha de vigencia establecida anteriormente. Podemos cambiarla ocasionalmente, por lo que te recomendamos revisarla periódicamente. Publicaremos cualquier cambio aquí y, si es relevante, te notificaremos con antelación.
                </p>

                <h3 className="text-xl mt-4 mb-2 text-black">Contacto</h3>
                <p className="text-black">
                  Tu privacidad es importante para nosotras. Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nosotras.
                </p>

                <div className="flex justify-end mt-4">
                  <button onClick={closeModal} className="px-4 py-2 bg-tertiary text-white rounded-lg mr-4">
                    Cerrar
                  </button>
                  <button onClick={closeModal} className="px-4 py-2 bg-secondary text-white rounded-lg">
                    Aceptar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicyModal;