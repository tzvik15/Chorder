import React, {useState} from "react";
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
        <h4>Would you like to play with sounds or with theory?</h4>
        <button onClick={sound}>Sounds</button>
        <button onClick={theory}>Theory</button>
        </>
        :
        gameChoice.choice===true && gameChoice.sound===false ?
        <TheoryPlay />
        :
        <SoundPlay />
        
    )
}

export default Play;