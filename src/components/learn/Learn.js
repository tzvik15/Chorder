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
import audio18 from "../../assets/sounds/dom56.wav";
import audio19 from "../../assets/sounds/dom34.wav";
import audio20 from "../../assets/sounds/dom2.wav";
import audio21 from "../../assets/sounds/MM56.wav";
import audio22 from "../../assets/sounds/MM34.wav";
import audio23 from "../../assets/sounds/MM2.wav";
import audio24 from "../../assets/sounds/minmin56.wav";
import audio25 from "../../assets/sounds/minmin34.wav";
import audio26 from "../../assets/sounds/minmin2.wav";
import audio27 from "../../assets/sounds/hdim56.wav";
import audio28 from "../../assets/sounds/hdim34.wav";
import audio29 from "../../assets/sounds/hdim2.wav";
import audio30 from "../../assets/sounds/dim56.wav";
import audio31 from "../../assets/sounds/dim34.wav";
import audio32 from "../../assets/sounds/dim2.wav";



import root from "../../assets/images/3-5.png"
import quart from "../../assets/images/4-6.png"
import seven from "../../assets/images/7.jpg"
import sixFive from "../../assets/images/5-6.jpg"
import threeFour from "../../assets/images/3-4.jpg"
import two from "../../assets/images/4-2.jpg"








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

    const [playMm56] = useSound(audio18);
    const [playMm34] = useSound(audio19);
    const [playMm2] = useSound(audio20);
    const [playMM56] = useSound(audio21);
    const [playMM34] = useSound(audio22);
    const [playMM2] = useSound(audio23);
    const [playMin56] = useSound(audio24);
    const [playMin34] = useSound(audio25);
    const [playMin2] = useSound(audio26);
    const [playhdim56] = useSound(audio27);
    const [playhdim34] = useSound(audio28);
    const [playhdim2] = useSound(audio29);
    const [playDim56] = useSound(audio30);
    const [playDim34] = useSound(audio31);
    const [playDim2] = useSound(audio32);


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
            Chords are groups of 3 or more notes appearing simultaneously, or one after the other. When the notes appear melodically (one after the other), we call it an "arppegio". The most common types of chords in Western Classical Music are triads and septachords. These are chords that are constructed by notes where the distance between the notes is that of a (major or minor) third. A triad consists of 3 notes (so two (2) third intervals), while a septachord consists of 4 notes (so three (3) third intervals). <br></br>
            Chords can appear in any note order. When the chord appears in an order other than its base position (stacked thirds), it is known as an "inversion".
        </p>
        <h3 className ="title">What would you like to learn about?</h3>
        <button className ="btn-hover colorTriads" onClick={tri}>3-note chords ("Triads")</button>
        <button className ="btn-hover colorSept " onClick={sept}>4-note chords ("Septachords")</button>
        <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
        </>
        :
        buttons.q1===true && buttons.septa===false && buttons.triads===true && buttons.inversions===false?
        <>

        <h1 className ="title">Triads</h1>
        <p className ="info">At the most basic level, a triad is a collection of 3 notes, where the interval space between each pair of notes is a (major or minor) third. To simplify this concept, consider the order of notes: C, D, E, F, G, A, B, C. for a triad to exist, the three notes must be 2 names apart from each other (C-->E, D-->F, etc.). <br></br>
        Those three notes can come in any order. The way they are ordered are called "inversions". (To learn about inversions, click the "inversions" button). When presented with a group of 3 notes, first see if you can stack them to form a simple (non inverted) triad. 
        <br></br>For now disregard any "#" and "b" signs: only stack them by note names. Also note that any number of the 3 notes may be repeated: in music theory, there is no difference between [C,E,G] to [C,E,G,C,G]: they are both considered a triad and the same to one another.</p>
        <h2 className ="title">Triad types, and how to differentiate between them</h2>
        <p className ="info">There are four (4) types of triads in Western Classical Music. Each one of these types sounds differently when played. The type of triad depends on the type and order of thirds. As mentioned, triads are a stack of 2 thirds. Both of those thirds can be either major ("M"), or minor ("m"). 
        <br></br>That means that the interval content of a triad can be one of these 4 options (where the first letter is the bottom interval): MM, Mm, mM, mm. Each of those permutations has a name in music theory: Mm: a Major chord, mM: a Minor chord, MM: an Augmented chord, mm: a Diminished chord. All of these names also have an accepted shorthand: Major: M, Minor: m, Augmented: Aug. (or +) , Diminished: Dim. (or o)</p>
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
        <p className ="info">At this point, it's important to point out that while there are many theoretical seventh chords, in Western Classical Music Common Practice Period (the time span roughly 1600-1910, from which we derive most of our music theory practices), several of those chords are not present. While they DO exist theoretically and are used in other styles of music (jazz for example), this application will only discuss the chords we commonly use.</p>
        <h4 className ="title">Major Triad Septachords</h4>
        <p className ="info">There are 2 types of septachords commonly used that are based on a major triad. They are created by adding a major or minor seventh to the major chord. These resulting septachords are named "Major Major" and "Major Minor" respectively. On a root note of "C", they would look like this: C-E-G-B (Major Major), C-E-G-Bb (major minor). </p>
        <p className ="info">The Major Major chord is sometimes just called a Major 7th chord. It can by spelled either XM7 (CM7, DbM7, G#M7, etc.), or XMM (CMM, DbMM, G#MM, etc.) Sometimes, instead of the "M", the chord is spelled with a triangle: X∆7 (C∆7, Db∆7, G#∆7, etc.) </p>
        <p className ="info">The Major Minor chord is sometimes called a Dominant Seventh chord. It is comprised of a major triad and a minor seventh, so on a root note of C it will have the following notes: C-E-G-Bb. It can be spelled either XMm7 (CMm7, DbMm7, G#Mm7, etc.), or just X7 (C7, Db7, G#7, etc.)</p>
        <h4 className ="title">Minor Triad Septachords</h4>
        <p className ="info">While the exact same theoretical logic guiding the creation of the major triad septachords holds true for minor triads, in Western Classical Music we only use one minor septachord: the Minor Minor seventh chord. This septachord is comprised of a minor triad and a minor seventh above the root. On a root note of C, it will look like this: C-Eb-G-Bb.This type of septachord is sometimes called Minor Seventh. It is labelled Xm7 (Cm7, Dbm7, G#m7, etc.), or sometimes X-7 (C-7, Db-7, G#-7, etc.)</p>
        <h4 className ="title">Diminished Triad Septachords</h4>
        <p className ="info">There are two (2) types of diminished septachords we use in Western Classical Music based on the diminished triad. The first septachord is called a Half-Diminished seventh chord and is comprised of a diminished triad with a minor seventh added above the root. From a root note of C: C-Eb-Gb-Bb. This chord is sometimes called a Minor Seventh Flat (b) Five chord, and is spelled Xø7 (Cø7, Dbø7, G#ø7, etc.), or sometimes X-7b5 (C-7b5, Db-7b5, G#-7b5, etc.)</p>
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
        <h2 className ="title">Septa Inversions</h2>
        <p className ="info">Inversions of septachords are identical in thoery to triad inversions: you take he basic chord, and change which of the notes is on the bottom. Just like triads, septachords are denoted with numbers by the name of the chord. Important to note that all of the septachords can be inverted.</p>
        <p className ="info">When the septachord appears with the root note in the lowest voice, it is called "root position". While technically not an inversion (as this is the natural way for the chord to appear), it is denoted with the number "7" next to the name of the chord (Major-Major7, minor-minor7, fully diminished7, etc.)</p>
        <p className ="info">The first inversion of a septachord is named "quint-sext". In this inversion we take the root note and move it up, so the second note becomes the bottom (C-E-G-B ----> E-G-B-C). Note that inverting a septachord (any inversion) creates a (major/minor) second interval somewhere in the chord. The name of the inversion marks that second interval in relation to the lowest note of the inversion - so in the case of a quint-sextachord, the pair of notes creating the second interval are a fifth and a sixth (5,6) interval from the bass note.</p>
        <p className ="info">The second inversion of a septachord is named "terz-quart". In this inversion, the bottom note of the chord is the third note of the root position, or the fifth. (C-E-G-B ---> G-B-C-E)</p>
        <p className ="info">The third inversion of a septachord is named "secoond". In this inversion, the bottom note of the chord is the 4th note in the root position, or the seventh. (C-E-G-B ---> B-C-E-G)</p>
        <p className ="info">While all the inversions have a latin name (quint-sext, etc.), it is completely acceptable to call them by their inversion number, for example C Major Major, 2nd inversion, etc.)</p>
        <h4 className ="info1">Important to note: when determining the type of inversion, only the bottom note counts - the other notes can appear in any order, with doubling or omitting of notes. This has no bearing on the type of chord and inversion number.</h4>
        <p className ="info">The inversions are spelled with numbers by the name of the chord. Root position: <img src={seven} alt="7" className="numberPic"/>, 1st inversion: <img src={sixFive} alt="6-5" className="numberPic"/>, 2nd inversion: <img src={threeFour} alt="3-4" className="numberPic"/>, and 3rd inversion: <img src={two} alt="2" className="numberPic"/> Note that when spelling a third inversion, sometimes the number "4" is omitted, and only the "2" appears. </p>
        <p className ="info">Click the buttons below to listen to the various septachords and inversions.</p>
        <div className="sounds">
            <button className ="btn-hover color-3" onClick={playMM}>MM7</button>
            <button className ="btn-hover color-1" onClick={playMM56}>MM6/5</button>
            <button className ="btn-hover color-3" onClick={playMM34}>MM4/3</button>
            <button className ="btn-hover color-1" onClick={playMM2}>MM2</button>
            <button className ="btn-hover color-3" onClick={playMm}>Mm</button>
            <button className ="btn-hover color-1" onClick={playMm56}>Mm6/5</button>
            <button className ="btn-hover color-3" onClick={playMm34}>Mm4/3</button>
            <button className ="btn-hover color-1" onClick={playMm2}>Mm2</button>
            <button className ="btn-hover color-3" onClick={playmm}>mm</button>
            <button className ="btn-hover color-1" onClick={playMin56}>mm6/5</button>
            <button className ="btn-hover color-3" onClick={playMin34}>mm4/3</button>
            <button className ="btn-hover color-1" onClick={playMin2}>mm2</button>
            <button className ="btn-hover color-3" onClick={playhdim}>ø7</button>
            <button className ="btn-hover color-1" onClick={playhdim56}>ø6/5</button>
            <button className ="btn-hover color-3" onClick={playhdim34}>ø4/3</button>
            <button className ="btn-hover color-1" onClick={playhdim2}>ø2</button>
            <button className ="btn-hover color-3" onClick={playdimdim}>o7</button>
            <button className ="btn-hover color-1" onClick={playDim56}>o6/5</button>
            <button className ="btn-hover color-3" onClick={playDim34}>o4/3</button>
            <button className ="btn-hover color-1" onClick={playDim2}>o2</button>
            
        </div> 
        <button className ="btn-hover colorTriads" onClick={tri}>Triads</button>
        <button className ="btn-hover colorHome  " > <Link to="/">HOME!</Link></button>
        </>
        :
        buttons.q1===true && buttons.triads===true && buttons.septa===false && buttons.inversions===true?
        <>
        <h2 className ="title">Triad Inversions</h2>
        <p className ="info">The idea behind inversions is that the chords (triads, septachords, etc.) sound differently if the order of notes is changed.</p>
        <p className ="info">As a triad has three (3) notes, there are three ways in which they can be ordered. The root position (sometimes referred to as "base" position, or not given a name (for example when you encounter the term "major triad/chord" it means root form)).<br></br>
         1st inversion (where the bottom note is moved to a higher position in the note order, so the 2nd note of the original triad, the "third" of the chord, is now the bottom note of the chord), and 2nd inversion (where the two bottom notes are moved, to higher positions in the chord, so the new bottom note is now the note that was the top note in the root position, or the "fifth" of the chord.) </p>
         <br></br>
        <p className ="info">Root position triads are spelled either just with the base name ("M", "m", etc.), or with the numbers <img src={root} alt="3-5" className="numberPic"/> next to the root name (this is rarely done).
            1st inversions are sometimes called "sextachords", and are spelled with the number "6" next to their name (M6, m6, etc.). <br></br>
            2nd inversions are sometimes called "quart-sextachords", and are spelled with the numbers <img src={quart} alt="4-6" className="numberPic"/> attached to the name. The numbering of the inversions (both in writing and in name) are references to the intervalic content of the chord, in relation to the lowest note. <br></br>
             So, in a sextachord, we have a sixth interval from the lowest to the highest note, and a quart-sextachord has both a fourth and a sixth intervals from the lowest note.</p>
             <h4 className ="info1">Important to note: the type of inversion is dictated by the note in the bottom of the chord. If it is the root note, the chord is in root position. If it is the third, then the chord is a 1st inversion, and if it's the fifth, the chord is a 2nd inversion. The order and number of appearances of subsequent notes has no bearing on this.</h4>
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
            <button className ="btn-hover color-1" onClick={playM46}>Major triad, 2nd inversion (M6/4)</button>
            <button className ="btn-hover color-3 " onClick={playmin46}>Minor triad, 2nd inversion (m6/4)</button>
            <button className ="btn-hover color-1" onClick={playAug46}>Augmented triad, 2nd inversion (Aug6/4)</button>
            <button className ="btn-hover color-3 " onClick={playDim46}>Diminished triad, 2nd inversion (Dim6/4)</button>


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