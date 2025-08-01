import CardComponent from "./CardComponent"

function Projects() {
    return (
        <>
            <section id="projects-area">
                <div className="pa-container">
                    <h3 className="pa-title">Progetti</h3>
                    <div className="row">
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                    </div>



                </div>
            </section>
        </>
    )
}

export default Projects