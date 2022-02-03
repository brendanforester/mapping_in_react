import React, { useState } from "react";
import Style from "./Style";

function Character(props){

const [showText, setShowText] = useState(false);
const onClick = () => setShowText(true);
// const [color]= React.useState("red");



    let movesEles = [props.moves].map((p , idx)=>
        <p key={idx}>{p}</p>
    )

    let tagsEles = [props.tags].map((p , idx)=>
        <p key={idx}>{p}</p>
    )

    let style = {
        backgroundColor: props.color
    }

    const Text = () =>
        <div>
            <p>My power is {props.power}{props.price}.</p>
        </div>

    return(

        <div style={{...Style.box, ...style}} className="pad" onClick={onClick}>
            <p className="bold">Name: {props.name}{props.nameTwo}</p>
            <p className="bold">Superpower: {props.power}{props.price}</p>
            <p className="bold">Age: {props.age}{props.weight}</p>
            <p className="bold">Special Moves:
                <div>{movesEles}</div>
                <div>{tagsEles}</div>
            </p>
            <div>{showText ? <Text /> : null}</div>
        </div>

    )



}



export default Character;