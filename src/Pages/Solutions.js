function Solutions({ results }) {
    return (
        <div>
            {
                results.length ?
                    <>    
                        <table>
                            <thead>
                                <tr>
                                    <th>Propmt</th>
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
                        : null
        }
        </div>
    );
}

export default Solutions;