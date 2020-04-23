import React, {useState} from "react";
import "./learn.css";
import {Link} from "react-router-dom";
import useSound from 'use-sound';

import audio1 from "../../assets/sounds/M.wav";
import audio2 from "../../assets/sounds/minor.wav";
import audio3 from "../../assets/sounds/dim_tri.wav";
import audio4 from "../../assets/sounds/aug_tri.wav";
import audio5 from "../../assets/sounds/M6.wav";
import audio6 from "../../assets/sounds/M46.wav";
import audio7 from "../../assets/sounds/min6.wav";
import audio8 from "../../assets/sounds/min46.wav";
import audio9 from "../../assets/sounds/dim6.wav";
import audio10 from "../../assets/sounds/dim46.wav";
import audio11 from "../../assets/sounds/aug6.wav";
import audio12 from "../../assets/sounds/aug46.wav";
import audio13 from "../../assets/sounds/MM7.wav";
import audio14 from "../../assets/sounds/Min7.wav";
import audio15 from "../../assets/sounds/minmin7.wav";
import audio16 from "../../assets/sounds/hdim.wav";
import audio17 from "../../assets/sounds/fulldim.wav";



import root from "../../assets/images/3-5.png"
import quart from "../../assets/images/4-6.png"








const Learn =()=> {

    const [playMaj] = useSound(audio1);
    const [playmin] = useSound(audio2);
    const [playDim] = useSound(audio3);
    const [playAug] = useSound(audio4);
    const [playM6] = useSound(audio5);
    const [playmin6] = useSound(audio7);
    const [playDim6] = useSound(audio9);
    const [playAug6] = useSound(audio11);
    const [playM46] = useSound(audio6);
    const [playmin46] = useSound(audio8);
    const [playDim46] = useSound(audio10);
    const [playAug46] = useSound(audio12);
    const [playMM] = useSound(audio13);
    const [playMm] = useSound(audio14);
    const [playmm] = useSound(audio15);
    const [playhdim] = useSound(audio16);
    const [playdimdim] = useSound(audio17);


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
        <p className ="info" >
            Chords, in the most basic form, are groups of 3 or more notes, where the distance between the notes is that of a (major or minor) third. For the most part, in Western Classical Music, chords are comprised of either 3 or 4 notes, and follow several rules (explained in detail ahead). <br></br>
            Chords can appear either simultaneously (all the notes together), or one note following the other. When chords appear in the staggared form, they are known as "Arpeggios". Chords can appear in any note order. When the chord appears in an order other than its base position (stacked thirds), it is known as an "inversion".
        </p>
        <h3 className ="title">What would you like to learn about?</h3>
        <button className ="btn-hover colorTriads" onClick={tri}>3-note chords ("Triads")</button>
        <button className ="btn-hover colorSept " onClick={sept}>4-note chords ("Septachords")</button>

        </>
        :
        buttons.q1===true && buttons.septa===false && buttons.triads===true && buttons.inversions===false?
        <>

        <h1 className ="title">Triads</h1>
        <p className ="info">At the most basic level, a triad is a collection of 3 notes, where the interval space between each pair of notes is a (major or minor) third. To simplify this concept, consider the order of notes: C, D, E, F, G, A, B, C. for a triad to exist, the three notes most be 2 names apart from each other (C-->E, D-->F, etc.). <br></br>
        Those three notes can come in any order. The way they are ordered are called "inversions". (To learn about inversions, click the "inversions" button). When presented with a group of 3 notes, first see if you can stack them to form a simple (non inverted) triad. 
        <br></br>For now disregard any "#" and "b" signs: only stack them by note names. Also note that any number of the 3 notes may be repeated: in music theory, there is no difference between [C,E,G] to [C,E,G,C,G]: they are both considered a triad and the same to one another.</p>
        <h2 className ="title">Triad types, and how to differentiate between them</h2>
        <p className ="info">There are four (4) types of triads in Western Classical Music. Each one of these types sounds differently when played. The type of triad depends on the type and order of thirds. As mentioned, triads are a stack of 2 thirds. Both of those thirds can be either major ("M"), or minor ("m"). 
        <br></br>That means that the interval content of a triad can be one of these 4 options: MM, Mm, mM, mm. Each of those permutations has a name in music theory: Mm: a Major chord, mM: a Minor chord, MM: an Augmented chord, mm: a Diminished chord. All of these names also have an accepted shorthand: Major: M, Minor: m, Augmented: Aug. (or +) , Diminished: Dim. (or o)</p>
        <p className ="info">An interesting by-product of how triads are created, by stacking 2 thirds, there is also a fifth interval created - from the lowest to the highest note. In M and m chords, the fifth is perfect. <br></br>
        In Dim chords the fifth is diminished (also known as a "tritone"), and in Aug chords the fifth is augmented. This fifth interval helps create the unique sound of each of the triads. For an example of how each of the 4 triads sounds, click the buttons below.</p>

        <div className="sounds">
            <button className ="btn-hover color-1" onClick={playMaj}>Major (M)</button>
            <button className ="btn-hover color-3 " onClick={playmin}>Minor (m)</button>
            <button className ="btn-hover color-1" onClick={playAug}>Augmented (Aug)</button>
            <button className ="btn-hover color-3" onClick={playDim}>Diminished (Dim)</button>
        </div>
        <button className ="btn-hover colorInver " onClick={inv}>Inversions</button>
        <button className ="btn-hover colorSept " onClick={sept}>Septachords</button>
        <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
        </>
        :
        buttons.q1===true && buttons.triads===false && buttons.septa===true && buttons.inversions===false?
        <>
        <h2 className ="title">Septachords</h2>
        <p className ="info">The name "septachords" comes from the word "septa", meaning seven. Septachords are identical to triads in how they operate, except that instead of three notes (two (2) third intervals stacked), they contain a fourth note that is a seventh distance (interval) from the root note - hence the name. </p>
        <p className ="info">Septachords are based on the four (4) triad types: Major, Minor, Augmented, Diminished. Each of these chords can have either a major, or minor, or sometimes diminished 7th interval added to them. </p>
        <p className ="info">At this point, it's important to point out that while there are many theoretical seventh chords, in Western Classical Music Common Practice Period (the time span roughly 1600-1910, from which we derive most of our music theory practices), several of those chords are not present. While they DO exist theoretically, and are used in other styles of music (jazz for example), this application will only discuss the chords we commonly use.</p>
        <h4 className ="title">Major triad septachords</h4>
        <p className ="info">There are 2 types of septachords commonly used that are based on a major triad. They are created by adding a major or minor seventh to the major chord. This resulting septachords are named "Major Major", and "Major Minor" respectively. On a root note of "C", they would look like this: C-E-G-B (Major Major), C-E-G-Bb (major minor). </p>
        <p className ="info">The Major Major chord is sometimes just called a Major 7th chord. It can by spelled either XM7 (CM7, DbM7, G#M7, etc.), or XMM (CMM, DbMM, G#MM, etc.) Sometimes, instead of the "M", the chord is spelled with a triangle: X∆7 (C∆7, Db∆7, G#∆7, etc.) </p>
        <p className ="info">The Major Minor chord is sometimes called a Dominant Seventh chord. It is comprised of a major triad and a minor seventh, so on a root note of C it will have the following notes: C-E-G-Bb. It can be spelled either XMm7 (CMm7, DbMm7, G#Mm7, etc.), or just X7 (C7, Db7, G#7, etc.)</p>
        <h4 className ="title">Minor triad septachords</h4>
        <p className ="info">While the exact same theoretical logic guiding the creation of the major triad septachords holds true for minor triads, in Western Classical Music we only use one minor septachord: the Minor Minor seventh chord. This septachords is comprised of a minor triad, and a minor seventh interval from the root note. On a root note of C, it will look like this: C-Eb-G-Bb.This type of septachord is sometimes called Minor Seventh. It is labelled Xm7 (Cm7, Dbm7, G#m7, etc.), or sometimes X-7 (C-7, Db-7, G#-7, etc.)</p>
        <h4 className ="title">Diminished triad septachords</h4>
        <p className ="info">There are two (2) types of diminished septachords we use in Western Classical Music based on the diminished triad. The first septachord is called a Half Diminished chord, and is comprised of a diminished triad with a minor seventh added. From a root note of C: C-Eb-Gb-Bb. This chord is sometimes called a Minor Seventh Flat (b) Five chord, and is spelled Xø7 (Cø7, Dbø7, G#ø7, etc.), or sometimes X-7b5 (C-7b5, Db-7b5, G#-7b5, etc.)</p>
        <p className ="info">The other chord based on a diminished triad has a DIMINISHED seventh interval added to it. On a root of C, it is spelled: C-Eb-Gb-Bbb, and is called a Fully Diminished chord, or sometimes a diminished seventh chord. It is spelled Xo7 (Co7, Dbo7, G#o7, etc.), or Xdim7 (Cdim7, Dbdim7, G#dim7, etc.).</p>
        <br></br>
        <p className ="info">In the Common Practice Period, we don't use seventh chords based on an augmented triad, though they do exist in other music styles and in theoretical work.</p>
        <p className ="title">Click the buttons below to listen to the various septachords.</p>
        <div className="sounds">
            <button className ="btn-hover color-1" onClick={playMM}>MM</button>
            <button className ="btn-hover color-3" onClick={playMm}>Mm</button>
            <button className ="btn-hover color-1" onClick={playmm}>mm</button>
            <button className ="btn-hover color-3" onClick={playhdim}>ø7</button>
            <button className ="btn-hover color-1" onClick={playdimdim}>o7</button>
        </div>  
        <button className ="btn-hover colorInver " onClick={inv}>Inversions</button>
        <button className ="btn-hover colorTriads" onClick={tri}>Triads</button>
        <button className ="btn-hover colorHome " > <Link to="/">HOME!</Link></button>
        </>
        :
        buttons.q1===true && buttons.triads===false && buttons.septa===true && buttons.inversions===true?
        <>
        <h2 className ="title">septa inversions</h2>
        <p className ="info">The idea behind inversions is that the chords (triads, septachords, etc.) sound differently if the order of notes is changed.</p>
        <button className ="btn-hover colorTriads" onClick={tri}>Triads</button>
        <button className ="btn-hover colorHome  " > <Link to="/">HOME!</Link></button>
        </>
        :
        buttons.q1===true && buttons.triads===true && buttons.septa===false && buttons.inversions===true?
        <>
        <h2 className ="title">Triad Inversions</h2>
        <p className ="info">The idea behind inversions is that the chords (triads, septachords, etc.) sound differently if the order of notes is changed.</p>
        <p className ="info">As a triad has three (3) notes, there are three ways in which they can be ordered. The base position (sometimes referred to as "root" position, or not given a name (for example when you encounter the term "major triad/chord" it means base form)).<br></br>
         1st inversion (where the base note is moved to the top of the chord, so the 2nd note of the original triad is now the bottom note of the chord), and 2nd inversion (where the two bottom notes are moved, to the top of the chord, so the new bottom note is now the note that was the top note in the root position) </p>
         <br></br>
        <p className ="info">Root position triads are spelled eithr just with the base name ("M", "m", etc.), or with the numbers <img src={root} alt="3-5" className="numberPic"/> next to the base name (this is rarely done).
            1st inversions are sometimes called "sextachords", and are spelled with the number "6" next to their name (M6, m6, etc.). <br></br>
            2nd inversions are sometimes called "quart-sextachords", and are spelled with the numbers <img src={quart} alt="4-6" className="numberPic"/> attached to the name. The numbering of the inversions (both in writing and in name) are referrences to the intervalic content of the chord, in relation to the lowest note. <br></br>
             So, in a sextachord, we have a sixth interval from the lowest to the highest note, and a quart-sextachord has both a fourth and a sixth intervals from the lowest note.</p>
            <p className ="info">Each one of the inverted chords has a different sound. To listen to the different inversions, press the buttons below.</p>
            <div className="sounds">

            <button className ="btn-hover color-1" onClick={playMaj}>Major (M)</button>
            <button className ="btn-hover color-3 " onClick={playmin}>Minor (m)</button>
            <button className ="btn-hover color-1" onClick={playAug}>Augmented (Aug)</button>
            <button className ="btn-hover color-3 " onClick={playDim}>Diminished (Dim)</button>
            <button className ="btn-hover color-1" onClick={playM6}>Major triad, 1st inversion (M6)</button>
            <button className ="btn-hover color-3 " onClick={playmin6}>Minor triad, 1st inversion(m6)</button>
            <button className ="btn-hover color-1" onClick={playAug6}>Augmented triad, 1st inversion(Aug6)</button>
            <button className ="btn-hover color-3 " onClick={playDim6}>Diminished triad, 1st inversion(Dim6)</button>
            <button className ="btn-hover color-1" onClick={playM46}>Major triad, 2nd inversion (M46)</button>
            <button className ="btn-hover color-3 " onClick={playmin46}>Minor triad, 2nd inversion (m46)</button>
            <button className ="btn-hover color-1" onClick={playAug46}>Augmented triad, 2nd inversion (Aug46)</button>
            <button className ="btn-hover color-3 " onClick={playDim46}>Diminished triad, 2nd inversion (Dim46)</button>


        </div>
        <button className ="btn-hover colorSept" onClick={sept}>Septachords</button>
        <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
        </>
        :
        <>
        <h1>here</h1>
        {log()}
        </>
    )
}

export default Learn;