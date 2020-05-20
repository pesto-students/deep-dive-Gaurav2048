import React from "react";

const Tooltip = ({ point }) => {
    return <div style={{
        color: "white",
        backgroundColor: "black",
        fontSize: "8px",
        padding: "6px",
        display: !point.show ? "none" : "",
        left: point.dispX,
        top: point.dispY,
        position: 'absolute',
        width: "100px",
        height: "30px"
    }} >
        {` x value: ${point.xval} \n y Value: ${point.yval} `}
    </div>
}

export default Tooltip;