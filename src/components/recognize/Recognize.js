import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./recognize.css";
import Triads from "../triads/Triads";
import Septachords from "../septachords/Septachords";

const Recognize =()=>{
    
    const [choice, setChoice] = useState({
        triads:false,
        septachords: false
    })

    const triads =()=> {
        setChoice({triads:true, septachords:false})
    }

    const septachords =()=> {
        setChoice({triads:false, septachords:true})
    }




    return(
        choice.triads===false && choice.septachords===false?
        <>
        <h4>Would you like to play with Triads or Septachords?</h4>
        <button onClick={triads}>Triads</button>
        <button onClick={septachords}>Septachords</button>
        <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
        </>
        :
        choice.triads===true?
        <>
        <Triads />
        </>
        :
        <>
        <Septachords />
        </>
    )
}

export default Recognize;