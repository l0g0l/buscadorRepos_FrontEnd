import React, { useState } from "react";
import Diagram from "../../_All/Form/Diagram";

import "./home.scss";

const Home = () => {
    const iconSmallBallAccessTimeIcon = "AccessTimeIcon",
        iconSmallBallBrightness5OutlinedIcon = "Brightness5OutlinedIcon",
        iconSmallBallTaskAltOutlinedIcon = "TaskAltOutlinedIcon",
        //he puesto cualquiera, no sé cual es exactamente
        iconSmallBallPhoneEnabledOutlinedIcon = "PhoneEnabledOutlinedIcon";

    const textBigBall = "Notas";

    const [bigBall, setBigBall] = useState([textBigBall]);
    const [smallBall, setSmallBall] = useState([
        iconSmallBallAccessTimeIcon,
        iconSmallBallBrightness5OutlinedIcon,
        iconSmallBallTaskAltOutlinedIcon,
        iconSmallBallPhoneEnabledOutlinedIcon,
    ]);

    return (
        <div className="container-balls-diagram">
            <Diagram bigball={bigBall} smallball={smallBall} />
        </div>
    );
};

export default Home;
