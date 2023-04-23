import { useNavigate, Link } from 'react-router-dom';
import { Slider } from '../Components/Slider';

function Solutions({ results }) {
    const navigate = useNavigate()

    return (
        <div className="w-5/6 m-auto border py-10 my-16">
            { results.length
                ? <>
                    <table className="w-5/6 m-auto">
                        <thead>
                            <tr>
                                <th>Prompt</th>
                                <th>Answer</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((result) => {
                                    return (
                                        <tr key={result.id}>
                                            <td>{result.question}</td>
                                            <td className="text-center">{result.answer}</td>
                                            
                                            <td className={result.score >= 0 ? 'text-green-600 text-left' : 'text-red-600 text-left'}><Slider score={result.score} /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <Link to="/actions" className='py-5'>
                        <button className='my-5 bg-green-200 ml-20 border rounded-md px-5'>Find out how you can reduce your footprint!</button>
                    </Link>
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
