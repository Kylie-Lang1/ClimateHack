import { useState } from "react";
import { Link } from "react-router-dom";
import footprintLogo from '../Assets/footprint.png';

const homePage = {
	key: 'homePage',
	text: 'About',
	ariaLabel: 'About',
	href: '/'
}

const surveyPage = {
	key: 'surveyPage',
	text: 'Take our Survey',
	ariaLabel: 'Survey page',
	href: '/survey'
}

// const solutionsPage = {
// 	key: 'solutionsPage',
// 	text: 'Solutions',
// 	ariaLabel: 'Solutions page',
// 	href: '/solutions'
// }

const actionsPage = {
	key: 'actionsPage',
	text: 'Take Action!',
	ariaLabel: 'Actions page',
	href: '/actions'
}

const Header = () => {
	const [itemsFar] = useState([
		homePage,
		surveyPage,
		// solutionsPage,
		actionsPage,
	]);

	return (
		<div className='p-5 shadow-2xl flex flex-row overflow-hidden' aria-label='Header'>
			<img src={footprintLogo} alt={"logo"} className='h-12 w-auto mt-1 self-center' />

			<div className='grow flex items-center justify-center' />

			<div className='pr-2 float-right flex items-center justify-center text-xl overflow-hidden tracking-wide'>
				{itemsFar.map((item) =>
					<div key={item.key} className='mx-6 flex items-center justify-center hover:no-underline rtl:flex-row-reverse'>
						<Link key={item.key} to={item.href} aria-label={item.ariaLabel}>
							<b>{item.text}</b>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
