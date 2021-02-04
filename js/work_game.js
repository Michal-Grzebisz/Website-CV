import React from 'react';
import { StyledGame } from "./work_game_style";
import { bool, func } from 'prop-types';





const Game = ({ open, setOpen}) => {


    return (
        <StyledGame open={open} onClick={() => setOpen(!open)}>
            <div><img src="images/gamepad.svg" alt="Cubes" width="300" height="300" /></div>
        </StyledGame>
    )
}

Game.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Game;