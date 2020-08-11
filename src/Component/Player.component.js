import React from 'react';
import './Player.styles.css';
import Sidebar from './Sidebar.component.js';
import Body from './Body.component.js';
import Footer from './Footer.component.js';



function Player({spotify}) {
    return (
        <div className='player'>
            <div className='player_body'>
                <Sidebar />
                <Body />
            </div>
        
         <Footer />
        </div>
    )
}

export default Player;