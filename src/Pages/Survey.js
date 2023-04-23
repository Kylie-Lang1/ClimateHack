import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Questions } from '../Components/Questions';
import Prompts from '../Data/Prompts';

function Survey({ results, setResults }) {
    const [displayIndex, setDisplayIndex] = useState(0)
    const [question, setQuestion] = useState(Prompts[0] )
    const [userInput, setUserInput] = useState()

    const navigate = useNavigate()

    useEffect (() => {
        setQuestion(Prompts[displayIndex])
    }, [displayIndex])

    const handleNext = (userScore) => {
        const score = Prompts[displayIndex].type === "negative" ? userScore * -1 : userScore * 1

        setResults([
            ...results,
            {
                id: Prompts[displayIndex].id,
                category: Prompts[displayIndex].category,
                area: Prompts[displayIndex].area,
                score: score
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
                            question={question.question}
                            answers={question.answers}
                            category={question.area}
                            setUserInput={setUserInput}
                        />
                    </> 
                    : <div>Thank you for taking our survey!</div>
                }

                {displayIndex < Prompts.length
                    ? <button className="justify-items-center border-2 w-20 rounded-lg" onClick={() => {handleNext(userInput)}}>Next</button>
                    : <button className="justify-items-center border-2 w-20 rounded-lg" onClick={() => {handleSubmit()}}>Submit</button>
                }

            </div>
        </div>
    );
}

export default Survey;