import CardComponent from "./CardComponent";
import projects from "../data/projects_data";

function Projects() {
    return (
        <>
            <section id="projects-area">
                <div className="pa-container">
                    <div className="title-section">
                        <h2 className="am-title">Progetti</h2>
                    </div>
                    <div className="title-section-desktop">
                        <h2 className="pa-title">Progetti</h2>
                    </div>
                    <div className="row">
                        <CardComponent Projects={projects[0]} />
                        <CardComponent Projects={projects[1]} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects