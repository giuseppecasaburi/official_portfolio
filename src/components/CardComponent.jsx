import { useState } from "react";
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

    // Gestisce la chiusura del modale quando si clicca fuori
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            {/* Card V1 */}
            {/*
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
            */}

            {/* Card V2 */}
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
                            <span className="card-btn">{tecnologia}</span>
                        ))}
                    </div>
                    <div className="middle-part">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi excepturi vitae amet aspernatur quisquam hic id molestiae doloribus quod alias reprehenderit ducimus cum eos eligendi, consequuntur, consequatur suscipit temporibus. <span className="load-more" onClick={openModal}>Load more...</span></p>
                    </div>
                    <div className="end-part">
                        <a href={projects.Projects.link_repo} className="card-button" target="_blank"
                            rel="noopener noreferrer">GitHub
                        </a>
                        <a href={projects.Projects.link_demo} className="card-button" target="_blank"
                            rel="noopener noreferrer">Demo
                        </a>
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
                                className="cross-button"
                            >
                                <FontAwesomeIcon icon={faTimes} color="blue"/>
                            </button>
                        </div>

                        {/* Contenuto del modale */}
                        <div className="modal-content">
                            <p className="whitespace-pre-wrap">
                                {projects.Projects.descrizione}
                            </p>
                        </div>

                        {/* Footer del modale */}
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