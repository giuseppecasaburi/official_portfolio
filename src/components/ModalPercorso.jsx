import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

function ModalPercorso({ isOpen, onClose, experience }) {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Serve a bloccare lo scroll sottostante al modale
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'hidden';
        }
    }, [isOpen])

    if (!isOpen) return null;

    return (
        <>
            {/* Modale */}
            <div className="modal-container inset-0" onClick={handleBackdropClick}>
                <div className="modal">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="flex items-center">
                            <img className="w-15" src={experience.logo} alt="" />
                            <h2 className="text-3xl font-bold ps-3">
                                {experience.name}
                            </h2>
                        </div>
                        <button onClick={onClose} className="cross-button">
                            <FontAwesomeIcon icon={faTimes} color="blue" />
                        </button>
                    </div>

                    {/* Contenuto */}
                    <div className="modal-content">
                        <div className="mb-3">
                            <h3 className="font-semibold text-2xl">{experience.where}</h3>
                            <p>{experience.when}</p>
                        </div>
                        <p
                            className="text-sm mb-4"
                            dangerouslySetInnerHTML={{
                                __html: experience.descrizione.replace(/\n/g, "<br />"),
                            }}
                        ></p>
                        <div id="tag-area-percorso" className="tag-area">
                            {experience.tecnologie.map((tecnologia, index) => (
                                <span key={index} className="card-btn">{tecnologia}</span>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t flex justify-center">
                        <button onClick={onClose} className="card-button">
                            Chiudi
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalPercorso;