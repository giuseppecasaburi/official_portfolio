import Cerchio from "./Cerchio";

function Percorso() {
    return (
        <>
            <section id="percorso-area">
                <div className="per-container">
                    <div className="title-section">
                        <h2 className="am-title">Percorso</h2>
                    </div>
                    <div className="title-section-desktop">
                        <h2 className="per-title">Percorso</h2>
                    </div>
                    <Cerchio />
                </div>

            </section>
        </>
    )
}

export default Percorso;