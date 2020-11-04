import React from 'react'
import './Vertical.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
function Vertical() {
    return (
        <div className="vertical">
            <div className="vertical-content"><div className="text_vertical">Your Imagination<br /> it's only<br /> your<br /> imagination</div><div className="playicon"> <PlayCircleFilledIcon style={{fontSize:"40px"}} /></div> </div>
            <div className="vertical-content"><div className="playicon"> <PlayCircleFilledIcon style={{fontSize:"40px"}} /></div>  </div>
            <div className="vertical-content"><div className="playicon"> <PlayCircleFilledIcon style={{fontSize:"40px"}} /></div>  </div>
        </div>
    )
}

export default Vertical
