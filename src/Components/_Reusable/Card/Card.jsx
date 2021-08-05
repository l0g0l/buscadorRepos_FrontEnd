import React from 'react'


import './card.scss'

const Card = (props) => {
    return (
        <div className="card">

            <div className="cardtxt">
            <div>
                    <p className="encabezado">Repository Owner:</p>
                    <p className="txt">{props.apidata.owner.login}</p>

                </div>
                <div>
                    <p className="encabezado">Repository Name:</p>
                    <p className="txt">{props.apidata.name}</p>

                </div>
              
            </div>

        </div>


    )
}

export default Card
