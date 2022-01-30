import React from 'react'

var stylingObject = {

    page: {
        display: "flex",
        left: "40%",
        position: "absolute",
        top: "20px",
        font: "normal normal normal 18px / 27px Poppins",
        letterSpacing: "0px",
        fontSize: "20px",
    },

    checked: {
        textDecorationLine: "underline", 
        color: "#282C7D",
    },
}

export default function Page() {
    return (
        <div style={stylingObject.page}>
            <p> About &nbsp;</p>
            <p> Plans &nbsp;</p>
            <p style={stylingObject.checked}> My Videos</p>
        </div>
    )
}