import React from 'react';
import { StyledMenu } from './menu-style';
import { bool } from 'prop-types';

const Menu = ({open}) => {
    return (
        <StyledMenu open={open}>
            <a href="#section__about" className="nav__link" style={{color:"black"}}>About</a>
            <a href="#section__experience" className="nav__link" style={{color: "black"}}>Experience</a>
            <a href="#section__work" className="nav__link" style={{color: "black"}} >Work</a>
            <a href="#section__contact" className="nav__link" style={{color: "black"}}>Contact</a>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;