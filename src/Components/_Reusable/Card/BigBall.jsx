import React from "react";

import "./bigball.scss";

const BigBall = (props) => {
    console.log(props);
    return (
        <div className="bigball">
            <p className="txt">{props.bigball}</p>
        </div>
    );
};

export default BigBall;
