import AboutMe from "../components/AboutMe";
import Contacts from "../components/Contacts";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Skills from "../components/Skills";

function HomePage() {
    return (
        <>
            <HeroSection/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <ScrollToTopButton/>
        </>
    )
}

export default HomePage;