import { useState, useEffect } from "react";
import React from 'react';
import { Questions } from '../Components/Questions';
import Prompts from '../Data/Prompts';

function Survey() {
    const [displayIndex, setDisplayIndex] = useState(0)
    const [questionDisplayed, setQuestionDisplayed] = useState(Prompts[0].question)
    const [answersDisplayed, setAnswersDisplayed] = useState(Prompts[0].answers)
    const [userInput, setUserInput] = useState()
    const [results, setResults] = useState([])

    useEffect (() => {
        setQuestionDisplayed(Prompts[displayIndex].question)
        setAnswersDisplayed(Prompts[displayIndex].answers)
    }, [displayIndex, questionDisplayed, answersDisplayed])

    const handleSubmit = (userScore) => {
        const score = Prompts[displayIndex].type === "negative" ? userScore * -1 : userScore * 1

        setResults([
            ...results,
            {
                id: Prompts[displayIndex].id,
                area: Prompts[displayIndex].area,
                category: Prompts[displayIndex].category,
                score: score
            }
        ])
        setDisplayIndex(displayIndex + 1)
    }

    console.log(results)
    return (
        <div>
            {(displayIndex < Prompts.length && displayIndex >= 0) 
                ? <>
                    <Questions question={questionDisplayed} answers={answersDisplayed} setUserInput={setUserInput}/>
                </> 
                : <>
                    <div>Thank you for taking our survey!</div>
                </>
            }

            <button onClick={() => {handleSubmit(userInput)}}>Submit</button>
        </div>
    );
}

export default Survey;