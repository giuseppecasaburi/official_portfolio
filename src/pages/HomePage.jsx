import AboutMe from "../components/AboutMe";
import Contacts from "../components/Contacts";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function HomePage() {
    return (
        <>
            <HeroSection/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contacts/>
        </>
    )
}

export default HomePage;