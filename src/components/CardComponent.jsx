import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CardComponent(projects) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    // Serve a bloccare lo scroll sottostante al modale
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'hidden';
        }
    }, [isModalOpen])

    return (
        <>
            <div className="card">
                <div className="title-part">
                    <img src={projects.Projects.logo} alt={`Logo del progetto {projects.Projects.name}`} />
                    <h3>{projects.Projects.name}</h3>
                </div>
                <div className="carousel">
                    <div className="img-container">
                        <Carousel imgArr={projects.Projects.img} />
                    </div>
                </div>
                <div className="card-body">
                    <div className="tag-area">
                        {projects.Projects.tecnologie.map((tecnologia, index) => (
                            <span key={index} className="card-btn">{tecnologia}</span>
                        ))}
                    </div>
                    <div className="middle-part">
                        <p>
                            {projects.Projects.descrizione.length > 179 ? (
                                <>
                                    {projects.Projects.descrizione.slice(0, 180)}... <span className="load-more" onClick={openModal}>Continua a leggere</span>
                                </>
                            )
                                : projects.Projects.descrizione
                            }
                        </p>
                    </div>
                    <div className="end-part">
                        {projects.Projects.link_repo ? (
                            <>
                                <a href={projects.Projects.link_repo} className="card-button" target="_blank"
                                    rel="noopener noreferrer">GitHub
                                </a>
                                <a href={projects.Projects.link_demo} className="card-button" target="_blank"
                                    rel="noopener noreferrer">Demo
                                </a>
                            </>
                        ) : ("")
                        }
                    </div>
                </div>
            </div>



            {/* Modale */}
            {isModalOpen && (
                <div className="modal-container inset-0" onClick={handleBackdropClick}>
                    <div className="modal">
                        {/* Header */}
                        <div className="modal-header">
                            <div className="flex items-center">
                                <img className="w-15" src={projects.Projects.logo} alt={`Logo del progetto {projects.Projects.name}`} />
                                <h2 className="text-2xl font-bold ps-3">
                                    {projects.Projects.name}
                                </h2>
                            </div>
                            <button
                                onClick={closeModal}
                                className="cross-button"
                            >
                                <FontAwesomeIcon icon={faTimes} color="blue" />
                            </button>
                        </div>

                        {/* Contenuto */}
                        <div className="modal-content">
                            <p className="whitespace-pre-wrap">
                                {projects.Projects.descrizione}
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t flex justify-center">
                            <button onClick={closeModal} className="card-button">Chiudi
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CardComponent;