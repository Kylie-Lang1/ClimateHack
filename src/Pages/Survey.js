import { useState, useEffect } from "react";
import React from 'react';
import { Questions } from '../Components/Questions';
import Prompts from '../Data/Prompts';

function Survey() {
    const [displayIndex, setDisplayIndex] = useState(1)
    const [questionDisplayed, setQuestionDisplayed] = useState(Prompts[1].question)
    const [answersDisplayed, setAnswersDisplayed] = useState(Prompts[1].answers)
    const [results, setResults] = useState([])

    useEffect (() => {
        setQuestionDisplayed(Prompts[displayIndex].question)
        setAnswersDisplayed(Prompts[displayIndex].answers)
    }, [displayIndex, questionDisplayed, answersDisplayed])

    const handleSubmit = (userScore) => {
        const score = Prompts[displayIndex].type === "negative" ? userScore * -1 : userScore

        setResults([
            ...results,
            {
                id: Prompts[displayIndex].id,
                area: Prompts[displayIndex].area,
                category: Prompts[displayIndex].category,
                type: Prompts[displayIndex].type,
                score: score
            } 
        ])
        setDisplayIndex(displayIndex + 1)
        console.log(results)
    }

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