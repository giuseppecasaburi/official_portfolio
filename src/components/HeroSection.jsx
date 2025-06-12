import { FaArrowDown, FaRegFilePdf } from "react-icons/fa";
import TextTyping from "./TextTyping";
import { CiMail } from "react-icons/ci";

function HeroSection() {
    return (
        <>
            <section id="hero-section">
                <div id="container-section" className="md:flex">
                    <div id="left" className="md:my-auto">
                        <img src="../../img/logo.png" alt="" className="self-center"/>
                        <TextTyping />
                        <div id="tag" className="md:py-5">
                            <span className="rtw-button ms-btn-d rounded-full md:my-1">
                                <span id="disponibile"></span>
                                Disponibile per lavorare
                            </span>
                        </div>
                        <div id="button-area" className="md:mt-2">
                            <a href="" className="illuminated-button ms-btn-d "><CiMail id="contact" size={20} className="inline-block "/> <span className="inline-block text-center">Contattami</span></a>
                            <a href="" className="illuminated-button ms-btn-d md:ms-3"><FaRegFilePdf size={20} className="inline-block "/> <span className="inline-block text-center">CV</span></a>
                        </div>
                    </div>
                    <div id="right" className="my-auto ">
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