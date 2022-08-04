import React from "react"
import InfoContainer from './InfoContainer.js'

export default function InnerBox(){
    const avatarurl = "https://i.imgur.com/8KJEdne.jpg";
    const name = "Taylor Jonas";
    const subtitle = "Software Engineer";
    return(
        <div className="innerBox">
            <InfoContainer avatarurl={avatarurl} name={name} subtitle={subtitle}/>
        </div>
    )
}