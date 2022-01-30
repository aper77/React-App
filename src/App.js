import React, { Component } from 'react';
import Main from './components/Main';

var stylingObject = {
    div: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fafafa ",
        display: "block",
        position: "absolute",
    }
}

export default function App() {
    return (
        <div style={stylingObject.div}>
            <Main />
        </div>
    )
}
