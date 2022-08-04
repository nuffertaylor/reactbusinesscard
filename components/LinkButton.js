import React from 'react';

export default function LinkButton(props){
    return(
    <div className="linkButtonRow">
      <div className={"linkButton linkButton" + props.type}>
        <div className="linkButtonIconWrapper">
          <img className={"linkButtonIcon linkButtonIcon" + props.type}/>
        </div>
        {props.type}
      </div>
    </div>
    );
}