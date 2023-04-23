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

    const handleSubmit = (userScore) => {
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

    console.log(results)
    return (
        <div className='mt-20'>
            <div className='flex flex-col'>
                {(displayIndex < Prompts.length && displayIndex >= 0) 
                    ? <>
                        <Questions 
                            question={question.question}
                            answers={question.answers}
                            category={question.category}
                            setUserInput={setUserInput}
                        />
                    </> 
                    : <>
                        <div>Thank you for taking our survey!</div>
                        <button onClick={() => navigate('/solutions')}>See results</button>
                    </>
                }
                <div className='my-4 w-3/4 m-auto grid justify-items-stretch'>
                    <button className="justify-self-center border-2 w-20 rounded-lg m-auto" onClick={() => {handleSubmit(userInput)}}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Survey;