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
            <h2>About us</h2>
            <ul>
                <li>
                    Hi, I'm Kylie Lang and I'm here to tell you about my new climate change app.
                    Climate change is one of the most pressing issues of our time. It's a global problem that affects us all, and it's up to us to take action and make a difference.
                    That's why I created my climate change app. It's designed to help people learn more about the issue and take action to reduce their carbon footprint.
                    The app provides users with easy-to-understand information about climate change, including the latest research and news. It also offers practical advice on how to reduce your carbon footprint, like switching to renewable energy sources, using public transportation, and reducing your consumption of single-use plastics.
                    The app also includes a carbon calculator, so you can track your carbon emissions and see how your lifestyle choices are impacting the environment.
                    Finally, the app provides users with a platform to connect with others who are passionate about climate change. You can join conversations, share your ideas, and find ways to get involved in the fight against climate change.
                    So if you're looking for a way to make a difference and take action on climate change, my app is the perfect solution. Download it today and join the fight against climate change!
                </li>
            </ul>
        </div>
    );
}

export default Home;