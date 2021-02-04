import React, {useEffect} from 'react';
import AOS from "aos";



const Contact = () => {
        useEffect(() => {
                AOS.init({duration: 2000});
        }, []);


        return (
            <>
                    <section  id="section__contact">
                            <div className="contact">
                                    <span data-aos="fade">Contact Me</span>
                                    <ul data-aos="fade-right">
                                        <li>Michał Grzebisz</li>
                                        <li><a href="tel:+48723612688">723-612-688</a></li>
                                        <li><a href="mailto:mg.michbisz.mg@gmail.com">mg.michbisz.mg@gmail.com</a></li>
                                    </ul>

                            </div>
                    </section>
            </>
        )

}

export default Contact