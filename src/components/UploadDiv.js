import React, { useState } from 'react'
import UploadInfoWindow from './UploadInfoWindow'
import UploadWindow from './UploadWindow'


export default function UploadDiv() {

    const [hideOrShow, setHideOrShow] = useState("false")

    return (
        <div>
            {!hideOrShow ? <UploadWindow setHideOrShow={setHideOrShow} /> : <UploadInfoWindow hideOrShow={hideOrShow} setHideOrShow={setHideOrShow} />}
        </div>
    )
}
