import { useEffect, useRef, useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const useScrollPosition = () => {
        const [scrollPosition, setScrollPosition] = useState(0);

        useEffect(() => {
            const updatePosition = () => {
                setScrollPosition(window.pageYOffset);
            };

            window.addEventListener('scroll', updatePosition);
            updatePosition();

            return () => window.removeEventListener('scroll', updatePosition);
        }, []);

        return scrollPosition;
    };

    const [isSticky, setIsSticky] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef(null);
    const scrollPosition = useScrollPosition();

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        setIsSticky(scrollPosition > 1);
    }, [scrollPosition]);

    return (
        <>
            <header id='header' ref={headerRef}
                className={`header ${isSticky ? 'sticky' : ''} ${isSticky ? 'fixed' : 'relative'}`}
                style={{
                    backgroundColor: isSticky ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
                    borderBottom: isSticky ? '1px solid rgba(255, 255, 255, 0.5)' : 'none',
                    boxShadow: isSticky ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'
                }}>
                <nav className="mx-auto flex max-w-7xl items-center justify-between text-white p-6 md:px-8" aria-label="Global">
                    <div className="flex md:hidden md:flex-1">
                        <a href="#" className="md:hidden -m-1.5 p-1.5">
                            <img className="h-8 w-auto" src="../img/logo.png" alt="logo giuseppe casaburi" />
                        </a>
                    </div>
                    <div className={`flex md:hidden ${isMenuOpen ? 'invisible' : ''}`}>
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden justify-center ms-w-100 md:flex md:gap-x-12">
                        <a className="link-header" href="#header">Home</a>
                        <a className="link-header" href="#about-me">About Me</a>
                        <a className="link-header" href="#projects-area">Progetti</a>
                        <a className="link-header" href="#skills-area">Skills</a>
                        <a className="link-header" href="#contacts-area">Contatti</a>
                    </div>
                </nav>

                {/* Mobile menu, show/hide based on menu open state */}
                <div className={`md:hidden text-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} role="dialog" aria-modal="true">
                    {/* Background backdrop */}
                    <div className="fixed inset-0 z-50" onClick={closeMenu}></div>
                    <div id='side-menu' className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <img className="h-8 w-auto  ms-hidden" src="../img/logo.png" alt="logo giuseppe casaburi" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5"
                                onClick={closeMenu}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href="#header" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>Home</a>
                                    <a href="#about-me" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>About Me</a>
                                    <a href="#projects-area" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>Project</a>
                                    <a href="#skills-area" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>Skills</a>
                                    <a href="#contacts-area" className="-mx-3 block rounded-lg px-3 py-2 font-semibold touch-manipulation" onClick={closeMenu}>Contatti</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Spacer per evitare il salto quando diventa fixed */}
            {isSticky && (
                <div style={{ height: headerHeight }} />
            )}
        </>
    )
}

export default Header;