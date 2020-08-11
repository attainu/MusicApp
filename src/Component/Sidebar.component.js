import React from 'react';
import './Sidebar.styles.css'
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function Sidebar() {
    return (
        <div className='sidebar'>
               <img classname='sidebar_logo' src='data:image/jpeg;base64,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' alt='logo'></img>

            <SidebarOption Icon={HomeIcon} title='Home' />   
            <SidebarOption Icon={SearchIcon} title='Search' />   
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />   
            <br/>
            <strong className='sidebar_title'>PLAYLIST</strong>
        <hr/>
        </div>
    )
}

export default Sidebar