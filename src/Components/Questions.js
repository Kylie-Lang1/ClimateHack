import React from 'react'

export const Questions = ({ question, answers, setUserInput }) => {

	const handleInputChange = (event) => {
		console.log(event.target.value);
		setUserInput(event.target.value);
	}

	return (
		<div className='m-4'>
			<div>{question}</div>
			{answers.map((answer) => (
				<div>
					<input type="radio"
						id={answer}
						name={question}
						value={answers.indexOf(answer)}
						onChange={handleInputChange}
					/>
					<label>{answer}</label>
				</div>
			))}
		</div>
	);
}

export default Questions