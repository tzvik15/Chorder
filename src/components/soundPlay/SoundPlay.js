import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./soundPlay.css";

import useSound from "use-sound";

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

const SoundPlay = () => {
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
  const medArr = [
    playMaj,
    playmin,
    playDim,
    playAug,
    playM6,
    playM46,
    playmin6,
    playmin46,
    playDim6,
    playDim46,
    playAug6,
    playAug46,
  ];
  const advArr = [playMM, playMm, playmm, playhdim, playdimdim];
  const hardArr = [
    playMaj,
    playmin,
    playDim,
    playAug,
    playM6,
    playM46,
    playmin6,
    playmin46,
    playDim6,
    playDim46,
    playAug6,
    playAug46,
    playMM,
    playMm,
    playmm,
    playhdim,
    playdimdim,
    playMm56,
    playMm34,
    playMm2,
    playMM56,
    playMM34,
    playMM2,
    playMin56,
    playMin34,
    playMin2,
    playhdim56,
    playhdim34,
    playhdim2,
    playDim56,
    playDim34,
    playDim2,
  ];

  const [eRand, setERand] = useState({
    rand1: null,
  });
  const [mRand, setMRand] = useState({
    rand2: null,
  });
  const [aRand, setARand] = useState({
    rand3: null,
  });
  const [hRand, setHRand] = useState({
    rand4: null,
  });

  const random1 = () => {
    let rand1 = easyArr[Math.floor(Math.random() * easyArr.length)];
    setERand({ rand1 });
  };
  const random2 = () => {
    let rand2 = medArr[Math.floor(Math.random() * medArr.length)];
    setMRand({ rand2 });
  };
  const random3 = () => {
    let rand3 = advArr[Math.floor(Math.random() * advArr.length)];
    setARand({ rand3 });
  };
  const random4 = () => {
    let rand4 = hardArr[Math.floor(Math.random() * hardArr.length)];
    setHRand({ rand4 });
  };

  const [difficulty, setDifficulty] = useState({
    dif: "",
  });

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

  const [correct, setCorrect] = useState("");

  const answer1 = () => {
    switch (eRand.rand1) {
      case playMaj:
        setCorrect("Major");
        break;
      case playmin:
        setCorrect("Minor");
        break;
      case playDim:
        setCorrect("Diminished");
        break;
      case playAug:
        setCorrect("Augmented");
        break;

      default:
        break;
    }
  };

  const answer2 = () => {
    switch (mRand.rand2) {
      case playMaj:
        setCorrect("Major - root position");
        break;
      case playmin:
        setCorrect("Minor - root position");
        break;
      case playDim:
        setCorrect("Diminished - root position");
        break;
      case playAug:
        setCorrect("Augmented - root position");
        break;
      case playM6:
        setCorrect("Major - 1st inverstion(6)");
        break;
      case playM46:
        setCorrect("Major - 2nd inversion(4/6)");
        break;
      case playmin6:
        setCorrect("Minor - 1st inversion(6)");
        break;
      case playmin46:
        setCorrect("Minor - 2nd inversion(4/6)");
        break;
      case playDim6:
        setCorrect("Diminished - 1st inversion(6)");
        break;
      case playDim46:
        setCorrect("Diminished - 2nd inversion(4/6)");
        break;
      case playAug6:
        setCorrect("Augmented - 1st inversion(6)");
        break;
      case playAug46:
        setCorrect("Augmented - 2nd inversion(4/6)");
        break;
      default:
        break;
    }
  };

  const answer3 = () => {
    switch (aRand.rand3) {
      case playMM:
        setCorrect("Major Major");
        break;
      case playMm:
        setCorrect("Major Minor");
        break;
      case playmm:
        setCorrect("Minor Minor");
        break;
      case playhdim:
        setCorrect("Half Diminished");
        break;
      case playdimdim:
        setCorrect("Fully Diminished");
        break;
      default:
        break;
    }
  };

  const answer4 = () => {
    switch (hRand.rand4) {
      case playMaj:
        setCorrect("Major triad - root position");
        break;
      case playmin:
        setCorrect("Minor triad - root position");
        break;
      case playDim:
        setCorrect("Diminished triad - root position");
        break;
      case playAug:
        setCorrect("Augmented triad - root position");
        break;
      case playM6:
        setCorrect("Major triad - 1st inverstion(6)");
        break;
      case playM46:
        setCorrect("Major triad - 2nd inversion(4/6)");
        break;
      case playmin6:
        setCorrect("Minor triad - 1st inversion(6)");
        break;
      case playmin46:
        setCorrect("Minor triad - 2nd inversion(4/6)");
        break;
      case playDim6:
        setCorrect("Diminished triad - 1st inversion(6)");
        break;
      case playDim46:
        setCorrect("Diminished triad - 2nd inversion(4/6)");
        break;
      case playAug6:
        setCorrect("Augmented triad - 1st inversion(6)");
        break;
      case playAug46:
        setCorrect("Augmented triad - 2nd inversion(4/6)");
        break;
      case playMM:
        setCorrect("Major Major septachord - root position");
        break;
      case playMm:
        setCorrect("Major Minor septachord - root position");
        break;
      case playmm:
        setCorrect("Minor Minor septachord - root position");
        break;
      case playhdim:
        setCorrect("Half Diminished septachord - root position");
        break;
      case playdimdim:
        setCorrect("Fully Diminished septachord - root position");
        break;
      case playMM56:
        setCorrect("Major Major septachord - 1st inversion(6/5)");
        break;
      case playMM34:
        setCorrect("Major Major septachord - 2nd inversion(4/3)");
        break;
      case playMM2:
        setCorrect("Major Major septachord - 3rd inversion(2)");
        break;
      case playMm56:
        setCorrect("Major Minor septachord - 1st inversion(6/5)");
        break;
      case playMm34:
        setCorrect("Major Minor septachord - 2nd inversion(4/3)");
        break;
      case playMm2:
        setCorrect("Major Minor septachord - 3rd inversion(2)");
        break;
      case playMin56:
        setCorrect("Minor Minor septachord - 1st inversion(6/5)");
        break;
      case playMin34:
        setCorrect("Minor Minor septachord - 2nd inversion(4/3)");
        break;
      case playMin2:
        setCorrect("Minor Minor septachord - 3rd inversion(2)");
        break;
      case playhdim56:
        setCorrect("Half Diminished septachord - 1st inversion(6/5)");
        break;
      case playhdim34:
        setCorrect("Half Diminished septachord - 2nd inversion(4/3)");
        break;
      case playhdim2:
        setCorrect("Half Diminished septachord - 3rd inversion(2)");
        break;
      case playDim56:
        setCorrect("Fully Diminished septachord - 1st inversion(6/5)");
        break;
      case playDim34:
        setCorrect("Fully Diminished septachord - 2nd inversion(4/3)");
        break;
      case playDim2:
        setCorrect("Fully Diminished septachord - 3rd inversion(2)");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    answer1();
  }, [eRand.rand1]);

  useEffect(() => {
    answer2();
  }, [mRand.rand2]);

  useEffect(() => {
    answer3();
  }, [aRand.rand3]);

  useEffect(() => {
    answer4();
  }, [hRand.rand4]);

  const easy = () => {
    random1();
    setDifficulty("easy");
  };

  const medium = () => {
    random2();
    setDifficulty("medium");
  };

  const advanced = () => {
    random3();
    setDifficulty("advanced");
  };

  const hard = () => {
    random4();
    setDifficulty("hard");
  };

  const selected1 = (event) => {
    if (event.target.innerText === correct) {
      coAn();
      random1();
    } else inCoAn();
    console.log("selected: " + event.target.innerText, "correct: " + correct);
  };
  const selected2 = (event) => {
    if (event.target.innerText === correct) {
      coAn();
      random2();
    } else inCoAn();
    console.log("selected: " + event.target.innerText, "correct: " + correct);
  };
  const selected3 = (event) => {
    if (event.target.innerText === correct) {
      coAn();
      random3();
    } else inCoAn();
    console.log("selected: " + event.target.innerText, "correct: " + correct);
  };
  const selected4 = (event) => {
    if (event.target.innerText === correct) {
      coAn();
      random4();
    } else inCoAn();
    console.log("selected: " + event.target.innerText, "correct: " + correct);
  };

  const log = () => {
    console.log(eRand, mRand, aRand, hRand);
  };

  return difficulty.dif === "" ? (
    <>
      <h4 className ="title">Please select the difficulty level</h4>
      <button className ="btn-hover color-2" onClick={easy}>Easy</button>
      <button className ="btn-hover color-6" onClick={medium}>intermediate</button>
      <button className ="btn-hover color-8" onClick={advanced}>hard</button>
      <button className ="btn-hover color-7" onClick={hard}>expert</button>
      <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
    </>
  ) : difficulty === "easy" ? (
    <>
      <p className ="info"> 
        Please click the "SOUND" button to play sound. You may click it as many
        times as you like. Once you are ready, click the button corresponding to
        the chord you heard. If your answer is correct, a new chord will be
        played when you click the "SOUND" button. If your answer is incorrect,
        the chord will remain the same.
      </p>
      <button className="jellyS" onClick={eRand.rand1}>SOUND</button>
      <h4 className ="info">options</h4>
      <button className="easyB major" onClick={selected1}>Major</button>
      <button className="easyB minor" onClick={selected1}>Minor</button>
      <button className="easyB diminished" onClick={selected1}>Diminished</button>
      <button className="easyB augmented" onClick={selected1}>Augmented</button>
      <div>
        <h1 className="text">Correct Answers: {count.yes}</h1>
        <h1 className="text">Incorrect Answers: {count.no}</h1>
      </div>
      <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
    </>
  ) : difficulty === "medium" ? (
    <>
      <p className ="info">
        Please click the "SOUND" button to play sound. You may click it as many
        times as you like. Once you are ready, click the button corresponding to
        the chord you heard. If your answer is correct, a new chord will be
        played when you click the "SOUND" button. If your answer is incorrect,
        the chord will remain the same.
      </p>
      <button className="jellyS" onClick={mRand.rand2}>SOUND</button>
      <h4  className ="info">options</h4>
      <table className="table" align="center">
        <tr>
          <th>Root position</th>
          <th>1st inversion</th>
          <th>2nd inversion</th>
        </tr>
        {/* group1 */}
        <tr>
          <td>
            <button className="mediumB major" onClick={selected2}>Major - root position</button>
          </td>
          <td>
            <button className="mediumB major" onClick={selected2}>Major - 1st inversion(6)</button>
          </td>
          <td>
            <button className="mediumB major" onClick={selected2}>Major - 2nd inversion(4/6)</button>
          </td>
        </tr>
        {/* group2 */}
        <tr>
          <td>
            <button className="mediumB minor" onClick={selected2}>Minor - root position</button>
          </td>
          <td>
            <button className="mediumB minor" onClick={selected2}>Minor - 1st inversion(6)</button>
          </td>
          <td>
            <button className="mediumB minor" onClick={selected2}>Minor - 2nd inversion(4/6)</button>
          </td>
        </tr>
        {/* group3 */}
        <tr>
          <td>
            <button className="mediumB diminished" onClick={selected2}>Diminished - root position</button>
          </td>
          <td>
            <button className="mediumB diminished" onClick={selected2}>Diminished - 1st inversion(6)</button>
          </td>
          <td>
            <button className="mediumB diminished" onClick={selected2}>Diminished - 2nd inversion(4/6)</button>
          </td>
        </tr>
        {/* group4 */}
        <tr>
          <td>
            <button className="mediumB augmented" onClick={selected2}>Augmented - root position</button>
          </td>
          <td>
            <button className="mediumB augmented" onClick={selected2}>Augmented - 1st inversion(6)</button>
          </td>
          <td>
            <button className="mediumB augmented" onClick={selected2}>Augmented - 2nd inversion(4/6)</button>
          </td>
        </tr>
      </table>
      <div>
        <h1 className="text">Correct Answers: {count.yes}</h1>
        <h1 className="text">Incorrect Answers: {count.no}</h1>
      </div>
      <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
    </>
  ) : difficulty === "advanced" ? (
    <>
      <p className ="info">
        Please click the "SOUND" button to play sound. You may click it as many
        times as you like. Once you are ready, click the button corresponding to
        the chord you heard.If your answer is correct, a new chord will be
        played when you click the "SOUND" button. If your answer is incorrect,
        the chord will remain the same.
      </p>
      <button className="jellyS" onClick={aRand.rand3}>SOUND</button>
      <h4 className ="info">options</h4>
      <button className="advancedB majorMajor" onClick={selected3}>Major Major</button>
      <button className="advancedB majorMinor" onClick={selected3}>Major Minor</button>
      <button className="advancedB minorMinor" onClick={selected3}>Minor Minor</button>
      <button className="advancedB halfDiminished" onClick={selected3}>Half Diminished</button>
      <button className="advancedB fullyDiminished" onClick={selected3}>Fully Diminished</button>
      <div>
        <h1 className="text">Correct Answers: {count.yes}</h1>
        <h1 className="text">Incorrect Answers: {count.no}</h1>
      </div>
      <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
    </>
  ) : difficulty === "hard" ? (
    <>
      <p className ="info">
        Please click the "SOUND" button to play sound. You may click it as many
        times as you like. Once you are ready, click the button corresponding to
        the chord you heard. If your answer is correct, a new chord will be
        played when you click the "SOUND" button. If your answer is incorrect,
        the chord will remain the same.
      </p>
      <button className="jellyS" onClick={hRand.rand4}>SOUND</button>
      <h4 className ="info">options</h4>
      <table>
        <tr className="table">
          <th>Root position</th>
          <th>1st inversion</th>
          <th>2nd inversion</th>
          <th>3rd inversion</th>
        </tr>
        {/* group1 */}
        <tr>
          <td>
            <button className="hardB majorTriad"  onClick={selected4}>Major triad - root position</button>
          </td>
          <td>
            <button className="hardB majorTriad" onClick={selected4}>Major triad - 1st inversion(6)</button>
          </td>
          <td>
            <button className="hardB majorTriad" onClick={selected4}>
              Major triad - 2nd inversion(4/6)
            </button>
          </td>
        </tr>
        {/* group2 */}
        <tr>
          <td>
            <button className="hardB minorTriad" onClick={selected4}>Minor triad - root position</button>
          </td>
          <td>
            <button className="hardB minorTriad" onClick={selected4}>Minor triad - 1st inversion(6)</button>
          </td>
          <td>
            <button className="hardB minorTriad" onClick={selected4}>
              Minor triad - 2nd inversion(4/6)
            </button>
          </td>
        </tr>
        {/* group3 */}
        <tr>
          <td>
            <button className="hardB diminidhedTriad" onClick={selected4}>
              Diminished triad - root position
            </button>
          </td>
          <td>
            <button className="hardB diminidhedTriad"  onClick={selected4}>
              Diminished triad - 1st inversion(6)
            </button>
          </td>
          <td>
            <button className="hardB diminidhedTriad"  onClick={selected4}>
              Diminished triad - 2nd inversion(4/6)
            </button>
          </td>
        </tr>
        {/* group4 */}
        <tr>
          <td>
            <button className="hardB augmentedTriad" onClick={selected4}>Augmented triad - root position</button>
          </td>
          <td>
            <button className="hardB augmentedTriad"  onClick={selected4}>
              Augmented triad - 1st inversion(6)
            </button>
          </td>
          <td>
            <button className="hardB augmentedTriad"  onClick={selected4}>
              Augmented triad - 2nd inversion(4/6)
            </button>
          </td>
        </tr>
        {/* group5 */}
        <tr>
          <td>
            <button className="hardB majorMajor"  onClick={selected4}>
              Major Major septachord - root position
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB majorMajor" onClick={selected4}>
              Major Major septachord - 1st inversion(6/5)
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB majorMajor" onClick={selected4}>
              Major Major septachord - 2nd inversion(4/3)
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB majorMajor" onClick={selected4}>
              Major Major septachord - 3rd inversion(2)
            </button>
          </td>
        </tr>
        {/* group6 */}
        <tr>
          <td>
            <button className="hardB majorMinor" onClick={selected4}>
              Major Minor septachord - root position
            </button>
          </td>
          <td>
            <button className="hardB majorMinor" onClick={selected4}>
              Major Minor septachord - 1st inversion(6/5)
            </button>
          </td>
          <td>
            <button className="hardB majorMinor" onClick={selected4}>
              Major Minor septachord - 2nd inversion(4/3)
            </button>
          </td>
          <td>
            <button className="hardB majorMinor" onClick={selected4}>
              Major Minor septachord - 3rd inversion(2)
            </button>
          </td>
        </tr>
        {/* group7 */}
        <tr>
          <td>
            {" "}
            <button className="hardB minorMinor"  onClick={selected4}>
              Minor Minor septachord - root position
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB minorMinor" onClick={selected4}>
              Minor Minor septachord - 1st inversion(6/5)
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB minorMinor"  onClick={selected4}>
              Minor Minor septachord - 2nd inversion(4/3)
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB minorMinor"  onClick={selected4}>
              Minor Minor septachord - 3rd inversion(2)
            </button>
          </td>
        </tr>

        {/* group8 */}
        <tr>
          <td>
            {" "}
            <button className="hardB halfDiminished" onClick={selected4}>
              Half Diminished septachord - root position
            </button>
          </td>
          <td>
            <button className="hardB halfDiminished"  onClick={selected4}>
              Half Diminished septachord - 1st inversion(6/5)
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB halfDiminished"  onClick={selected4}>
              Half Diminished septachord - 2nd inversion(4/3)
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB halfDiminished"  onClick={selected4}>
              Half Diminished septachord - 3rd inversion(2)
            </button>
          </td>
        </tr>
        {/* group9 */}
        <tr>
          <td>
            {" "}
            <button className="hardB fullyDiminished" onClick={selected4}>
              Fully Diminished septachord - root position
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB fullyDiminished" onClick={selected4}>
              Fully Diminished septachord - 1st inversion(6/5)
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB fullyDiminished" onClick={selected4}>
              Fully Diminished septachord - 2nd inversion(4/3)
            </button>
          </td>
          <td>
            {" "}
            <button className="hardB fullyDiminished"  onClick={selected4}>
              Fully Diminished septachord - 3rd inversion(2)
            </button>
          </td>
        </tr>
      </table>

      <div>
        <h1 className="text">Correct Answers: {count.yes}</h1>
        <h1 className="text">Incorrect Answers: {count.no}</h1>
      </div>
      <button className ="btn-hover colorHome  "> <Link to="/">HOME!</Link></button>
    </>
  ) : (
    <>
      <button onClick={log}>log</button>
    </>
  );
};

export default SoundPlay;


