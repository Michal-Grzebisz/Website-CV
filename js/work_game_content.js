import React from 'react';
import { bool } from 'prop-types';
import { StyledGameContent} from "./work_game_content_style";

const GameContent = ({open}) => {
    return (
        <StyledGameContent open={open}>
            <p><a href="https://michal-grzebisz.github.io/Flappy_Bird/" target="_blank" style={{color:"grey", textDecoration:"none"}}>Flappy Bird</a></p>
            <p><a href="https://michal-grzebisz.github.io/good_hands/" target="_blank" style={{color:"grey", textDecoration:"none"}}>Good Hands</a></p>
        </StyledGameContent>
    )
}

GameContent.propTypes = {
    open: bool.isRequired,
}

export default GameContent;