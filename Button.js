import React from "react"

export default function Button(props){
    return(
            <button onClick={props.handlerFunc} className="button">
                {props.buttonText}
            </button>
    )
}