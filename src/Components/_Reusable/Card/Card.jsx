import React from 'react'


import './card.scss'

const Card = (props) => {
    return (
        <div className="card">

            <div className="cardtxt">
                <div>
                    <h2 className="encabezado">Repository Owner:</h2>
                    <p className="txt">{props.apidata.owner.login}</p>

                </div>
                <div>
                    <h2 className="encabezado">Repository Name:</h2>
                    <p className="txt">{props.apidata.name}</p>

                </div>

            </div>

        </div>


    )
}

export default Card
