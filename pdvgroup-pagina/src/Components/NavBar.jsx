import "../Styles/NavBar.css";
import { Link } from "react-scroll";
function NavBar() {
    return (
        <div className='navbar-container'>
            <div className='items-container'>
                <li>
                    <Link to='Home'>Home</Link>
                </li>
                <li>
                    <Link to='about' smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='questions' smooth={true}>
                        Contact
                    </Link>
                </li>
            </div>
            <div className='logo-container'>
                <h1>PdvGroup</h1>
            </div>
        </div>
    );
}
export default NavBar;
