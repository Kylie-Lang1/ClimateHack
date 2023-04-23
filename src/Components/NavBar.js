import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="py-8 flex bg-blue-200 text-gray-800 text-xl text-right">
            <Link to="/" className="w-1/2">About</Link>
            <Link to="/survey" className="w-1/4">Take our Survey</Link>
            <Link to="/solutions" className="w-1/4">Solutions</Link>
            <Link to="/actions" className="w-1/4">Take Action!</Link>
        </div>
    );
}

export default NavBar;