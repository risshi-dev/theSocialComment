import React from 'react'
import './Horizontal.css'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
function Horizantal() {
    return (
        <div className="horizontal">
        <div className="horizontal_headers"  >
                <div className="horizontal-headercontent">
                    <div className="text" >Great things never come from comfort zones.</div>
                    <div className="horplay"><PlayCircleFilledIcon style={{fontSize:"40px"}}/></div> </div>
                <div className="horizontal-headercontent">  <div className="text" >Dream It.<br />Wish It.<br />Do it.</div></div>
        </div>
        <div className="horizontal-content"> <div className="text_wide" >Stay<br />Focused.<br />
                <button>Play All</button></div> </div>
        <div className="horizontal-content"> </div>
        <div className="horizontal-content"> </div>
        <div className="horizontal-content"> </div>
    </div>
    )
}

export default Horizantal
