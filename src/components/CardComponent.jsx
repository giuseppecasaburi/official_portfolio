import { useState } from "react";

function CardComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Gestisce la chiusura del modale quando si clicca fuori
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {/* Card */}
            <div className="card">
                <div className="top-card">
                    <div className="img-container">
                        <img src="http://placehold.co/600x400/png" alt="" />
                    </div>
                </div>
                <div className="card-body">
                    <img src="http://placehold.co/60x60/png" alt="" />
                    <h3 className="cursor-pointer" onClick={openModal}>Titolo Progetto</h3>
                    <a href="" className="card-btn">Visita Il Sito</a>
                </div>
            </div>

            {/* Modale */}
            {isModalOpen && (
                <div className="modal-container inset-0" onClick={handleBackdropClick}>
                    <div className="modal">
                        {/* Header del modale */}
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-2xl font-bold text-gray-800">
                                TITOLO ESTESO
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                X
                            </button>
                        </div>

                        {/* Contenuto del modale */}
                        <div className="p-6">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                DESCRIZIONE ESTESA
                            </p>

                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Dettagli aggiuntivi:
                            </h3>
                        </div>

                        {/* Footer del modale */}
                        <div className="p-6 border-t bg-gray-50 flex justify-end">
                            <button
                                onClick={closeModal}
                                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CardComponent;