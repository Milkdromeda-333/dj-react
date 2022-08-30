import React from 'react';
import Box from "./Box.js";
import Button from "./Button.js"

export default function App() {

    // Array of colors used for the background color of the Box component
    const [color, setColor] = React.useState([
        "white",
        "white",
        "white",
        "white"]);
        
    //  SMOL DJ handler: when called, checks to see what the color is and turns it another color based on the previous value
    function handleClick1() {
        setColor(prevColor => { if(prevColor[0] === "white"){ return [
        "black",
        "black",
        "black",
        "black"]
        } else {  
            return [
            "white",
            "white",
            "white",
            "white"]
            }
         }
        );
    }
    
    // PARTY DJ handler: turns the top two boxes purple
    function handleClick2(){
        setColor( prevColor => {return [
            "purple",
            "purple",
            prevColor[2],
            prevColor[3]
        ]}
        );
    }
    
    // LEFT BLUE handler: turns the left bottom box blue
    function handleClick3(){
        setColor(prevColor => {return [
            prevColor[0],
            prevColor[1],
            "blue",
            prevColor[3]
        ]}
        );
    }
    
    // RIGHT BLUE handler: turns the right bottom box blue
    function handleClick4(){
        setColor(prevColor => {return [
            prevColor[0],
            prevColor[1],
            prevColor[2],
            "blue"
        ]}
        );
    }
    
    // BIG TIME's 1 handler: turns the right bottom box blue
    function handleClick5(){
        setColor(prevColor => {return [
            "linear-gradient(90deg, hsla(265, 53%, 29%, 1) 0%, hsla(24, 93%, 73%, 1) 100%)",
            prevColor[1],
             prevColor[2],
            "linear-gradient(90deg, hsla(35, 79%, 68%, 1) 0%, hsla(286, 44%, 49%, 1) 100%)"
        ]}
        );
    }
    
    // BIG TIME's 1 handler: turns the right bottom box blue
    function handleClick6(){
        setColor(prevColor => {return [
            prevColor[0],
            "linear-gradient(90deg, hsla(35, 79%, 68%, 1) 0%, hsla(286, 44%, 49%, 1) 100%)",
            "linear-gradient(90deg, hsla(265, 53%, 29%, 1) 0%, hsla(24, 93%, 73%, 1) 100%)",
            prevColor[3]
        ]}
        );
    }
    
    // returns an array of Box components
    let acc = 0 ;
    const boxes = color.map((currentColor) => 
    {
        return (
            <Box bgColor={currentColor} />

        );
    });
    

    return (
        <div>
            <div className="box--container">
                 {boxes}
            </div>
            <div className="buttons--container">
                    <Button handlerFunc={handleClick1} buttonText="Smol DJ" />
                    <Button handlerFunc={handleClick2} buttonText="Party DJ" /> 
                    
                    
                    <Button handlerFunc={handleClick3} buttonText="Blue Left" />
                    <Button handlerFunc={handleClick4} buttonText="Blue Right" />
                    
                    
                    <Button handlerFunc={handleClick5} buttonText="1" />
                    <Button handlerFunc={handleClick6} buttonText="2" />
                 </div>
        </div>
    );
}
/*
TODO:
dynamically render the buttons and pas in the onclick function as a prop?

NOTES:
*/