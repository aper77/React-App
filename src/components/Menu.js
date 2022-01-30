import React from 'react';
import Page from './Page';

var stylingObject = {
    div: {
        top: "33px",
        left: "55px",
        width: "1279px",
        height: "45px",
        opacity: "1",
        position: "relative",
    },

    vanGuard: {
        border: "1px solid rgb(141 141 141)",
        borderRadius: "25px",
        width: "45px",
        height: "45px",
        display: "inline-block",
    },

    span: {
        display: "inline-block",
        width: "128px",
        height: "35px",
        textAlign: "center",
        font: "normal normal normal 25px / 38px Poppins",
        letterSpacing: "0px",
        color: "#707070",
        opacity: "1",
        position: "absolute",
    },

    account: {
        border: "1px solid #282C7D",
        borderRadius: "25px",
        float: "right",
        display: "inline-block",
        width: "140px",
        height: "45px",
        textAlign: "center",
        font: "normal normal normal 18px / 27px Poppins",
        letterSpacing: "0px",
        color: "#282C7D",
        opacity: "1",
        fontSize: "20px",
        padding: "7px",
        left: "90%",
        top:"12px",
        position: "absolute",
    }
}

export default function Menu() {
    return (
        <div style={stylingObject.div}>
            <div style={stylingObject.vanGuard}></div><a style={stylingObject.span}>VanGuard</a>
            <Page/>
            <div style={stylingObject.account}>My Account</div>
        </div>
    )
}