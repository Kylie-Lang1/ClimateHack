import { useState, useEffect } from "react";
import React from 'react';
import { Questions } from '../Components/Questions';
import Prompts from '../Data/Prompts';

function Survey() {
    const [displayIndex, setDisplayIndex] = useState(1)
    const [questionDisplayed, setQuestionDisplayed] = useState(Prompts[1].question)
    const [answersDisplayed, setAnswersDisplayed] = useState(Prompts[1].answers)

    useEffect (() => {
        setQuestionDisplayed(Prompts[displayIndex].question)
        setAnswersDisplayed(Prompts[displayIndex].answers)
    }, [displayIndex, questionDisplayed, answersDisplayed])

    console.log(Prompts[displayIndex])

    return (
        <div>
            {(displayIndex < Prompts.length && displayIndex > 0) 
                ? <>
                    <Questions question={questionDisplayed} answers={answersDisplayed} />
                </> 
                : <>
                    <div>Thank you for taking our survey!</div>
                </>
            }

            <button onClick={() => {setDisplayIndex(displayIndex + 1)}}>Submit</button>
        </div>
    );
}

export default Survey;