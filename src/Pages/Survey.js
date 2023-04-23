import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Questions } from '../Components/Questions';
import Prompts from '../Data/Prompts';

function Survey({ results, setResults }) {
    const [displayIndex, setDisplayIndex] = useState(0)
    const [question, setQuestion] = useState(Prompts[0])
    const [userInput, setUserInput] = useState({})

    const navigate = useNavigate()

    useEffect (() => {
        setQuestion(Prompts[displayIndex])
    }, [displayIndex])

    const handleNext = (userInput) => {
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
    }

    const handleSubmit = () => {
        navigate('/solutions')
    }

    console.log(results)
    return (
        <div className='mt-20'>
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
                    : <div>Thank you for taking our survey!</div>
                }
                <div className="grid justify-items-center">
                    {displayIndex < Prompts.length
                        ? <button className="border-2 w-20 rounded-lg my-5" onClick={() => {handleNext(userInput)}}>Next</button>
                        : <button className="border-2 w-20 rounded-lg my-5" onClick={() => {handleSubmit()}}>Submit</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Survey;