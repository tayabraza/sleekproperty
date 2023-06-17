import dps from '../img/dps.png';
import prs from '../img/prs.png';
import ico from '../img/ico.jpg';

function Footer(){

    return(

        <footer>

            <div className="company-logos">
                <img src={dps} alt="DPS" />
                <img src={prs} alt="PRS" />
                <img src={ico} alt="ICO" />
            </div>

            <p className="copyright">Sleek Property <span style={{color: '#ffffff'}}> © {new Date().getFullYear()} </span></p>
        </footer>

    )

}

export default Footer;