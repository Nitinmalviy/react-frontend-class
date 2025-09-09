import { Link } from "react-router-dom";

function Navbar() {
    return <>
        <nav className="nav-container">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/shop"}>Shop</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    </>
}

export default Navbar;