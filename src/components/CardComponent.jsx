import { useState } from "react";
import Carousel from "./Carousel";

function CardComponent(projects) {

    console.table(projects.Projects.name);

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
                        <Carousel imgArr={projects.Projects.img} />
                    </div>
                </div>
                <div className="card-body">
                    <div className="top-body">
                        {projects.Projects.tecnologie.map((tecnologia, index) => (
                            <span className="card-btn">{tecnologia}</span>
                        ))}
                    </div>
                    <div className="down-body">
                        <img src={projects.Projects.logo} alt={`Logo del progetto {projects.Projects.name}`} />
                        <h3 className="cursor-pointer" onClick={openModal}>{projects.Projects.name}</h3>
                        <a href={projects.Projects.link} className="card-btn" target="_blank"
                            rel="noopener noreferrer">Visita Il Sito</a>
                    </div>
                </div>
            </div>



            {/* Modale */}
            {isModalOpen && (
                <div className="modal-container inset-0" onClick={handleBackdropClick}>
                    <div className="modal">
                        {/* Header del modale */}
                        <div className="modal-header">
                            <div className="flex items-center">
                                <img className="w-15" src={projects.Projects.logo} alt={`Logo del progetto {projects.Projects.name}`} />
                                <h2 className="text-2xl font-bold ps-3">
                                    {projects.Projects.name}
                                </h2>
                            </div>
                            <button
                                onClick={closeModal}
                                className="hover:text-gray-700 transition-colors"
                            >
                                X
                            </button>
                        </div>

                        {/* Contenuto del modale */}
                        <div className="modal-content">
                            <Carousel imgArr={projects.Projects.img} />
                            <div className="top-body">
                                {projects.Projects.tecnologie.map((tecnologia, index) => (
                                    <span className="card-btn">{tecnologia}</span>
                                ))}
                            </div>
                            <p className="whitespace-pre-wrap">
                                {projects.Projects.descrizione}
                            </p>
                        </div>

                        {/* Footer del modale */}
                        <div className="p-6 border-t flex justify-end">
                            <button
                                className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Visita Il Sito
                            </button>
                            <button
                                onClick={closeModal}
                                className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
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