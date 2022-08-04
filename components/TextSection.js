import React from 'react';

export default function TextSection(props){
    return(
        <div className="textSection">
            <div className="sectionTitle">{props.title}</div>
            <div className="sectionText">{props.text}</div>
        </div>
    );
}