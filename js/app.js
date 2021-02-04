import React from "react"
import ReactDOM from "react-dom";
import Header from "./header"
import About from "./section_about";
import Work from "./section_work";
// import Game from "./section_game";
import Contact from "./section_contact";
import Experience from "./section_experience";




const App = () => (
    <>
        <About />
        <Experience />
        <Work />
        {/*<Game />*/}
        <Contact />
    </>
)


ReactDOM.render(<Header />, document.querySelector("header"))

ReactDOM.render(<App />, document.querySelector("main"))
