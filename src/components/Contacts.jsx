import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormContact from "./FormContact";


function Contacts() {
    return (
        <>
            <section id="contacts-area">
                <div className="cont-area">
                    <div className="title-section">
                        <h3 className="am-title">Contatti</h3>
                    </div>
                    <div className="title-section-desktop">
                        <h3 className="pa-title">Contatti</h3>
                    </div>
                    <div className="cont-content">
                        <div className="tag-info">
                            <div className="inv-card">
                                <div className="cont-icon">
                                    <FontAwesomeIcon icon={faPhone} color="blue" />
                                </div>
                                <div className="cont-content">
                                    <p>Telefono</p>
                                    <a href="tel:+393668061024">+39 366 80 61 024</a>
                                </div>
                            </div>
                            <div className="inv-card">
                                <div className="cont-icon">
                                    <FontAwesomeIcon icon={faEnvelope} color="blue" />
                                </div>
                                <div className="cont-content">
                                    <p>Email</p>
                                    <a href="mailto:giuseppe.casaburi96@gmail.com">giuseppe.casaburi96@gmail.com</a>
                                </div>
                            </div>
                            <div className="inv-card">
                                <div className="cont-icon">
                                    <i className="devicon-linkedin-plain"></i>
                                </div>
                                <div className="cont-content">
                                    <a href="www.linkedin.com/in/giuseppe-casaburi-32b91a188" target="_blank"
                                        rel="noopener noreferrer">Linkedin</a>
                                </div>
                            </div>
                            <div className="inv-card">
                                <div className="cont-icon">
                                    <FontAwesomeIcon icon={faLocationDot} color="blue" />
                                </div>
                                <div className="cont-content">
                                    <p>Località</p>
                                    <p>Napoli (NA)</p>
                                </div>
                            </div>
                        </div>
                        <div className="cont-form">
                            <div className="header">
                                <h3>Invia email</h3>
                                <p>Hai un progetto in mente o una collaborazione da propormi? Compila il form e ti risponderò al più presto!</p>
                            </div>
                            <div className="form-content">
                                <FormContact/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts;