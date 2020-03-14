import React, { useGlobal } from 'reactn';
import './index.css';
const ProfileMenu = () => {
    const [ loggedInUserData ] = useGlobal('loggedInUserData');
    const [ menuOpen, setMenuOpen ] = useGlobal('profileMenuState');

    return ( 
        <div style={{animationDuration: '0.2s'}} className={`profile-menu-root animated ${menuOpen ? 'slideInRight': 'menu-closed slideOutRight'}`}>
            <div className='menu-close'>
                <div onClick={() => setMenuOpen(!menuOpen)}>
                <i class="far fa-times-circle"></i>
                </div>
                <p>{loggedInUserData[0].firstName}</p>
            </div>
            <div className='menu-content'>
                <p>Item one</p>
                <p>Item two</p>
                <p>Item three</p>
                <p>Item four</p>
            </div>
        </div>
     );
}
 
export default ProfileMenu;