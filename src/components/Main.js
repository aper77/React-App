import React, { useState } from 'react';
import Menu from './Menu';
import UploadDiv from './UploadDiv';
import UploadWindow from './UploadWindow';

var stylingObject = {
    div: {
        width: "1366px",
        height: "768px",
        background: "#ffffff",
        opacity: "1",
        border: "1px solid",
        borderStyle: "groove",
        margin: "auto",
        marginTop: "35px",
    },
}

export default function Main() {
    return (
        <div style={stylingObject.div}>
            <Menu />
            <UploadDiv />
        </div>
    )
}
