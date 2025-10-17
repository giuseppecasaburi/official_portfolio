function Cerchio() {
    return (
        <>
            <div class="percorso-container">

                <svg id="blocco" viewBox="0 0 1100 600" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="510" cy="151" r="8" fill="white" className="connessione" />
                    <path class="linea-connessione" d="M 510 150 Q 750 90, 710 100" />
                    <circle cx="545" cy="231" r="8" fill="white" className="connessione" />
                    <path class="linea-connessione" d="M 545 230 Q 800 205, 800 205" />

                    <circle cx="545" cy="370" r="8" fill="white" className="connessione" />
                    <path class="linea-connessione" d="M 545 370 Q 800 395, 800 395" />
                    <circle cx="510" cy="450" r="8" fill="white" className="connessione" />
                    <path class="linea-connessione" d="M 510 450 Q 750 510, 710 500" />
                </svg>


                <div class="cerchio">
                    <div className="cerchio-2">
                        <div class="cerchio-interno">
                            <i class="fas fa-globe"></i>
                            <h3>Il mio percorso</h3>
                        </div>
                    </div>
                </div>

                <div class="boxes-container">
                    <div className="box-percorso v1">
                        <div className="icona"></div>
                        <div className="text">
                            <h4>Lorem Ipsum</h4>
                            <p>04/04/2025 - Presente</p>
                        </div>
                    </div>

                    <div className="box-percorso v2">
                        <div className="icona"></div>
                        <div className="text">
                            <h4>Lorem Ipsum</h4>
                            <p>04/04/2025 - Presente</p>
                        </div>
                    </div>

                    <div className="box-percorso v3">
                        <div className="icona"></div>
                        <div className="text">
                            <h4>Lorem Ipsum</h4>
                            <p>04/04/2025 - Presente</p>
                        </div>
                    </div>

                    <div className="box-percorso v4">
                        <div className="icona"></div>
                        <div className="testo-box">
                            <h4>Lorem Ipsum</h4>
                            <p>04/04/2025 - Presente</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cerchio;