import '../Styles/NavBar.css'
import {Link} from 'react-scroll'
function NavBar () {
    return(
        <div className='navbar-container'>
            <div>
                <li><Link to='Home'>Home</Link></li>
                <li><Link to='about' smooth={true}>About</Link></li>
                <li><Link to='questions' smooth={true}>Contact</Link></li>
            </div>
            <div>

            </div>
        </div>
    )
}
export default NavBar;