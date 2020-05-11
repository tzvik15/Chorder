import React from "react";
import {Link} from "react-router-dom";
import "./recognize.css";

const Recognize =()=>{
    

    return(
        <>
        <h1>recognize component</h1>
        <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
        </>
    )
}

export default Recognize;