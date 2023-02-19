import React from 'react'
import "../sassfiles/Gallery.sass"
import Imglist from '../Subcomponents/imglist';


function Imagegallery() {
    return (
       <div className="gallery">
        <div className="head">
            <h3>RECENT WORKS</h3>
            <h1>We Love what we do, check out some of our latest works</h1>
        </div>
        <Imglist/>
       </div>
      );
}

export default Imagegallery

