import React from 'react';
import { StyledBurger } from './burger-style';
import { bool, func } from 'prop-types';





const Burger = ({ open, setOpen, show }) => {


    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)} show={show}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};


export default Burger;