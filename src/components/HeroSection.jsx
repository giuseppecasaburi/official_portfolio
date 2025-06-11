import { FaArrowDown } from "react-icons/fa";
import TextTyping from "./TextTyping";

function HeroSection() {
    return (
        <>
            <section id="hero-section">
                <div id="container-section" className="md:flex">
                    <div id="left" className="md:w-2/4 md:my-auto">
                        <img src="../../img/logo.png" alt="" className="self-center"/>
                        <TextTyping />
                        <div id="tag" className="md:py-5 self-center">
                            <p className="rtw-button rounded-full md:my-2 ">
                                <span id="disponibile"></span>
                                Disponibile per lavorare
                            </p>
                        </div>
                        <div id="button-area" className="md:mt-5 self-center">
                            <a href="" className="illuminated-button md:me-3">Contattami</a>
                            <a href="" className="illuminated-button md:ms-3">CV</a>
                        </div>
                    </div>
                    <div id="right" className="w-2/4 my-auto hidden md:inline-block">
                        <img src="../../img/pc_sfondo_1.png" alt="" />
                    </div>
                </div>
                <button className="mb-5 absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center show-more rounded-full scroll-button">
                    Scopri di più <br /><FaArrowDown size={20} />
                </button>
            </section>
        </>
    )
}

export default HeroSection;