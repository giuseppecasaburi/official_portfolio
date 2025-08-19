import { useState } from "react";
import skills from "../data/skills_data";

function Skills() {
    const [selected, setselected] = useState(0);
    const buttons = ["Full-Stack", "Front-End", "Back-End"];

    return (
        <>
            <section id="skills-area">
                <div className="sa-container">
                    <div className="title-section">
                        <h2 className="am-title">Skills</h2>
                    </div>
                    <div id="sa-title-area">
                        <h2 id="sa-title" className="am-title">Skills</h2>
                    </div>

                    <div className="content-section">
                        <div className="tab-section">
                            {buttons.map((label, index) => (
                                <button
                                    key={index}
                                    onClick={() => setselected(index)}
                                    className={selected === index ? "button active" : "button"}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        <div className="box-section">
                            {skills[selected].map((skill) => (
                                <div className="box">
                                    <div className="box-content">
                                        <div className="icon">{skill.icon}</div>
                                        <p>{skill.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;