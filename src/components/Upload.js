import React, { Children } from "react";
import { useState } from "react/cjs/react.development";


var stylingObject = {

    orangeUploadDiv: {
        width: "100%",
        height: "89px",
        borderRadius: "30px",
        margin: " 0 auto",
        marginTop: " 120px",
    }
}

export default function Upload(props) {

    const element = document.getElementById("div");

    function startDownloading() {
        if (props.count > 100) {
            clearInterval(id);
            props.setStart(!props.start);
            props.setCount(0);
        } else {
            props.setCount(props.count + 1)
            element.style.background = `linear-gradient(to right, #D76227 ${props.count}%, transparent 0)`;
        }
    }
    const id = setTimeout(startDownloading, 100);

    return (
        <div>
            {props.start ? null : <div id="div" style={stylingObject.orangeUploadDiv}></div>}
        </div>
    )
}