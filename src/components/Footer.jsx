function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="link">
                        <a className="link-header" href="#header">Home</a>
                        <a className="link-header" href="#about-me">About Me</a>
                        <a className="link-header" href="#projects-area">Progetti</a>
                        <a className="link-header" href="#skills-area">Skills</a>
                        <a className="link-header" href="#contacts-area">Contatti</a>
                    </div>
                    <div className="logo">
                        <img src="./img/logo.png" alt="Logo del profilo" />
                    </div>
                    <div className="policy">
                        <p>© 2025 Giuseppe Casaburi - Tutti i diritti riservati.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;