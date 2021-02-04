import React from 'react';
import { bool } from 'prop-types';
import { StyledGameContent} from "./work_game_content_style";

const GameContent = ({open}) => {
    return (
        <StyledGameContent open={open}>
            <span> Game link url...</span>
        </StyledGameContent>
    )
}

GameContent.propTypes = {
    open: bool.isRequired,
}

export default GameContent;