import Prompts from '../Data/Prompts';
import { useState, useEffect } from "react";
import { Questions } from '../Components/Questions';

function Survey() {
    const [displayIndex, setDisplayIndex] = useState(0)
    // const [questionDisplayed, setQuestionDisplayed] = useState(Prompts[0].question)
    // const [answersDisplayed, setAnswersDisplayed] = useState(Prompts[0].answers)
    const [question, setQuestion] = useState(Prompts[0] )

    useEffect (() => {
        // setQuestionDisplayed(Prompts[displayIndex].question)
        // setAnswersDisplayed(Prompts[displayIndex].answers)
        setQuestion(Prompts[displayIndex])
    }, [displayIndex //, questionDisplayed, answersDisplayed
])

    console.log(Prompts[displayIndex])

    return (
        <div className='mt-20'>
            {(displayIndex < Prompts.length && displayIndex >= 0) 
                ? <>
                    <Questions 
                        question={question.question}
                        answers={question.answers}
                        category={question.area}
                    />
                </> 
                : <>
                    <div>Thank you for taking our survey!</div>
                </>
            }

            <button
                onClick={() => {setDisplayIndex(displayIndex + 1)}}
                className="justify-items-center border-2 w-20 rounded-lg"
            >
                Submit
            </button>
        </div>
    );
}

export default Survey;