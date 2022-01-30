import React from 'react';

var stylingObject = {

    orangeUploadDiv: {
        width: "493px",
        height: "89px",
        background: "#D76227 0% 0% no-repeat padding-box",
        borderRadius: "30px",
        backgroundColor: "#D76227",
        margin: " 0 auto",
        marginTop: " 120px",
        cursor: "pointer",
    },

    h1: {
        color: "white",
        margin: "125px",
        paddingTop: "20px",
    },
}

export default function StartUplading(props) {

    function closeUploadingButton() {
        props.setStart(!props.start)
    }

    return (
        <div onClick={closeUploadingButton} style={stylingObject.orangeUploadDiv}><h1 style={stylingObject.h1}>Start Uploading</h1></div>
    )
}