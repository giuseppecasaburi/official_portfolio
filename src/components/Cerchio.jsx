import { faBriefcase, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalPercorso from "./ModalPercorso";
import experience from "../data/experience";
import { useState } from "react";

function Cerchio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    const openModal = (experienceData) => {
        setSelectedExperience(experienceData);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedExperience(null);
    };
    

    return (
        <>
            <section>

                <div class="percorso-container">

                    <svg id="blocco" viewBox="0 0 1100 600" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="510" cy="151" r="8" fill="white" className="connessione" />
                        <path class="linea-connessione" d="M 510 150 Q 750 90, 710 100" />

                        <circle cx="548" cy="250" r="8" fill="white" className="connessione" />
                        <path class="linea-connessione" d="M 540 250 Q 800 225, 800 225" />

                        <circle cx="548" cy="350" r="8" fill="white" className="connessione" />
                        <path class="linea-connessione" d="M 545 350 Q 800 375, 800 375" />

                        <circle cx="510" cy="450" r="8" fill="white" className="connessione" />
                        <path class="linea-connessione" d="M 510 450 Q 750 510, 710 500" />
                    </svg>


                    <div class="cerchio">
                        <div className="cerchio-2">
                            <div className="cerchio-interno">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h3>Il mio percorso</h3>
                            </div>
                        </div>
                    </div>

                    <div class="boxes-container">
                        <div className="box-percorso v1">
                            <div className="icona"><img src={experience[3].logo} alt="" /></div>
                            <div className="testo-box">
                                <h4>{experience[3].name}</h4>
                                <p>{experience[3].where}</p>
                                <p>{experience[3].when}</p>
                            </div>
                            <div className="cont-button">
                                <button className="button" onClick={() => openModal(experience[3])}>Dettagli</button>
                            </div>
                        </div>

                        <div className="box-percorso v2">
                            <div className="icona"><img src={experience[2].logo} alt="" /></div>
                            <div className="testo-box">
                                <h4>{experience[2].name}</h4>
                                <p>{experience[2].where}</p>
                                <p>{experience[2].when}</p>
                            </div>
                            <div className="cont-button">
                                <button className="button" onClick={() => openModal(experience[2])}>Dettagli</button>
                            </div>
                        </div>

                        <div className="box-percorso v3">
                            <div className="icona"><img src={experience[1].logo} alt="" /></div>
                            <div className="testo-box">
                                <h4>{experience[1].name}</h4>
                                <p>{experience[1].where}</p>
                                <p>{experience[1].when}</p>
                            </div>
                            <div className="cont-button">
                                <button className="button" onClick={() => openModal(experience[1])}>Dettagli</button>
                            </div>
                        </div>

                        <div className="box-percorso v4">
                            <div className="icona"><img src={experience[0].logo} alt="" /></div>
                            <div className="testo-box">
                                <h4>{experience[0].name}</h4>
                                <p>{experience[0].where}</p>
                                <p>{experience[0].when}</p>
                            </div>
                            <div className="cont-button">
                                <button className="button" onClick={() => openModal(experience[0])}>Dettagli</button>
                            </div>
                        </div>
                    </div>
                    <ModalPercorso isOpen={isModalOpen} onClose={closeModal} experience={selectedExperience}/>
                </div>
            </section>
        </>
    )
}

export default Cerchio;