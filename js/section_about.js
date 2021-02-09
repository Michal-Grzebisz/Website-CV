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
                        <div className="about__text"  data-aos="fade-up">Hi, my name is Michal, I am currently
                            working as an 3d graphic designer in one of the Warsaw companies.
                            Although my current job gives me a lot of fun, I owe my success in
                            this industry by self-denial and consistency in pursuing my goals. I try to constantly develop,
                            broaden my horizons and keep up with the times. Therefore, I have decided to change my direction
                            a bit and learn new skills in another industry, my choice was programming. If you would ask someone
                            around my group of friends <span>“why programming?”</span>  most of them would say that <span>"he constantly keeps thinking
                                and scheming, sometimes I wonder if he is tired of it".</span> Yes, I have a creative mind, I love to think and
                            look for ways to solve various problems, but I am not tired of it, it just gives me pleasure. Thanks to
                            the experience gained, I can process in a team, think outside the box and effectively manage my time.
                        </div>
                    </div>
                </section>
            </>
        )
}


export default About
