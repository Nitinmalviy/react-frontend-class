import { Link } from "react-router-dom";
import "./../style/navbar.css";
import logo from "./../assets/images/logo.jpg";

function Navbar() {
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-logo-container">
                    <h4 className="navbar-logo-title">
                        <img src={logo} height={50} width={50} alt="logo" />
                    </h4>
                </div>
                <ul className="navbar-menu-container">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
                <div className="navbar-auth-btn-container">
                    <button className="btn-sing-up">SingUp</button>
                    <button className="btn-login">Login</button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
