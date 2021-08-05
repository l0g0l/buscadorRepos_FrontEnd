import React from 'react'

import Footer from "../../Components/Layout/Footer/Footer"
import NavMenu from "../../Components/Layout/Header/NavMenu"


import './layout.scss'

const Layout = ({children}) => {
    return (
        <div>
            <NavMenu/>
            <main>{children}</main>
            <Footer/>            
        </div>
    )
}

export default Layout
