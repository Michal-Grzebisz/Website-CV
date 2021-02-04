import React, { useState, useRef } from "react"
import "../sass/main.scss"
import Burger from "./burger";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Menu from "./menu";
import { useOnClickOutside } from './hooks';
import Particles from 'react-particles-js';




const Header = () => {
    const [navBar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    const [show, setShow] = useState(false)
    const showHamburger = () => {
        if (window.innerWidth <= 792) {
            setShow(true)
        }else {
            setShow(false)
        }
    }

    window.addEventListener('DOMContentLoaded', showHamburger)
    window.addEventListener('resize', showHamburger)

    const [showResults, setShowResults] = useState(false)

    const onResize = () => {
        if (window.innerWidth <= 792) {
            setShowResults(true)
        } else {
            setShowResults(false)
        }
    }

    window.addEventListener('DOMContentLoaded', onResize)
    window.addEventListener('resize', onResize)


    return (
        <ThemeProvider theme={theme}>
            <>
                <div ref={node}>
                    <Burger open={open} setOpen={setOpen} show={show} />
                    <Menu open={open} setOpen={setOpen}/>
                </div>
                      {showResults === false ? <HeaderNav navBar={navBar} /> : null}
                <div className="header__title">
                    <h1>Front-End Developer</h1>
                    <span>Michał Grzebisz</span>
                    <Particles params={{particles: {number: {value: 200, density: {enable: true, value_area: 1000,}},},
                    }}  height={window.innerWidth < 792 ? 600 : 500} width={window.innerWidth < 792 ? 200 : 600}
                               style={{position:"absolute", transform:window.innerWidth < 792 ? "translate(-50%, -70%)" : "translate(-50%, -55%)" }}/>
                </div>
            </>
        </ThemeProvider>
    )
}



const HeaderNav = ({navBar}) => (
    <div className={navBar === true ? "header__frame__active" : "header__frame"}>
        <div className="header__container container">
            <a href="#" className="header__logo">Michał Grzebisz</a>
            <nav>
                <ul className="header__nav">
                    <li className="nav__element"><a href="#section__about" className="nav__link">About</a></li>
                    <li className="nav__element"><a href="#section__experience" className="nav__link">Experience</a></li>
                    <li className="nav__element"><a href="#section__work" className="nav__link">Work</a></li>
                    <li className="nav__element"><a href="#section__contact" className="nav__link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
)


export default Header
