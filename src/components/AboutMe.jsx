import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";

function AboutMe() {
    return (
        <>
            <section id="about-me">
                <div className="am-container">

                    <div className="title-section">
                        <h2 className="am-title">About Me</h2>
                    </div>

                    <div className="am-photo">
                        <div className="hexagon-border">
                            <div className="hexagon-border-1">
                                <div className="hexagon-frame-1">
                                    <img src="./img/foto_personale.png" alt="Foto profilo personale" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tag-section">
                        <div className="am-tab">
                            <div className="am-tag"><RiTeamLine size={24} className="inline-block" /> Team Working</div>
                            <div className="am-tag"><TbTargetArrow size={24} className="inline-block" /> Problem Solving</div>
                            <div className="am-tag"><BsFillLightningChargeFill size={24} className="inline-block" /> Adattabilità</div>
                        </div>
                    </div>

                    <div className="am-content text-section">

                        <div className="align-right title-section-desktop">
                            <h2 className="am-title">About Me</h2>
                        </div>

                        <div className="align-right">
                            <p><strong>Ciao! Sono Giuseppe, full-stack developer specializzato in CMS custom, integrazioni con servizi esterni e applicazioni web complete.</strong><br /><br />
                                Sviluppo soluzioni end-to-end con <strong>PHP, React, MySQL</strong> e integrazioni API (PayPal, ActiveCampaign), dalla progettazione wireframe alla consegna deployata su Vercel/Netlify.<br />
                                <strong>Realizzo:</strong> back-office con autorizzazioni, sistemi di booking, calendari editoriali e workflow automatizzati.<br /><br />
                                <strong>Portami la tua idea,</strong> la trasformo in un sistema scalabile e performante.
                                </p>
                            </div>

                        <div className="align-right tag-section-desktop">
                            <div className="am-tab">
                                <div className="am-tag"><RiTeamLine size={24} className="inline-block" /> Team Working</div>
                                <div className="am-tag"><TbTargetArrow size={24} className="inline-block" /> Problem Solving</div>
                                <div className="am-tag"><BsFillLightningChargeFill size={24} className="inline-block" /> Adattabilità</div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutMe;