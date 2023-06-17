import { NavLink } from "react-router-dom"
import menuIcon from '../img/menuIcon.png'

function Nav(){

    const menuToggle = () => {

        document.querySelectorAll('.hamburger-menu ~ .nav-item').forEach( item => {

            window.getComputedStyle(item).display === 'none' ? item.style.display = 'block' : item.style.display = 'none'

        });

    }
    
    return (
        <nav>
            <ul className="nav-items">
                <li className="nav-item hamburger-menu" onClick={menuToggle}>
                    <img src={menuIcon} className="menu-icon" alt="Menu Icon" />
                </li>
                <li className="nav-item" onClick={menuToggle}>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li className="nav-item" onClick={menuToggle}>    
                    <NavLink to="/fees">Our Fees</NavLink>
                </li>
                <li className="nav-item" onClick={menuToggle}>        
                    <NavLink to="/services">Services</NavLink>
                </li>
                {/* <li className="nav-item" onClick={menuToggle}>       
                    <NavLink to="/reviews">Reviews</NavLink>
                </li> */}
                <li className="nav-item" onClick={menuToggle}>       
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;



