import React from "react";
import { useState } from "react/cjs/react.development";

var stylingObject = {

    div: {
        height: "90px",
        backgroundColor: "#D76227",
        marginLeft: "30px",
        marginTop: "70px",
        backgroundColor: "transparent",
    },

    orangeTd: {
        color: "#D76227",
    },
    span: {
        backgroundColor: "#D76227",
        color: "white",
        position: "absolute",
        width: "20px",
        height: "20px",
        borderRadius: "20px",
        borderColor: "white",
    },

    spanTwo: {
        backgroundColor: "#transparent",
        border: "1px solid #D76227",
        position: "absolute",
        width: "20px",
        height: "20px",
        borderRadius: "20px",
        borderColor: "#D76227",
    },
}

export default function UploadingItems(props) {
    const [firstClass, setFirstClass] = useState("")
    return (
        <div style={stylingObject.div}>
            <table>
                <tr>
                    <td>Duration</td>
                    <td style={stylingObject.orangeTd}>: 123Mb</td>
                    {(() => {
                        if (props.count < 30) {
                            return (
                                <span style={stylingObject.spanTwo}></span>
                            )
                        } else {
                            return (
                                <span style={stylingObject.span}></span>
                            )
                        }
                    })()}
                </tr>
                <tr>
                    <td>File format</td>
                    <td style={stylingObject.orangeTd}>: mp4</td>
                    {(() => {
                        if (props.count < 60) {
                            return (
                                <span style={stylingObject.spanTwo}></span>
                            )
                        } else {
                            return (
                                <span style={stylingObject.span}></span>
                            )
                        }
                    })()}
                </tr>
                <tr>
                    <td>Video Codec</td>
                    <td style={stylingObject.orangeTd}>: VP9</td>
                    {(() => {
                        if (props.count < 80) {
                            return (
                                <span style={stylingObject.spanTwo}></span>
                            )
                        } else {
                            return (
                                <span style={stylingObject.span}></span>
                            )
                        }
                    })()}
                </tr>
                <tr>
                    <td>Audio Codec</td>
                    <td style={stylingObject.orangeTd}>: pcmu</td>
                    {(() => {
                        if (props.count < 100) {
                            return (
                                <span style={stylingObject.spanTwo}></span>
                            )
                        } else {
                            return (
                                <span style={stylingObject.span}></span>
                            )
                        }
                    })()}
                </tr>
            </table>
        </div>
    )
}