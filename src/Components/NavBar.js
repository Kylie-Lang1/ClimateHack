import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav">
            <Link href="/" >About</Link>
            <Link href="/survey">Take our Survey</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/actions">Take Action!</Link>
        </div>
    );
}

export default NavBar;