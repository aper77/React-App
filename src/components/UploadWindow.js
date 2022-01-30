import React, { useState } from 'react'
import StartUplading from './StartUploading'
import Upload from './Upload'
import UploadingItems from './UploadingItems'

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
        position: "absolute",
        left: "170px",
        top: "81px",
    },

    orangeUploadDiv: {
        width: "493px",
        height: "89px",
        background: "#D76227 0% 0% no-repeat padding-box",
        borderRadius: "30px",
        backgroundColor: "#D76227",
        margin: " 0 auto",
        marginTop: " 120px",
    },

    h1: {
        color: "white",
        margin: "125px",
        paddingTop: "20px",
    },

    closeButton: {
        backgroundColor: "#D76227",
        color: "white",
        position: "absolute",
        width: "43px",
        height: "29px",
        left: "95%",
        borderRadius: "20px",
        borderColor: "white",
    },
}

export default function UploadWindow(props) {

    const [start, setStart] = useState("false")
    const [count, setCount] = useState(0);


    function closeUploadWindow() {
        props.setHideOrShow(true)
    }

    return (
        <div style={stylingObject.uploadDiv}>
            <button onClick={closeUploadWindow} style={stylingObject.closeButton}>X </button>
            <div>   {start ? <StartUplading start={start} setStart={setStart} /> : <Upload start={start} setStart={setStart} count={count} setCount={setCount} />}</div>
            <UploadingItems count={count} setCount={setCount} />
        </div >
    )
}