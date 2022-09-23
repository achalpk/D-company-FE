import React, {Link, useHistory} from "react-router-dom"
import './header.css';
import logo from '../../assets/images/logo.jpg';

function Header(){
    const navLink=['Service', 'About us', 'Contact us'];
    const history = useHistory();
    const Username = sessionStorage.getItem('username');
    const isAuth = sessionStorage.getItem('isAuth');

    const logout = ()=>{
        sessionStorage.removeItem('isAuth');
        sessionStorage.removeItem('username');
        localStorage.removeItem('Token');
        history.push('/')
    }
    
    return(
        <nav className="navbar">
            <Link to='/' className="logo-img">
                <img src={logo} alt="Logo" /><span>Company</span>
            </Link>
            <div className="links">

                {navLink.map(navitems=>{return(
                                                <Link to={{pathname:`/home/${navitems}`}} key={navitems} className="link-item">
                                                    {navitems}
                                                </Link>
                )})}
                <Link className="link-item" to='/employees'>Teams</Link>
                <Link className="link-item" to='/profile'>{isAuth === 'false' ? 'Profile' : `Profile(${Username})`}</Link>
                <Link className="link-item" to='/feedback'>Feedback</Link>
                {isAuth === 'false' ? <Link className="link-item" to='/login'>LogIn</Link>: <p className="link-item" onClick={logout} >LogOut</p>}
            
            </div>
        </nav>
    );
}

export default Header;