import React from "react";

export default function Box(props) {
    return (
        <div className="box" onClick={props.clickFunc} style={{ background: props.bgColor }}></div>
    );
}