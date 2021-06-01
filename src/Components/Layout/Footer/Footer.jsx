import React from 'react';
import corazon2 from '../../../Images/corazon2.png'


import './footer.scss'


const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer">
                <div>
                    <span className="footer-txt">Mi primer <a href="https://nuwe.io/" target="_blank"><i>Hackathon</i></a> hecho con mucho</span>

                </div>
                <div className="corazon-container">
                    <img src={corazon2} alt="corazon" className="footer-icon" />

                </div>
            </div>
        </div>


    )
}

export default Footer
