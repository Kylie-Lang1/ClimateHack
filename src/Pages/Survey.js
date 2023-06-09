import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Questions } from '../Components/Questions';
import Prompts from '../Data/Prompts';

function Survey({ results, setResults }) {
    const [displayIndex, setDisplayIndex] = useState(0)
    const [question, setQuestion] = useState(Prompts[0])
    const [userInput, setUserInput] = useState()
    const [error, setError] = useState()

    const navigate = useNavigate()

    useEffect (() => {
        setQuestion(Prompts[displayIndex])
    }, [displayIndex])

    useEffect (() => {
        setResults([])
    }, [])

    const handleNext = (userInput) => {
        if (!userInput) {
            setError("Please select an answer")
            return
        } else {
            setError(null)
        const question = Prompts[displayIndex]
        const score = question.type === "negative" ? userInput.score * question.severity * -1 : userInput.score * question.severity

        setResults([
            ...results,
            {
                id: Prompts[displayIndex].id,
                category: Prompts[displayIndex].category,
                area: Prompts[displayIndex].area,
                question: Prompts[displayIndex].question,
                answer: userInput.answer,
                score: score,
                
            }
        ])
        setDisplayIndex(displayIndex + 1)
        setUserInput()
        }
    }

    const handleSubmit = () => {
        navigate('/results')
    }

    console.log(results)
    return (
        <div className='mt-20 bg-white'>
            <div className='flex flex-col'>
                {(displayIndex < Prompts.length && displayIndex >= 0) 
                    ? <>
                        <Questions 
                            key={question.id}
                            question={question.question}
                            answers={question.answers}
                            category={question.category}
                            setUserInput={setUserInput}
                        />
                    </> 
                    : <div className="grid justify-items-center">Thank you for taking our survey!</div>
                }
                <div className="grid justify-items-center">
                    {error && <div className="text-red-500">{error}</div>}
                    {displayIndex < Prompts.length
                        ? <button className="border-2 w-20 rounded-lg my-3" onClick={() => {handleNext(userInput)}}>Next</button>
                        : <button className="border-2 w-auto px-3 py-1 rounded-lg my-3 shadow-lg" onClick={() => {handleSubmit()}}>Show my results</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Survey;