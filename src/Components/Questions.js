import React from 'react'

export const Questions = ({ question, answers}) => {
	return (
		<div className='mx-auto border-4 border-black'>
			<div>{question}</div>
			{answers.map((answer) => (
				<div>
					<input type="radio" id={answer} name={question} value={answer} />
					<label for={answer}>{answer}</label>
				</div>
			))}
		</div>
	);
}

export default Questions