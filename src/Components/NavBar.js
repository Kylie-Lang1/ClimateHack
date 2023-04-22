import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
            <Link to="/" >About</Link>
            <Link to="/survey">Take our Survey</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/actions">Take Action!</Link>
        </div>
    );
}

export default NavBar;