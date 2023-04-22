import React from 'react';
import { Questions } from '../Components/Questions';
import Prompts from '../Data/Prompts';

function Survey() {
    return (
        <div>
            {
                Prompts.map((prompt) => (
                    <Questions question={prompt.question} answers={prompt.answers} />
                ))
            }
        </div>
    );
}

export default Survey;