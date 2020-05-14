import React, {useState} from "react";
import "./triads.css";
import {Link} from "react-router-dom";

import M from "../../assets/images/M.jpg";
import M6 from "../../assets/images/M6.jpg";
import M46 from "../../assets/images/M46.jpg";
import Min from "../../assets/images/Min.jpg";
import Min6 from "../../assets/images/Min6.jpg";
import Min46 from "../../assets/images/Min46.jpg";
import Dim from "../../assets/images/Dim.jpg";
import Dim6 from "../../assets/images/Dim6.jpg";
import Dim46 from "../../assets/images/Dim46.jpg";
import Aug from "../../assets/images/Aug.jpg";
import Aug6 from "../../assets/images/Aug6.jpg";
import Aug46 from "../../assets/images/Aug46.jpg";

const Triads =()=>{

    const [start, setStart] = useState(false);

    const go=()=>{
        random()
        setStart(true)
    }


    const imageArr =[
        {
            name:"Major Triad, root position",
            pic:M
        },
        {
            name:"Major Triad, 1st inversion (6)",
            pic:M6
        },  
        {
            name:"Major Triad, 2nd inversion (6/4)",
            pic:M46
        },
        {
            name:"Minor Triad, root position",
            pic:Min
        },
        {
            name:"Minor Triad, 1st inversion (6)",
            pic:Min6
        },  
        {
            name:"Minor Triad, 2nd inversion (6/4)",
            pic:Min46
        },  
        {
            name:"Diminished Triad, root position",
            pic:Dim
        },
        {
            name:"Diminished Triad, 1st inversion (6)",
            pic:Dim6
        },  
        {
            name:"Diminished Triad, 2nd inversion (6/4)",
            pic:Dim46
        }, 
        {
            name:"Augmented Triad, root position",
            pic:Aug
        },
        {
            name:"Augmented Triad, 1st inversion (6)",
            pic:Aug6
        },  
        {
            name:"Augmented Triad, 2nd inversion (6/4)",
            pic:Aug46
        }
    ]

    const random=()=> {
        let rand1 = imageArr[Math.floor(Math.random() * imageArr.length)];
        setItem({ name:rand1.name, pic:rand1.pic });
    }

    const [item, setItem]=useState({
        name:"",
        pic:null
    })

    const selected=(event)=>{
        console.log(event.target);
        if (event.target.innerText === item.name) {
            coAn();
             random();
            console.log("yes")
        } else {
            console.log("no");
            inCoAn()
        }
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

    return (
        start===false?
        <>
        <h2>Triad Recognition</h2>
        <p>In this section, you will be presented with a picture of a chord, and your job is to recognize what chord (and inversion) it is.</p>
        <h4>Ready?</h4>
        <button onClick={go}>READY</button>
        <Link to="/"><button className ="btn-hover colorHome  "> HOME!</button></Link>
        </>
        :
        <>
        <h4>What chord is this?</h4>
        <div>
        <img src={item.pic} alt={"a chord"}></img>
        </div>
        <br/>
        <br/>
        <div>
        {
                imageArr.map(item => (
                    <button onClick={selected}>{item.name}</button>
                ))
            }
            </div>
            <div>
        <h1 className="text">Correct Answers: {count.yes}</h1>
        <h1 className="text">Incorrect Answers: {count.no}</h1>
      </div>
      <Link to="/"><button className ="btn-hover colorHome  "> HOME!</button></Link>
        </>
    )
}

export default Triads;