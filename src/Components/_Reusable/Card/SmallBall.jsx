import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";

import "./smallball.scss";

const SmallBall = (props) => {
    console.log(props);
    return (
        <>
            {props.smallball === "AccessTimeIcon" ? (
                <div class="ballAccessTimeIcon">
                    <AccessTimeIcon fontSize="large" />
                </div>
            ) : null}
            {props.smallball === "Brightness5OutlinedIcon" ? (
                <div class="ballBrightness5OutlinedIcon">
                    <Brightness5OutlinedIcon fontSize="large" />
                </div>
            ) : null}
            {props.smallball === "TaskAltOutlinedIcon" ? (
                <div class="ballTaskAltOutlinedIcon">
                    <TaskAltOutlinedIcon fontSize="large" />
                </div>
            ) : null}
            {props.smallball === "PhoneEnabledOutlinedIcon" ? (
                <div class="ballPhoneEnabledOutlinedIcon">
                    <PhoneEnabledOutlinedIcon fontSize="large" />
                </div>
            ) : null}
        </>
    );
};

export default SmallBall;
