import React, { useState } from "react";
import BigBall from "../../_Reusable/Card/BigBall";
import SmallBall from "../../_Reusable/Card/SmallBall";

import "./diagram.scss";

export default function Diagram(props) {
    console.log(props);

    return (
        <>
            <div class="bigball-group">
                <div className="diagram-container-bigball">
                    {props.bigball.map((item, i) => (
                        <BigBall bigball={item} key={i} />
                    ))}
                </div>
            </div>
            <div class="smallball-group">
                <div className="diagram-container-smallball">
                    {props.smallball.map((item, i) => (
                        <SmallBall smallball={item} key={i} />
                    ))}
                </div>
            </div>
        </>
    );
}
<div></div>;
