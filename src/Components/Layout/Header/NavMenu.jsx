import React from 'react';
import linkedin from '../../../Images/linkedin.png';
import github from '../../../Images/github.png';

import './navmenu.scss'

const NavMenu = () => {
    return (
        <div className="nav-container">
            <nav className="navclass">

                <ul className="header-list">
                    <li className="header-list-li">
                        <a href="https://github.com/l0g0l" target="_blank">
                            <img src={github} alt="github" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/luciagonzalezlara/" target="_blank">
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </li>
                  

                </ul>

            </nav>

        </div>
    )
}

export default NavMenu
