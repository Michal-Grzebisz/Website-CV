import React, {useEffect, useRef, useState} from 'react'
import AOS from "aos";
import Work3D from "./work3d";
import { useOnClickGame } from "./hooks_work";
import { useOnClickGallery } from "./hooks_work";
import Gallery3d from "./gallery_3d";
import Game from "./work_game";
import GameContent from "./work_game_content";



const Work = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);


    const node = useRef();

    const [openGallery, setOpenGallery] = useState(false);
    useOnClickGallery(node, () => setOpenGallery(false));

    const [openGame, setOpenGame] = useState(false);
    useOnClickGame(node, () => setOpenGame(false));


    const changeWindowGame = () => {
        setOpenGame(true)
        setOpenGallery(false)

    }

    const changeWindowGallery = () => {
        setOpenGame(false)
        setOpenGallery(true)

    }


    return (
        <>
            <section data-aos="fade" id="section__work">
                <h1>Work</h1>
                <div ref={node} style={{display:"flex", justifyContent: "space-around",  flexWrap:"wrap"}}>
                    <Work3D open={openGallery} setOpen={changeWindowGallery}  />
                    <Game open={openGame} setOpen={changeWindowGame}  />
                    {openGallery === true ? <Gallery3d open={openGallery}/> : null}
                    {openGame === true ? <GameContent open={openGame}/> : null}
                    {/*<Gallery3d open={openGallery} setOpen={setOpenGallery} />*/}
                    {/*<GameContent open={openGame} setOpen={setOpenGame} />*/}
                </div>
            </section>
        </>
    )

}


export default Work
