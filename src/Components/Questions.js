export const Questions = ({ question, answers, category, setUserInput}) => {

	const handleInputChange = (event) => {
		setUserInput({
			answer: event.target.name,
			score: event.target.value
		});
	}

	return (
		<div className='w-3/4 m-auto border mb-2 mt-10 bg-white shadow-xl'>
			<p className="text-center font-bold pb-3 pt-5">Category: {category}</p>
			<div className="w-3/4 m-auto pb-2">{question}</div>
			<div className="w-3/4 m-auto pl-10 pb-5">
				{answers.map((answer) => (
					!!answer
					? (<div>
						<input type="radio"
							key={answer}
							id={answer}
							name={answer}
							value={answers.indexOf(answer)}
							onChange={handleInputChange}
						/>
						<label> {answer}</label>
					</div>)
					: null
				))}
			</div>
		</div>
	);
}

export default Questions