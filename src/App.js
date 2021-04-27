import React, { useState, useEffect } from "react";

import { CSSTransition, SwitchTransition } from "react-transition-group";
import Sound from './plugin/sound'

import Layout from "./components/Layout/Default";

import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Purpose from "./components/Purpose";
import Hearing from "./components/Hearing";
import Answer from "./components/Answer";
import Yesno from "./components/Yesno";
import Telephone from "./components/Telephone";
import DragTrash from "./components/DragTrash";
import Solution from "./components/Solution";
import SurveyFirst from "./components/SurveyFirst";
import SurveySec from "./components/SurveySec";
import SurveyAns from "./components/SurveyAns";
import Turnback from "./components/Turnback";
import Recheck from "./components/Recheck";
import Final from "./components/Final";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answerTwo, setAnswerT] = useState("");
  const [surveyAns, setSA] = useState(0);
  const [audio, setAudio] = useState() 
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    const audio = new Audio(require('./assets/home.mp3').default)
    audio.load()
    console.log(audio)
    setAudio(audio)
  }, [])

  useEffect(() => {
    if (!audio) return
    if (step === 3) {
      console.log('play sound')
      audio.play()
    }
    audio.addEventListener('ended', () => {
      audio.currentTime = 0
      audio.play()
    }, false)
  }, [audio, step])

  const content = () => {
    switch (step) {
      case 0:
        return <Title setStep={setStep} />;
      case 1:
        return <Subtitle setStep={setStep} />;
      case 2:
        return <Purpose step={step} setStep={setStep} />;
      case 3:
        return <Hearing step={step} setStep={setStep} />;
      case 4:
        return (
          <Answer
            step={step}
            setStep={setStep}
            answer={answer}
            setAnswer={setAnswer}
          />
        );
      case 5:
        return <Yesno step={step} setStep={setStep} />;
      case 6:
        return <Telephone step={step} setStep={setStep} />;
      case 7:
        return <DragTrash step={step} setStep={setStep} />;
      case 8:
        return <Solution step={step} setStep={setStep} />;
      case 9:
        return <SurveyFirst step={step} setStep={setStep} />;
      case 10:
        return <SurveySec setSA={setSA} step={step} setStep={setStep} />;
      case 11:
        return (
          <SurveyAns surveyAns={surveyAns} step={step} setStep={setStep} />
        );
      case 12:
        return (
          <Turnback answer={answerTwo} setAnswer={setAnswerT} surveyAns={surveyAns} step={step} setStep={setStep} />
        );
      case 13:
        return (
          <Recheck setSA={setSA} answer={answerTwo} setAnswer={setAnswerT} surveyAns={surveyAns} step={step} setStep={setStep} />
        );
      case 14:
        return <Final surveyAns={surveyAns} />;
      default:
        break;
    }
  };

  const changePage = () => {
    if (step === 8 || step === 11) {
      setStep(step + 1)
    }
  }

  return (
    <div className="outer-wrapper">
      <div className="content" onClick={changePage} id="content">
        <SwitchTransition>
          <CSSTransition
            key={step < 2 ? 'black' : 'default'}
            classNames="fade"
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
          >
            {step < 2 ? (
              <div style={{
                height: '100%',
                background: step === 0 ?'black' : '#1C1C1C'
              }}>
                <SwitchTransition>
                  <CSSTransition
                    key={step}
                    classNames="fade"
                    addEndListener={(node, done) =>
                      node.addEventListener("transitionend", done, false)
                    }
                  >
                    {content()}
                  </CSSTransition>
                </SwitchTransition>
              </div>
            ) : (
              <Layout>
                <SwitchTransition>
                  <CSSTransition
                    key={step}
                    classNames="fade"
                    addEndListener={(node, done) =>
                      node.addEventListener("transitionend", done, false)
                    }
                  >
                    {content()}
                  </CSSTransition>
                </SwitchTransition>
              </Layout>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default App;
