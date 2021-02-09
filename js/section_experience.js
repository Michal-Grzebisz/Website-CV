import React, {useEffect} from 'react'
import AOS from "aos";

const Education = [
    {
        year: "09/2009 – 05/2012" ,
        name: "High school of general education of Queen Jadwiga in Warsaw."
    },
    {
        year: "10/2013 – 07/2017" ,
        name: "Warsaw University of Life Sciences, first degree engineering studies in Spatial Management."
    },
    {
        year: "10/2017 – do 07/2019" ,
        name: "Warsaw University of Life Sciences, Master's degree studies, 2nd degree Spatial Management."
    },
    {
        year: "03/2016" ,
        name: "Autodesk Course 3DS MAX Grade 1"
    },
    {
        year: "11/2016" ,
        name: "Autodesk Course 3DS MAX Grade 2"
    },
    {
        year: "09/2020 - 03/2021",
        name: "„Frontend” Programming course at Coders Lab"
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
                                Education.map((item) => <li><h3 style={{fontWeight:"bold"}}>{item.year}</h3> <span>{item.name}</span> </li>)
                            }
                        </ul>
                    </div>
                    <div className="experience__work" >
                        <p className="experience__work__p" data-aos="fade-up">Work Experience</p>
                        <ul data-aos="fade-left">
                            <li><h3 style={{fontWeight:"bold"}}>07/2015 – 12/2015</h3>Komers Sp. z o.o. </li>
                                <ul className="work-list">
                                    <li>∙ creating projects of multi-family houses in 2D</li>
                                    <li>∙ cataloguing streets for the need of reconstruction</li>
                                    <li>∙ completing documentation for projects</li>
                                    <li>∙ applying changes to projects in accordance with the Construction Law</li>
                                </ul>
                            <li><h3 style={{fontWeight:"bold"}}>08/2016</h3>Student internships at the Belsk Duży commune office</li>
                            <li><h3 style={{fontWeight:"bold"}}>10/2017 – 11/2017</h3>The Metropolitan Interior design</li>
                            <ul className="work-list">
                                <li>∙ creating 3d interior visualization</li>
                                <li>∙ applying corrections to projects in AutoCAD</li>
                            </ul>
                            <li><h3 style={{fontWeight:"bold"}}>07/2018 – 09/2018</h3> Dominik J. Rostock's architectural office
                                <ul className="work-list">
                                    <li>∙ creating 3d interior visualization</li>
                                </ul>
                            </li>
                            <li><h3 style={{fontWeight:"bold"}}>od 06/2019</h3> The Digital Bunch
                                <ul className="work-list">
                                    <li>∙ creating interior, exterior and product visualizations</li>
                                    <li>∙ 3D solid modeling</li>
                                    <li>∙ verification of documentation received from clients</li>
                                    <li>∙ participation in competition projects</li>
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
