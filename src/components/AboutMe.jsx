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
                            <p>Ciao! Sono Giuseppe, un web developer full-stack con una formazione solida e pratica.<br/>
                                Ho iniziato il mio percorso con un corso intensivo di 6 mesi in cui ho appreso HTML, CSS e JavaScript, per poi specializzarmi in React.js, Node.js, Express, PHP, Laravel e SQL. Successivamente ho approfondito Java e Spring Boot attraverso un secondo corso di studi.<br/><br/>
                                Durante la formazione ho realizzato progetti completi che integrano front-end responsive e back-end scalabili, consolidando un forte interesse per lo sviluppo server-side.<br/>
                                Mi contraddistinguono un approccio pratico e orientato al problem solving, la curiosità verso nuove tecnologie e la predisposizione al lavoro in team. Attualmente sono alla ricerca di opportunità per crescere come professionista e contribuire a progetti innovativi.</p>
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