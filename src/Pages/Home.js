import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='w-5/6 px-6 py-10 my-16 m-auto mb-2 text-center'>
            <h1>Welcome to Carbon Füutprint!</h1>
            <p>We are here to help you calculate your individual carbon footprint and provide solutions to reduce it.</p>
            <Link to="/survey">
                <button className="border-2 w-auto px-3 py-1 rounded-lg my-3 shadow-lg">Take the Survey</button>
            </Link>
        </div>
    );
}

export default Home;