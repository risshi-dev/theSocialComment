import React from 'react'
import './Sidebar.css'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Avatar } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
function Sidebar() {
    return (
        <div className="main_sidebar">
            <div className="side">
            <div id="logo">B</div>
            <div id="avatar">
                <div className="avatar"><Avatar style={{backgroundColor:'#ff0062', color:"#fff", fontWeight:'600'}} >H</Avatar> </div>
                <div><div id="name">Harshad Mehta</div>
                <div id="email">hardhadmehta@gmail.com</div></div>
            </div>
            <div>
                      
                          <div className="categ">Motivation</div>
                          <div id="group"><div className="categ">Productivity</div> <button >Search</button></div>
                          
                          <div className="categ">Design</div>
                          <div className="categ">Study</div>
                      
            </div>
            <div className="add"><div><AttachMoneyIcon style={{color:"#ff0091",fontWeight:"100"}} /></div>
            <div>Pro account is more<br /> powerful. Get at 30% off</div><div><button>Buy Now</button></div></div>
            <div id="login">Logout</div></div>
            <div id="add"><AddCircleIcon style={{fontSize:"50px",color:"#ff0091"}} /></div></div>
           
            
        
    )
}

export default Sidebar
