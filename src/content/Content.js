import React from 'react'
import './Content.css'
import Vertical from './Vertical'
import Horizontal from './Horizantal'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
function Content() {
    return (
        <div className="main_content">
            <div className="main_content_header">  <div style={{fontSize:"26px",fontWeight:"700"}}>Motivation</div> <div> <AddCircleOutlineIcon style={{fontSize:"40px",cursor:"pointer",color:"rgb(255, 0, 85)"}}/></div></div>
            <div className="categories"> 
            <div>All</div>
            <div>Article</div>
            <div>Podcast</div>
            <div>Video</div>
            <div>Downloads</div>
            <div>Play All</div>
            </div>
  <div className='content'><Vertical />
            <Horizontal />  </div>


        </div>
    )
}

export default Content