import React, {useState} from "react";
import "./build.css";

import MTriad from "../../assets/images/p5.jpg"
import augTriad from "../../assets/images/+5.jpg"
import dimTriad from "../../assets/images/-5.jpg"

import MMmiss3 from "../../assets/images/MM-3.jpg"
import MMmiss5 from "../../assets/images/MM-5.jpg"
import MminMiss3 from "../../assets/images/Mmin-3.jpg"
import MminMiss5 from "../../assets/images/Mmin-5.jpg"
import hdimMiss3 from "../../assets/images/hdim-3.jpg"
import hdimMiss5 from "../../assets/images/hdim-5.jpg"
import dimMiss3 from "../../assets/images/dim-3.jpg"
import dimMiss5 from "../../assets/images/dim-5.jpg"

import LE from "../../assets/images/LE.jpg"
import LEb from "../../assets/images/LEb.jpg"
import LESharp from "../../assets/images/LE#.jpg"
import HC from "../../assets/images/HC.jpg";
import HCSharp from "../../assets/images/HC#.jpg"
import HCb from "../../assets/images/HCb.jpg"
import HE from "../../assets/images/HE.jpg"
import HESharp from "../../assets/images/HE#.jpg"
import HEb from "../../assets/images/HEb.jpg"
import HG from "../../assets/images/HG.jpg"
import HGSharp from "../../assets/images/HG#.jpg"
import HGb from "../../assets/images/HGb.jpg"
import LB from "../../assets/images/LB.jpg"
import LBb from "../../assets/images/LBb.jpg"
import LBbb from "../../assets/images/LBbb.jpg"
import LC from "../../assets/images/LC.jpg"
import LCSharp from "../../assets/images/LC#.jpg"
import LCb from "../../assets/images/LCb.jpg"
import LG from "../../assets/images/LG.jpg"
import LGSharp from "../../assets/images/LG#.jpg"
import LGb from "../../assets/images/LGb.jpg"



const Build =()=>{

    const rootArr = [
        {
            case:"missing third",
            name: "Major Triad",
            pic: MTriad,
            answer:LE
        },
        {
            case: "missing third",
            name: "Minor Triad",
            pic: MTriad,
            answer:LEb
        },
        {
            case: "missing third",
            name:"Diminished Triad",
            pic:dimTriad,
            answer:LEb
        },
        {
            case: "missing third",
            name:"Augmented Triad",
            pic:augTriad,
            answer:LE
        },
        {
            case:"missing third sept",
            name: "Major Major Septachord",
            pic: MMmiss3,
            answer:LE
        },
        {
            case: "missing third sept",
            name: "Major Minor Septachord",
            pic: MminMiss3,
            answer:LE
        },
        {
            case: "missing third sept",
            name:"Minor Minor Septachord",
            pic:MminMiss3,
            answer:LEb
        },
        {
            case: "missing third sept",
            name:"Half Diminished Septachord",
            pic:hdimMiss3,
            answer:LEb
        },
        {
            case: "missing third sept",
            name:"Fully Diminished Septachord",
            pic:dimMiss3,
            answer:LEb
        },
        {
            case:"missing fifth sept",
            name: "Major Major Septachord",
            pic: MMmiss5,
            answer:LG
        },
        {
            case: "missing fifth sept",
            name: "Major Minor Septachord",
            pic: MminMiss5,
            answer:LG
        },
        {
            case: "missing fifth sept",
            name:"Minor Minor Septachord",
            pic:MminMiss5,
            answer:LG
        },
        {
            case: "missing fifth sept",
            name:"Half Diminished Septachord",
            pic:hdimMiss5,
            answer:LGb
        },
        {
            case: "missing fifth sept",
            name:"Fully Diminished Septachord",
            pic:dimMiss5,
            answer:LGb
        }


    ]

    const inverArr = [];

    const rootChoices =[LC, LCSharp, LCb, LE, LESharp, LEb, LG, LGSharp, LGb ];
    const inverChoices = [LC, LCSharp, LCb, LE, LESharp, LEb, LG, LGSharp, LGb, HC, HCSharp, HCb, HE, HESharp, HEb, HG, HGSharp, HGb, LB, LBb, LBbb]
    
    const [choice, setChoice] = useState({
        root:false,
        inversion:false
    })

    const inversionator=()=>{
        setChoice({root: false, inversion:true} )
    }

    const rooter=()=>{
        setChoice({root: true, inversion:false} )
    }

    // const [count, setCount] = useState({
    //     yes: 0,
    //     no: 0,
    //   });
    
    //   const coAn = () => {
    //     setCount({ ...count, yes: count.yes + 1 });
    //   };
    
    //   const inCoAn = () => {
    //     setCount({ ...count, no: count.no + 1 });
    //   };

    //   const selected = (event) => {
    //     if (event.target.innerText === correct) {
    //       coAn();
    //     //   random1();
    //     } else inCoAn();
    //     console.log("selected: " + event.target.innerText, "correct: " + correct);
    //   };

    return(
        choice.root===false && choice.inversion===false?
        <>
        <p>In this section you will be presented with a chord that is missing a note, and the type of chord to be built. Your objective is to select the note that will complete the chord. </p>
        <h4>Would you like to practice root position chords, or include inversions as well?</h4>
        <button onClick={rooter}>Root Positions!</button>
        <button onClick={inversionator}>Inversions!</button>
        </>
        :
        choice.root===false && choice.inversion===true?
        <>
        <h1>inversion stuff</h1>
        <h4>Please complete the following chord.</h4>
        <div>
            <p>Chord name: </p> {inverArr[0].name}
            <br/>
            <br/>
            <img src={inverArr[0].pic} alt="fifth" />
            <h4>Please select the note that would complete the chord</h4>
            <br/>
            {
                inverChoices.map(item => (
                    <button ><img src={item} alt="note"/></button>
                ))
            }
        </div>
        </>
        :
        <>
        <h1>root stuff</h1>
        <h4>Please complete the following chord.</h4>
        <div>
            <p>Chord name: </p> {rootArr[0].name}
            <br/>
            <br/>
            <img src={rootArr[0].pic} alt="fifth" />
            <h4>Please select the note that would complete the chord</h4>
            <br/>
            {
                rootChoices.map(item => (
                    <button ><img src={item} alt="note"/></button>
                ))
            }
        </div>
        </>
    )
}

export default Build;