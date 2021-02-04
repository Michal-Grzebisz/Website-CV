import React, {useEffect} from 'react'
import AOS from "aos";

const Education = [
    {
        year: "09/2009 – 05/2012" ,
        name: "X Liceum Ogólnokształcące im. Królowej Jadwigi w Warszawie"
    },
    {
        year: "10/2013 – 07/2017" ,
        name: "Szkoła Główna Gospodarstwa Wiejskiego studia inżynierskie I stopnia Gospodarka Przestrzenna"
    },
    {
        year: "10/2017 – do 07/2019" ,
        name: "Szkoła Główna Gospodarstwa Wiejskiego studia magisterskie II stopnia Gospodarka Przestrzenna"
    },
    {
        year: "03/2016" ,
        name: "Kurs Autodesk 3DS MAX Stopień I"
    },
    {
        year: "11/2016" ,
        name: "Kurs Autodesk 3DS MAX Stopień II"
    }
]

const Work = [
    "07/2015 – 12/2015 Firma Komers Sp. z o.o.",
    "08/2016 Praktyki studenckie w urzędzie gminy Belsk Duży",
    "10/2017 – 11/2017 The Metropolitan Architektura Wnętrz ",
    "07/2018 – 09/2018 Biuro architektoniczne Dominika J. Rostocka ∙ tworzenie wizualizacji wnętrz 3d"
]


// ∙ tworzenie wizualizacji wnętrz 3d
// ∙ nanoszenie poprawek na projekty w programie AutoCAD

const Experience = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <>
            <section id="section__experience">
                <p className="experience__p" data-aos="fade">Experience</p>
                <div  className="experience" >
                    <div className="experience__education">
                        <p className="experience__education__p" data-aos="fade-down">Education</p>
                        <ul data-aos="fade-right">
                            {
                                Education.map((item) => <li><span style={{fontWeight:"bold"}}>{item.year}</span> - {item.name} </li>)
                            }
                        </ul>
                    </div>
                    <div className="experience__work" >
                        <p className="experience__work__p" data-aos="fade-up">Work Experience</p>
                        <ul data-aos="fade-left">
                            <li><span style={{fontWeight:"bold"}}>07/2015 – 12/2015</span> - Firma Komers Sp. z o.o. </li>
                                <ul>
                                    <li >∙ tworzenie projektów domków wielorodzinnych w 2D</li>
                                    <li>∙ inwentaryzacja ulic na potrzeby przebudowy</li>
                                    <li>∙ kompletowanie dokumentacji do projektów</li>
                                    <li>∙ nanoszenie zmian na projekty zgodnie z Prawem Budowlanym</li>
                                </ul>
                            <li><span style={{fontWeight:"bold"}}>08/2016</span> - Praktyki studenckie w urzędzie gminy Belsk Duży</li>
                            <li><span style={{fontWeight:"bold"}}>10/2017 – 11/2017</span> - The Metropolitan Architektura Wnętrz</li>
                            <ul>
                                <li>∙ tworzenie wizualizacji wnętrz 3d</li>
                                <li>∙ nanoszenie poprawek na projekty w programie AutoCAD</li>
                            </ul>
                            <li><span style={{fontWeight:"bold"}}>07/2018 – 09/2018</span> - Biuro architektoniczne Dominika J. Rostocka
                                <ul>
                                    <li>∙ tworzenie wizualizacji wnętrz 3d</li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Experience
