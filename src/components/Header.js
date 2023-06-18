import logo from '../img/logo.jpg'
import Nav from './Nav.js'


function Header(){

    return(

        <header>
            <a href='/'>
                <img src={logo} className="logo" alt="Sleek Property Logo" />
            </a>
            <Nav />
        </header>

    )
}

export default Header;