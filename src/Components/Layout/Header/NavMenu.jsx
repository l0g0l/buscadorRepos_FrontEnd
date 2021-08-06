import githubblanca from '../../../Images/githubblanca.png';

import './navmenu.scss'

const NavMenu = (props) => {
    console.log(props)
    //Recibe por props toda la info. Dejo de renderizarlo en el layout y lo renderizo en Home junto con el Form, que son los dos componentes que van a utilizar los datos

    return (
        <div className="nav-container">
            <nav className="navclass" aria-label="Main Navigation" role="navigation">

                <ul className="header-list">
                    <li className="header-list-li">
                        <img src={props.ownerinfo.avatar_url} alt="avatar" />
                    </li>
                    <li className="header-list-li">
                        <a href={props.ownerinfo.html_url} target="_blank" rel="noreferrer" >
                            <img src={githubblanca} alt="github" />
                        </a>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default NavMenu
