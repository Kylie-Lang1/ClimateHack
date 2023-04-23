import Prompts from '../Data/Prompts';
import { useState, useEffect } from "react";
import { Questions } from '../Components/Questions';

function Survey() {
    const [displayIndex, setDisplayIndex] = useState(0)
    // const [questionDisplayed, setQuestionDisplayed] = useState(Prompts[0].question)
    // const [answersDisplayed, setAnswersDisplayed] = useState(Prompts[0].answers)
    const [question, setQuestion] = useState(Prompts[0] )
    const [userInput, setUserInput] = useState()
    const [results, setResults] = useState([])

    useEffect (() => {
        // setQuestionDisplayed(Prompts[displayIndex].question)
        // setAnswersDisplayed(Prompts[displayIndex].answers)
        setQuestion(Prompts[displayIndex])
    }, [displayIndex //, questionDisplayed, answersDisplayed
])

    console.log(Prompts[displayIndex])

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
        <div className='mt-20'>
            {(displayIndex < Prompts.length && displayIndex >= 0) 
                ? <>
                    <Questions 
                        question={question.question}
                        answers={question.answers}
                        category={question.area}
                        setUserInput={setUserInput}
                    />
                </> 
                : <>
                    <div>Thank you for taking our survey!</div>
                </>
            }

            <button className="justify-items-center border-2 w-20 rounded-lg" onClick={() => {handleSubmit(userInput)}}>Submit</button>
        </div>
    );
}

export default Survey;