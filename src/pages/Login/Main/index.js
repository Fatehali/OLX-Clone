import './Main.css';
import blackOLXLogo from '../../../images/olx-logo-new.png';

export default function Main( {setParentState} ) {
    return (
        <div id="mainDiv">
            <div id="title">
                <img src={blackOLXLogo} alt="Main OLX logo" height="75" width='140' id="mainolxlogo" />
                <span id="firstspan">WELCOME TO OLX</span>
                <span id="secondspan">The trusted community of buyers and sellers.</span>
            </div>
            <div id="links">
                <button onClick={ () => setParentState(1) } type="submit">Sign In</button>
                <button onClick={ () => setParentState(2) } type="submit">Sign Up with Email</button>
                
                <span id="text">
                    By continuing, you are accepting <br />
                    <a rel="noopener noreferrer" target="_blank" 
                    href="https://help.olx.com.pk/hc/en-us/articles/4402989977487-What-are-the-terms-of-use-">
                        OLX Terms of use
                    </a> and <a rel="noopener noreferrer" target="_blank" 
                    href="https://help.olx.com.pk/hc/en-us/categories/4402989237007-Legal-Privacy-information">
                        Privacy Policy
                    </a>
                </span>
            </div>
        </div>
    );
}