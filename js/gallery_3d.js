import React from 'react';
import { bool } from 'prop-types';
import Gallery from 'react-grid-gallery';
import {StyledGallery3d} from "./gallery_3d_style";

const Gallery3d = ({open}) => {
    return (
        <StyledGallery3d open={open}>
            <Gallery images={images} rowHeight={window.innerWidth < 790 ? 150 : 250} enableImageSelection={false} />
        </StyledGallery3d>
    )
}

Gallery3d.propTypes = {
    open: bool.isRequired,
}

export default Gallery3d;


const images = [

    {
        src: "images/work_images/BIG/INT_04.jpg",
        thumbnail: "images/work_images/SMALL/INT_04.jpg",
        customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "The Digital Bunch"

    },
    {
        src: "images/work_images/BIG/INT_05.jpg",
        thumbnail: "images/work_images/SMALL/INT_05.jpg",
        customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "The Digital Bunch"

    },
    {
        src:"images/work_images/BIG/INT_06.jpg",
        thumbnail: "images/work_images/SMALL/INT_06.jpg",
        customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "The Digital Bunch"

    },  {
        src: "images/work_images/BIG/INT_07.jpg",
        thumbnail: "images/work_images/SMALL/INT_07.jpg",
        customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "The Digital Bunch"

    },
    {
        src: "images/work_images/BIG/INT_08.jpg",
        thumbnail: "images/work_images/SMALL/INT_08.jpg",
        customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "The Digital Bunch"

    },
    {
        src: "images/work_images/BIG/INT_09.jpg",
        thumbnail: "images/work_images/SMALL/INT_09.jpg",
        customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "The Digital Bunch"
    },
    {
        src: "images/work_images/BIG/EXT_01.jpg",
        thumbnail: "images/work_images/SMALL/EXT_01.jpg",
        customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "The Digital Bunch"

    },
    {
        src: "images/work_images/BIG/INT_01.jpg",
        thumbnail: "images/work_images/SMALL/INT_01.jpg",
        customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
        thumbnailWidth: 320,
        thumbnailHeight: 190,
        caption: "The Digital Bunch"
    },
    // {
    //     src: "images/work_images/BIG/INT_02.jpg",
    //     thumbnail: "images/work_images/SMALL/INT_02.jpg",
    //     customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
    //     thumbnailWidth: 320,
    //     thumbnailHeight: 190,
    //
    // },
    // {
    //     src: "images/work_images/BIG/INT_03.jpg",
    //     thumbnail: "images/work_images/SMALL/INT_03.jpg",
    //     customOverlay: <div style={{height:"100%", width:"100%", backgroundColor:"rgba(0, 0, 0, 0.4)"}}/>,
    //     thumbnailWidth: 320,
    //     thumbnailHeight: 190,
    // },




]


