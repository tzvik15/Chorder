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
import M6miss1 from "../../assets/images/M6miss1.jpg"
import M6miss3 from "../../assets/images/M6miss3.jpg"
import M6miss5 from "../../assets/images/M6miss5.jpg"
import Min6miss1 from "../../assets/images/Min6miss1.jpg"
import Min6miss5 from "../../assets/images/Min6miss5.jpg"
import Aug6miss1 from "../../assets/images/Aug6miss1.jpg"
import Aug6miss3 from "../../assets/images/Aug6miss3.jpg"
import Dim6miss1 from "../../assets/images/dim6miss1.jpg"
import Dim6miss3 from "../../assets/images/Dim6miss3.jpg"
import M46miss1 from "../../assets/images/M46miss1.jpg"
import M46miss3 from "../../assets/images/M46miss3.jpg"
import M46miss5 from "../../assets/images/M46miss5.jpg"
import Min46miss1 from "../../assets/images/Min46miss1.jpg"
import Min46miss5 from "../../assets/images/Min46miss5.jpg"
import Dim46miss1 from "../../assets/images/Dim46miss1.jpg"
import Dim46miss3 from "../../assets/images/Dim46miss3.jpg"
import Aug46miss1 from "../../assets/images/Aug46miss1.jpg"
import Aug46miss3 from "../../assets/images/Aug46miss3.jpg"
import MMmiss1 from "../../assets/images/MM-1.jpg"
import MMmiss7 from "../../assets/images/MM-7.jpg"
import MM56miss1 from "../../assets/images/MM56-1.jpg"
import MM56miss3 from "../../assets/images/MM56-3.jpg"
import MM56miss5 from "../../assets/images/MM56-5.jpg"
import MM56miss7 from "../../assets/images/MM56-7.jpg"
import Mmin56Miss1 from "../../assets/images/Mmin56-1.jpg"
import Mmin56Miss3 from "../../assets/images/MMin56-3.jpg"
import Mmin56Miss5 from "../../assets/images/Mmin56-5.jpg"
import MinMin56Miss1 from "../../assets/images/MinMin56-1.jpg"
import MinMin56Miss7 from "../../assets/images/MinMin56-7.jpg"
import MinMinMiss1 from "../../assets/images/minmin-1.jpg"
import MinMinMiss7 from "../../assets/images/MinMin-7.jpg"
import HDimMiss1 from "../../assets/images/hdim-1.jpg"
import HDimMiss7 from "../../assets/images/hdim-7.jpg"
import HDim56Miss1 from "../../assets/images/hdim56-1.jpg"
import HDim56Miss3 from "../../assets/images/hdim56-3.jpg"
import HDim56Miss5 from "../../assets/images/hdim56-5.jpg"
import DimDimMiss1 from "../../assets/images/dimdim-1.jpg"
import DimDim56Miss1 from "../../assets/images/dimdim56-1.jpg"
import DimDim56Miss3 from "../../assets/images/dimdim56-3.jpg"
import DimDim56Miss5 from "../../assets/images/dimdim56-5.jpg"
import MminMiss1 from "../../assets/images/MMin-1.jpg"
import Dim56Miss7 from "../../assets/images/Dim56-7.jpg"




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
            pic:hdimMiss5,
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

    const [rootRand, setRootRand] = useState({
        case:"",
        name:"",
        pic:null,
        answer:null
    })

    const random1 = () => {
        let rand1 = rootArr[Math.floor(Math.random() * rootArr.length)];
        setRootRand({ case:rand1.case, name:rand1.name, pic:rand1.pic, answer:rand1.answer });
      };

    const inverArr = [ {
        case:"missing third",
        name: "Major Triad root position",
        pic: MTriad,
        answer:LE
    },
    {
        case: "missing third",
        name: "Minor Triad root position",
        pic: MTriad,
        answer:LEb
    },
    {
        case: "missing third",
        name:"Diminished Triad root position",
        pic:dimTriad,
        answer:LEb
    },
    {
        case: "missing third",
        name:"Augmented Triad root position",
        pic:augTriad,
        answer:LE
    },
    {
        case:"missing third sept",
        name: "Major Major Septachord root position",
        pic: MMmiss3,
        answer:LE
    },
    {
        case: "missing third sept",
        name: "Major Minor Septachord root position",
        pic: MminMiss3,
        answer:LE
    },
    {
        case: "missing third sept",
        name:"Minor Minor Septachord root position",
        pic:MminMiss3,
        answer:LEb
    },
    {
        case: "missing third sept",
        name:"Half Diminished Septachord root position",
        pic:hdimMiss3,
        answer:LEb
    },
    {
        case: "missing third sept",
        name:"Fully Diminished Septachord root position",
        pic:dimMiss3,
        answer:LEb
    },
    {
        case:"missing fifth sept",
        name: "Major Major Septachord root position",
        pic: MMmiss5,
        answer:LG
    },
    {
        case: "missing fifth sept",
        name: "Major Minor Septachord root position",
        pic: MminMiss5,
        answer:LG
    },
    {
        case: "missing fifth sept",
        name:"Minor Minor Septachord root position",
        pic:hdimMiss5,
        answer:LG
    },
    {
        case: "missing fifth sept",
        name:"Half Diminished Septachord root position",
        pic:hdimMiss5,
        answer:LGb
    },
    {
        case: "missing fifth sept",
        name:"Fully Diminished Septachord root position",
        pic:dimMiss5,
        answer:LGb
    },
    {
        case:"M6 missing 1",
        name:"Major Triad 1st inversion (6)",
        pic:M6miss1,
        answer:HC
    },
    {
        case:"M6 missing 3",
        name:"Major Triad 1st inversion (6)",
        pic:M6miss3,
        answer:LE
    },
    {
        case:"M6 missing 5",
        name:"Major Triad 1st inversion (6)",
        pic:M6miss5,
        answer:LG
    },
    {
        case:"m6 missing 1",
        name:"Minor Triad 1st inversion (6)",
        pic:Min6miss1,
        answer:HC
    },
    {
        case:"m6 missing 3",
        name:"Minor Triad 1st inversion (6)",
        pic:M6miss3,
        answer:LEb
    },
    {
        case:"m6 missing 5",
        name:"Minor Triad 1st inversion (6)",
        pic:Min6miss5,
        answer:LG
    },
    {
        case:"Dim6 missing 1",
        name:"Diminished Triad 1st inversion (6)",
        pic:Dim6miss1,
        answer:HC
    },
    {
        case:"Dim6 missing 3",
        name:"Diminished Triad 1st inversion (6)",
        pic:Dim6miss3,
        answer:LEb
    },
    {
        case:"Dim6 missing 5",
        name:"Diminished Triad 1st inversion (6)",
        pic:Min6miss5,
        answer:LGb
    },
    {
        case:"Aug6 missing 1",
        name:"Augmented Triad 1st inversion (6)",
        pic:Aug6miss1,
        answer:HC
    },
    {
        case:"Aug6 missing 3",
        name:"Augmented Triad 1st inversion (6)",
        pic:Aug6miss3,
        answer:LE
    },
    {
        case:"Aug6 missing 5",
        name:"Augmented Triad 1st inversion (6)",
        pic:M6miss5,
        answer:LGSharp
    },
    {
        case:"M4/6 missing 1",
        name:"Major Triad 2nd inversion (4/6)",
        pic:M46miss1,
        answer:HC
    },
    {
        case:"M4/6 missing 3",
        name:"Major Triad 2nd inversion (4/6)",
        pic:M46miss3,
        answer:HE
    },
    {
        case:"M4/6 missing 5",
        name:"Major Triad 2nd inversion (4/6)",
        pic:M46miss5,
        answer:LG
    },
    {
        case:"m4/6 missing 1",
        name:"Minor Triad 2nd inversion (4/6)",
        pic:Min46miss1,
        answer:HC
    },
    {
        case:"m46 missing 3",
        name:"Minor Triad 2nd inversion (4/6)",
        pic:M46miss3,
        answer:HEb
    },
    {
        case:"m4/6 missing 5",
        name:"Minor Triad 2nd inversion (4/6)",
        pic:Min46miss5,
        answer:LG
    },
    {
        case:"Dim4/6 missing 1",
        name:"Diminished Triad 2nd inversion (4/6)",
        pic:Dim46miss1,
        answer:HC
    },
    {
        case:"Dim4/6 missing 3",
        name:"Diminished Triad 2nd inversion (4/6)",
        pic:Dim46miss3,
        answer:HEb
    },
    {
        case:"Dim4/6 missing 5",
        name:"Diminished Triad 2nd inversion (4/6)",
        pic:Min46miss5,
        answer:LGb
    },
    {
        case:"Aug4/6 missing 1",
        name:"Augmented Triad 2nd inversion (4/6)",
        pic:Aug46miss1,
        answer:HC
    },
    {
        case:"Aug4/6 missing 3",
        name:"Augmented Triad 2nd inversion (4/6)",
        pic:Aug46miss3,
        answer:HE
    },
    {
        case:"Aug4/6 missing 5",
        name:"Augmented Triad 2nd inversion (4/6)",
        pic:M46miss5,
        answer:LGSharp
    },
    {
        case:"MM7 missing 1",
        name:"Major Major Septachord root position",
        pic:MMmiss1,
        answer:LC
    },
    {
        case:"MM7 missing 7",
        name:"Major Major Septachord root position",
        pic:MMmiss7,
        answer:LB
    }, 
    {
        case:"Mm7 missing 1",
        name:"Major Minor Septachord root position",
        pic:MminMiss1,
        answer:LC
    },
    {
        case:"Mm7 missing 7",
        name:"Major Minor Septachord root position",
        pic:MMmiss7,
        answer:LBb
    }, 
    {
        case:"mm7 missing 1",
        name:"Minor Minor Septachord root position",
        pic:MinMinMiss1,
        answer:LC
    },
    {
        case:"mm7 missing 7",
        name:"Minor Minor Septachord root position",
        pic:MinMinMiss7,
        answer:LBb
    },
    {
        case:"hdim7 missing 1",
        name:"Half Diminished Septachord root position",
        pic:HDimMiss1,
        answer:LC
    },
    {
        case:"hdimm7 missing 7",
        name:"Half Diminished Septachord root position",
        pic:HDimMiss7,
        answer:LBb
    },  
    {
        case:"dimdim7 missing 1",
        name:"Fully Diminished Septachord root position",
        pic:DimDimMiss1,
        answer:LC
    },
    {
        case:"dimdimm7 missing 7",
        name:"Fully Diminished Septachord root position",
        pic:HDimMiss7,
        answer:LBbb
    }, 
    {
        case: "MM56 missing 1",
        name: "Major Major Septachord, 1st inversion (5/6)",
        pic:MM56miss1,
        answer:HC
    },
    {
        case: "MM56 missing 3",
        name: "Major Major Septachord, 1st inversion (5/6)",
        pic:MM56miss3,
        answer:LE
    },
    {
        case: "MM56 missing 5",
        name: "Major Major Septachord, 1st inversion (5/6)",
        pic:MM56miss5,
        answer:LG
    },
    {
        case: "MM56 missing 7",
        name: "Major Major Septachord, 1st inversion (5/6)",
        pic:MM56miss7,
        answer:LB
    },
    {
        case: "Mm56 missing 1",
        name: "Major Minor Septachord, 1st inversion (5/6)",
        pic:Mmin56Miss1,
        answer:HC
    },
    {
        case: "Mm56 missing 3",
        name: "Major Minor Septachord, 1st inversion (5/6)",
        pic:Mmin56Miss3,
        answer:LE
    },
    {
        case: "Mm56 missing 5",
        name: "Major Minor Septachord, 1st inversion (5/6)",
        pic:Mmin56Miss5,
        answer:LG
    },
    {
        case: "Mm56 missing 7",
        name: "Major Minor Septachord, 1st inversion (5/6)",
        pic:MM56miss7,
        answer:LBb
    },
    {
        case: "mm56 missing 1",
        name: "Minor Minor Septachord, 1st inversion (5/6)",
        pic:MinMin56Miss1,
        answer:HC
    },
    {
        case: "mm56 missing 3",
        name: "Minor Minor Septachord, 1st inversion (5/6)",
        pic:Mmin56Miss3,
        answer:LEb
    },
    {
        case: "mm56 missing 5",
        name: "Minor Minor Septachord, 1st inversion (5/6)",
        pic:Mmin56Miss5,
        answer:LG
    },
    {
        case: "mm56 missing 7",
        name: "Minor Minor Septachord, 1st inversion (5/6)",
        pic:MinMin56Miss7,
        answer:LBb
    },
    {
        case: "hdim56 missing 1",
        name: "Half Diminished Septachord, 1st inversion (5/6)",
        pic:HDim56Miss1,
        answer:HC
    },
    {
        case: "hdim56 missing 3",
        name: "Half Diminished Septachord, 1st inversion (5/6)",
        pic:HDim56Miss3,
        answer:LEb
    },
    {
        case: "hdim56 missing 5",
        name: "Half Diminished Septachord, 1st inversion (5/6)",
        pic:HDim56Miss5,
        answer:LGb
    },
    {
        case: "hdim56 missing 7",
        name: "Half Diminished Septachord, 1st inversion (5/6)",
        pic: Dim56Miss7,
        answer:LBb
    },
    {
        case: "dim56 missing 1",
        name: "Fully Diminished Septachord, 1st inversion (5/6)",
        pic:DimDim56Miss1,
        answer:HC
    },
    {
        case: "dim56 missing 3",
        name: "Fully Diminished Septachord, 1st inversion (5/6)",
        pic:DimDim56Miss3,
        answer:LEb
    },
    {
        case: "dim56 missing 5",
        name: "Fully Diminished Septachord, 1st inversion (5/6)",
        pic:DimDim56Miss5,
        answer:LGb
    },
    {
        case: "dim56 missing 7",
        name: "Fully Diminished Septachord, 1st inversion (5/6)",
        pic: Dim56Miss7,
        answer:LBbb
    },
    

];  


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
        random1();
        setChoice({root: true, inversion:false} )
    }


    const [count, setCount] = useState({
        yes: 0,
        no: 0,
      });
    
      const coAn = () => {
        setCount({ ...count, yes: count.yes + 1 });
      };
    
      const inCoAn = () => {
        setCount({ ...count, no: count.no + 1 });
      };

      const selected1 = (event) => {
          if (event.target.src===rootRand.answer) {
               coAn();
               random1();
              console.log("yes")
          } else {
              console.log("no");
              inCoAn()
          }
      };

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
            <p>Chord name: </p> {rootRand.name}
            <br/>
            <br/>
            <img src={rootRand.pic} alt="chord with missing note" />
            <h4>Please select the note that would complete the chord</h4>
            <br/>
            {
                rootChoices.map(item => (
                    <button onClick={selected1}><img src={item} alt="note"/></button>
                ))
            }
        </div>
        <div>
        <h1 className="text">Correct Answers: {count.yes}</h1>
        <h1 className="text">Incorrect Answers: {count.no}</h1>
      </div>
        </>
    )
}

export default Build;