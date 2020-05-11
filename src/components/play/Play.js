import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./play.css";
import SoundPlay from "../soundPlay/SoundPlay";
import TheoryPlay from "../theoryPlay/TheoryPlay";






const Play =()=> {

    const [gameChoice, setGameChoice] = useState({
        choice:false,
        sound:false
    })

    const sound=()=> {
        setGameChoice({choice:true, sound:true})
    }

    const theory=()=> {
        setGameChoice({choice:true, sound:false})
    }


    return (
        gameChoice.choice===false?
        <>
        <h4 className ="title">Would you like to play with sounds or with theory?</h4>
        <button className ="btn-hover colorSound"  onClick={sound}>Sounds</button>
        <button className ="btn-hover colorTheory"  onClick={theory}>Theory</button>
        <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
        </>
        :
        gameChoice.choice===true && gameChoice.sound===false ?
        <TheoryPlay />
        :
        <SoundPlay />
        
    )
}

export default Play;



