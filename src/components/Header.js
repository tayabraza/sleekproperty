import logo from '../img/logo.jpg'
import Nav from './Nav.js'


function Header(){

    return(

        <header>
            <img src={logo} className="logo" alt="logo" />
            <Nav />
        </header>

    )
}

export default Header;