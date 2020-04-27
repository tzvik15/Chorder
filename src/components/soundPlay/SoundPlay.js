import React, {useState} from "react";
import "./soundPlay.css";

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

const SoundPlay=()=> {

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
    

    const easyArr = [playMaj, playmin, playDim, playAug];
    const medArr = [playMaj, playmin, playDim, playAug, playM6, playM46, playmin6,playmin46,playDim6, playDim46, playAug6, playAug46];
    const advArr = [playMM, playMm, playmm, playhdim, playdimdim]
    const hardArr = [playMaj, playmin, playDim, playAug, playM6, playM46, playmin6,playmin46,playDim6, playDim46, playAug6, playAug46, playMM, playMm, playmm, playhdim, playdimdim, playMm56, playMm34, playMm2, playMM56, playMM34, playMM2, playMin56, playMin34, playMin2, playhdim56, playhdim34, playhdim2, playDim56, playDim34, playDim2 ]


    const [rand, setRand] = useState({
        rand1:null,
        rand2:null,
        rand3:null,
        rand4:null
    })
   
    const random = () => {
        let rand1 = easyArr[Math.floor(Math.random() * easyArr.length)];
        let rand2 = medArr[Math.floor(Math.random() * medArr.length)];
        let rand3 = advArr[Math.floor(Math.random() * advArr.length)];
        let rand4 = hardArr[Math.floor(Math.random() * hardArr.length)];
        setRand({rand1, rand2,rand3,rand4});
      };

    const [difficulty, setDifficulty] = useState({
        dif: ""
    })

  

  


    const easy=()=>{
        random()
        setDifficulty("easy")
    }

    const medium=()=>{
        random()
        setDifficulty("medium")
    }
    
    const advanced=()=>{
        random()
        setDifficulty("advanced")
    }

    const hard=()=>{
        random()
        setDifficulty("hard")
    }

    const log=()=> {
        console.log(difficulty);
        console.log(difficulty.dif)
    }


    return (
        difficulty.dif==="" ?
        <>
        <h4>Please select the difficulty level</h4>
        <button onClick={easy}>Easy</button>
        <button onClick={medium}>Medium</button>
        <button onClick={advanced}>Advanced</button>
        <button onClick={hard}>Hard</button>
        </>
        :
        difficulty==="easy"?
        <>
        <p>Please click the "Sound" button to play sound. You may click it as many times as you like. Once you are ready, click the button corresponding to the chord you heard.    
        </p>
        <button onClick={rand.rand1}>SOUND</button>
        <button onClick={random}>randomize</button>
        <h4>options</h4>
        <button>Major</button>
        <button>Minor</button>
        <button>Diminished</button>
        <button>Augmented</button>
        </>
        :
        difficulty==="medium"?
        <>
        <button onClick={rand.rand2}>SOUND</button>
        <button onClick={random}>randomize</button>
        </>
         :
         difficulty==="advanced"?
         <>
         <button onClick={rand.rand3}>SOUND</button>
         <button onClick={random}>randomize</button>
         </>
          :
          difficulty==="hard"?
          <>
          <button onClick={rand.rand4}>SOUND</button>
          <button onClick={random}>randomize</button>
          </>
          :
          <>
          <button onClick={log}>log</button>
          </>
    )
}

export default SoundPlay;