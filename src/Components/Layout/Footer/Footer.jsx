import React from 'react';
import corazon2 from '../../../Images/corazon2.png'



import './footer.scss'


const Footer = () => {

    return (
        <footer className="footer-container" role="contentinfo">
            <div className="footer">
                <div>
                    <span className="footer-txt">Mi primer <a href="https://discord.com/invite/7Q6UDvaBAz" target="_blank" rel="noreferrer" ><i>Hackathon</i></a> hecho con mucho</span>

                </div>
                <div className="corazon-container">
                    <div>
                        <img src={corazon2} alt="corazon" className="footer-icon" />

                    </div>



                </div>

            </div>
           
        </footer>


    )
}

export default Footer
