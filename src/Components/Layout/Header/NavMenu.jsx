import React from 'react';
import githubblanca from '../../../Images/githubblanca.png';
import usuario2 from '../../../Images/usuario2.png';


import './navmenu.scss'

const NavMenu = () => {
    return (
        <div className="nav-container">
            <nav className="navclass">

                <ul className="header-list">
                <li className="header-list-li">
                        <a href="#" >
                            <img src={usuario2} alt="avatar" />
                        </a>
                    </li>
                    <li className="header-list-li">
                        <a href="https://github.com/l0g0l" target="_blank" rel="noreferrer" >
                            <img src={githubblanca} alt="github" />
                        </a>
                    </li>

                </ul>

            </nav>

        </div>
    )
}

export default NavMenu
