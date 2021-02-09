import React from 'react';
import { Styled3D } from "./work3d_style";
import { bool, func } from 'prop-types';





const Work3D = ({ open, setOpen}) => {


    return (
        <Styled3D open={open} onClick={() => setOpen(!open)}>
            <div style={{marginBottom:"10px"}}>Gallery</div>
            <div><img src="images/cubes.svg" alt="Cubes" width="300" height="300" /></div>
        </Styled3D>
    )
}

Work3D.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Work3D;