import React from "react";

var stylingObject = {

    uploadDiv: {
        width: "1091px",
        height: "377px",
        display: "inline - block",
        margin: " 0 auto",
        padding: "3px",
        marginTop: "100px",
        borderStyle: "dotted",
        border: "2px dotted #D76227",
        borderRadius: "30px",
    },

    dragDrop: {
        color: "#282C7D",
        marginLeft: "7%",
    },

    orange: {
        color: "#D76227",
    },

    textDiv: {
        margin: " 0 auto",
        marginTop: "160px",
        marginLeft: "35%",
    },

    browse: {
        margin: " 0 auto",
        marginLeft: "30%",
        fontSize: "30px",
        color: "#282C7D",
    },

    firstP: {
        marginLeft: "3%",
        color: "#282C7D",
    },

    secondP: {
        marginLeft: "10%",
        color: "#282C7D",
    }
}

export default function UploadInfoWindow(props) {

    function setHideInfoWindow() {
        props.setHideOrShow(!props.hideOrShow)
    }

    return (
        <div onClick={setHideInfoWindow} style={stylingObject.uploadDiv}>
            <div style={stylingObject.textDiv}>
                <h3 style={stylingObject.dragDrop}>Drag and Drop <a style={stylingObject.orange}> video</a> file</h3>
                <p style={stylingObject.firstP}>Support formats:mp4,mkv,mov,miv <br /><p style={stylingObject.secondP}>Max file size:250MB</p></p>
            </div>
            <h6 style={stylingObject.browse}>Or <a style={stylingObject.orange}> browse a file </a> on your coputer</h6>
        </div>
    )
}