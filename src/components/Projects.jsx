import CardComponent from "./CardComponent"

function Projects() {
    const projects = [
        {
            name: "MoovieMood",
            logo: "./img/mooviemood/logo.png",
            img: [
                "./img/mooviemood/home.jpeg",
                "./img/mooviemood/moovies.jpeg",
                "./img/mooviemood/single.jpeg",
                "./img/mooviemood/directors.jpeg",
                "./img/mooviemood/singled.jpeg",
                "./img/mooviemood/search.jpeg",
            ],
        },
        {
            name: "BoolBnB",
            logo: "./img/boolbnb/logo.png",
            img: [
                "./img/boolbnb/home.jpeg",
                "./img/boolbnb/detail.jpeg",
                "./img/boolbnb/create.jpeg",
                "./img/boolbnb/search.jpeg",
                "./img/boolbnb/searchr.jpeg"
            ],
        }
    ]

    return (
        <>
            <section id="projects-area">
                <div className="pa-container">
                    <h3 className="pa-title">Progetti</h3>
                    <div className="row">
                        <CardComponent Projects={projects[0]} />
                        <CardComponent Projects={projects[1]} />
                        <CardComponent Projects={projects[0]} />
                        <CardComponent Projects={projects[1]} />
                    </div>



                </div>
            </section>
        </>
    )
}

export default Projects