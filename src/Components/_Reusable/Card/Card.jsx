import React from 'react'

import carrot from '../../../Images/carrot.svg'

import './card.scss'

const Card = (props) => {
    return (
        <div className="card">

            <div className="cardtxt">
                <div>
                    <p className="encabezado">Repository Name:</p>
                    <p className="txt">{props.apidata.name}</p>

                </div>
                <div>
                    <p className="encabezado">Repository id:</p>
                    <p className="txt">{props.apidata.id}</p>

                </div>
            </div>

        </div>


    )
}

export default Card
