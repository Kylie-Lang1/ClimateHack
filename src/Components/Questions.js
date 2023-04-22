export const Questions = ({ question, answers, category }) => {
	return (
		<div className='w-3/4 m-auto border'>
			<p className="text-center font-bold pb-3 pt-5">Category: {category}</p>
			<div className="w-3/4 m-auto pb-2">{question}</div>
			<div className="w-3/4 m-auto pl-10 pb-5">
				{answers.map((answer) => (
					<div>
						<input type="radio" id={answer} name={question} value={answer} />
						<label for={answer}>{answer}</label>
					</div>
				))}
			</div>
		</div>
	);
}

export default Questions