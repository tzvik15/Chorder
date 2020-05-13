import React, {useState} from "react";
import "./septachords.css";
import {Link} from "react-router-dom";

import MM from "../../assets/images/MM7.jpg";
import MM56 from "../../assets/images/MM56.jpg";
import MM34 from "../../assets/images/MM34.jpg";
import MM2 from "../../assets/images/MM2.jpg";
import MMin from "../../assets/images/MMin7.jpg";
import MMin56 from "../../assets/images/MMin56.jpg";
import MMin34 from "../../assets/images/MMin34.jpg";
import MMin2 from "../../assets/images/MMin2.jpg";
import MinMin from "../../assets/images/MinMin7.jpg";
import MinMin56 from "../../assets/images/MinMin56.jpg";
import MinMin34 from "../../assets/images/MinMin34.jpg";
import MinMin2 from "../../assets/images/MinMin2.jpg";
import HDim from "../../assets/images/HDim7.jpg";
import HDim56 from "../../assets/images/HDim56.jpg";
import HDim34 from "../../assets/images/HDim34.jpg";
import HDim2 from "../../assets/images/HDim2.jpg";
import DimDim from "../../assets/images/DimDim7.jpg";
import DimDim56 from "../../assets/images/DimDim56.jpg";
import DimDim34 from "../../assets/images/DimDim34.jpg";
import DimDim2 from "../../assets/images/DimDim2.jpg";


const Septachords =()=>{

    const [start, setStart] = useState(false);

    const go=()=>{
        random()
        setStart(true)
    }


    const imageArr =[
        {
            name:"Major Major Septachord, root position",
            pic:MM
        },
        {
            name:"Major Major Septachord, 1st inversion (6/5)",
            pic:MM56
        },  
        {
            name:"Major Major Septachord, 2nd inversion (4/3)",
            pic:MM34
        },
        {
            name:"Major Major Septachord, 3rd inversion (2)",
            pic:MM2
        },
        
        {
            name:"Major Minor Septachord, root position",
            pic:MMin
        },
        {
            name:"Major Minor Septachord, 1st inversion (6/5)",
            pic:MMin56
        },  
        {
            name:"Major Minor Septachord, 2nd inversion (4/3)",
            pic:MMin34
        },
        {
            name:"Major Minor Septachord, 3rd inversion (2)",
            pic:MMin2
        },

        {
            name:"Minor Minor Septachord, root position",
            pic:MinMin
        },
        {
            name:"Minor Minor Septachord, 1st inversion (6/5)",
            pic:MinMin56
        },  
        {
            name:"Minor Minor Septachord, 2nd inversion (4/2)",
            pic:MinMin34
        },
        {
            name:"Minor Minor Septachord, 3rd inversion (2)",
            pic:MinMin2
        },

        {
            name:"Half Diminished Septachord, root position",
            pic:HDim
        },
        {
            name:"Half Diminished Septachord, 1st inversion (6/5)",
            pic:HDim56
        },  
        {
            name:"Half Diminished Septachord, 2nd inversion (4/3)",
            pic:HDim34
        },
        {
            name:"Half Diminished Septachord, 3rd inversion (2)",
            pic:HDim2
        },

        {
            name:"Fully Diminished Septachord, root position",
            pic:DimDim
        },
        {
            name:"Fully Diminished Septachord, 1st inversion (6/5)",
            pic:DimDim56
        },  
        {
            name:"Fully Diminished Septachord, 2nd inversion (4/3)",
            pic:DimDim34
        },
        {
            name:"Fully Diminished Septachord, 3rd inversion (2)",
            pic:DimDim2
        },
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
        <h2>Septachord Recognition</h2>
        <p>In this section, you will be presented with a picture of a chord, and your job is to recognize what chord (and inversion) it is.</p>
        <h4>Ready?</h4>
        <button onClick={go}>READY</button>
        <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
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
      <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
        </>
    )
}

export default Septachords;