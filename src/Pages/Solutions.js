import { useNavigate } from 'react-router-dom';

function Solutions({ results }) {
    const navigate = useNavigate()

    return (
        <div className="w-2/3 m-auto border py-10 my-16">
            { results.length
                ? <>
                    <table className="w-3/4 m-auto">
                        <thead>
                            <tr>
                                <th >Prompt</th>
                                <th>Answer</th>
                                <th className="ml-3">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((result) => {
                                    return (
                                        <tr key={result.id}>
                                            <td>{result.question}</td>
                                            <td className="text-center">{result.answer}</td>
                                            <td className={result.score >= 0 ? 'text-green-600 text-right' : 'text-red-600 text-right'}>{result.score}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </>
                : <div className="grid justify-items-center">
                    <div className="grid justify-items-center">No user results found.</div>
                    <button className="border-2 w-auto px-3 py-1 rounded-lg my-3 shadow-lg" onClick={() => {navigate('/survey')}}>Take the Survey</button>
                </div>
            }
        </div>
    );
}

export default Solutions;