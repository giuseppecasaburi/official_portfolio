import AboutMe from "../components/AboutMe";
import Contacts from "../components/Contacts";
import HeroSection from "../components/HeroSection";
import Percorso from "../components/Percorso";
import Projects from "../components/Projects";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Skills from "../components/Skills";

function HomePage() {
    return (
        <>
            <HeroSection/>
            <AboutMe/>
            <Percorso/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <ScrollToTopButton/>
        </>
    )
}

export default HomePage;