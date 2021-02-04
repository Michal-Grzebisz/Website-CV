import React, {useEffect} from 'react'
import AOS from "aos";


const About = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
            <>
                <section id="section__about">
                    <p className="about_p" data-aos="fade">About</p>
                    <div  className="about">
                        <div className="about__img"  data-aos="fade-right">
                            <img src="images/photo.jpg" alt="My Photo" width="450" height="675"></img>
                        </div>
                        <div className="about__text"  data-aos="fade-up">Cześć, mam na imię Michał. Aktualnie pracuję w firmie The
                            Digital Bunch jako mid grafik 3d artist.
                        </div>
                    </div>
                </section>
            </>
        )
}


export default About
