import React, {useState} from "react";
import "./learn.css";
import {Link} from "react-router-dom"






const Learn =()=> {
    
    const [buttons, setButtons] = useState({
        q1: false,
        triads: false,
        septa:false,
        inversions:false
    })

    const tri=()=> {
        setButtons({...buttons, q1:true, triads:true, septa:false, inversions: false})
    }

    const sept=()=> {
        setButtons({...buttons, q1:true, triads:false, septa:true, inversions:false})
    }

    const inv=()=> {
        setButtons({...buttons, inversions:true})
    }

    const log=()=> {
        console.log(buttons)
    }

    return (
        buttons.q1===false?
        <>
        <p>
            Chords, in the most basic form, are groups of 3 or more notes, where the distance between the notes is that of a (major or minor) third. For the most part, in Western Classical Music, chords are comprised of either 3 or 4 notes, and follow several rules (explained in detail ahead). Chords can appear either simultaneously (all the notes together), or one note following the other. When chords appear in the staggared form, they are known as "Arpeggios". Chords can appear in any note order. When the chord appears in an order other than its base position (stacked thirds), it is known as an "inversion".
        </p>
        <h3>What would you like to learn about?</h3>
        <button onClick={tri}>3-note chords ("Triads")</button>
        <button onClick={sept}>4-note chords ("Septachords")</button>

        </>
        :
        buttons.q1===true && buttons.septa===false && buttons.triads===true && buttons.inversions===false?
        <>
        <h2>triad stuff</h2>
        <button onClick={inv}>Inversions</button>
        <button onClick={sept}>Septachords</button>
        <button> <Link to="/">HOME!</Link></button>
        </>
        :
        buttons.q1===true && buttons.triads===false && buttons.septa===true && buttons.inversions===false?
        <>
        <h2>septa stuff</h2>
        <button onClick={inv}>Inversions</button>
        <button onClick={tri}>Triads</button>
        <button> <Link to="/">HOME!</Link></button>
        </>
        :
        buttons.q1===true && buttons.triads===false && buttons.septa===true && buttons.inversions===true?
        <>
        <h2>septa inversions</h2>
        <button onClick={tri}>Triads</button>
        <button> <Link to="/">HOME!</Link></button>
        </>
        :
        buttons.q1===true && buttons.triads===true && buttons.septa===false && buttons.inversions===true?
        <>
        <h2>triad inversions</h2>
        <button onClick={sept}>Septachords</button>
        <button> <Link to="/">HOME!</Link></button>
        </>
        :
        <>
        <h1>here</h1>
        {log()}
        </>
    )
}

export default Learn;