import React from "react"
import Avatar from "./Avatar.js"
import LinkButton from "./LinkButton.js"
import TextSection from "./TextSection.js"


export default function InfoContainer(props){
    return(
        <div className="infoContainer">
            <Avatar srcurl={props.avatarurl} />
            <div className="name">{props.name}</div>
            <div className="subtitle">{props.subtitle}</div>
            <div className="websiteLinkContainer">
                <a className="websiteLink" href="www.example.com">example.com</a>
            </div>
            <div className="linkButtonRow">
                <LinkButton type="Email"/>
                <LinkButton type="LinkedIn"/>
            </div>
            <TextSection title="About Me" text="How many people do you know that have beaten Paper Mario: The Thousand Year door six times in a row straight with no bathroom breaks? None? well now you know one." />
            <TextSection title="Interests" text="You 😘. Also your mom 🤤" />
            <div className="socialsSection">
                 <img className="githubLogo socialLogo"/>
            </div>
        </div>
    );
}