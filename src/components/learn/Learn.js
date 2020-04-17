import React, {useState} from "react";
import "./learn.css";
import {Link} from "react-router-dom";
import useSound from 'use-sound';

import audio1 from "../../assets/sounds/M.wav";
import audio2 from "../../assets/sounds/minor.wav";
import audio3 from "../../assets/sounds/dim_tri.wav";
import audio4 from "../../assets/sounds/aug_tri.wav";








const Learn =()=> {

    const [playMaj] = useSound(audio1);
    const [playmin] = useSound(audio2);
    const [playDim] = useSound(audio3);
    const [playAug] = useSound(audio4);


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
        <h1>Triads</h1>
        <p>At the most basic level, a triad is a collection of 3 notes, where the interval space between each pair of notes is a (major or minor) third. To simplify this concept, consider the order of notes: C, D, E, F, G, A, B, C. for a triad to exist, the three notes most be 2 names apart from each other (C-->E, D-->F, etc.). Those three notes can come in any order. The way they are ordered are called "inversions". (To learn about inversions, click the "inversions" button). When presented with a group of 3 notes, first see if you can stack them to form a simple (non inverted) triad. For now disregard any "#" and "b" signs: only stack them by note names. Also note that any number of the 3 notes may be repeated: in music theory, there is no difference between [C,E,G] to [C,E,G,C,G]: they are both considered a triad and the same to one another.</p>
        <h2>Triad types, and how to differentiate between them</h2>
        <p>There are four (4) types of triads in Western Classical Music. Each one of these types sounds differently when played. The type of triad depends on the type and order of thirds. As mentioned, triads are a stack of 2 thirds. Both of those thirds can be either major ("M"), or minor ("m"). That means that the interval content of a triad can be one of these 4 options: MM, Mm, mM, mm. Each of those permutations has a name in music theory: Mm: a Major chord, mM: a Minor chord, MM: an Augmented chord, mm: a Diminished chord. All of these names also have an accepted shorthand: Major: M, Minor: m, Augmented: Aug. , Diminished: Dim. </p>
        <p>An interesting by-product of how triads are created, by stacking 2 thirds, there is also a fifth interval created - from the lowest to the highest note. In M and m chords, the fifth is perfect. In Dim chords the fifth is diminished (also known as a "tritone"), and in Aug chords the fifth is augmented. This fifth interval helps create the unique sound of each of the triads. For an example of how each of the 4 triads sounds, click the buttons below.</p>
        <div className="sounds">
            <button onClick={playMaj}>Major (M)</button>
            <button onClick={playmin}>Minor (m)</button>
            <button onClick={playAug}>Augmented (Aug)</button>
            <button onClick={playDim}>Diminished (Dim)</button>
        </div>
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