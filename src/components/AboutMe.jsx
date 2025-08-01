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
                                    <img src="../../img/foto_personale.png" alt="" />
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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur rerum beatae architecto repellat, quibusdam officia sed eum error ipsum odio numquam quidem temporibus fugiat nulla, iusto, non labore eveniet maxime. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem culpa atque sit blanditiis vel accusamus reprehenderit? Consequuntur omnis voluptatibus minima praesentium, suscipit neque molestiae at aliquam. Iste maiores libero nostrum?</p>
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