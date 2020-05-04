import React, {useState} from "react";
import "./theoryPlay.css";
import Build from "../build/Build"
import Recognize from "../recognize/Recognize"

const TheoryPlay=()=> {

    const [build, setBuild]=useState(false);
    const [rec, setRec]=useState(false);

    const builder=()=>{
        setBuild(true)
        setRec(false)
    }

    const recognizer=()=>{
        setBuild(false)
        setRec(true)
    }


    return (
        build===false && rec===false?
        <>
    <h4>Would you like to practice building chords, or recognizing chords?</h4>
        <button onClick={builder}>Build</button>
        <button onClick={recognizer}>Recognize</button>
        </>
        : build===true?
        <>
        <Build />
        </>
        :
        <>
        <Recognize />
        </>
    )
}

export default TheoryPlay;