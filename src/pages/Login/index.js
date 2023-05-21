import './Login.css';
import crossIcon from '../../images/olx-window-cross.png';
import backIcon from '../../images/back-button-icon.png';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useState } from 'react';


export default function Login( {setParentState} ) {
    const [onMain, setOnMain] = useState(0);  // 0 for main; 1 for signin; 2 for signup
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [regSuccess, setRegSuccess] = useState(false);

    { regSuccess && alert("The User has registered Successfully!") }
    { isLoggedIn && alert("The User is now Logged In!") }

    { (regSuccess || isLoggedIn) && setParentState(false) }

    return (
        <div>
            <div id="loginWindow" role="document">
                <div id="navBar">
                    {onMain === 0? <span></span> : 
                        <img onClick={ () => setOnMain(0) } 
                            src={backIcon} alt="back" height={25} width={25} id="backIcon" />}
                    <img onClick={ () => setParentState(false) } 
                            src={crossIcon} alt="cross" height={25} width={25} id="crossIcon" />
                </div>
                
                <div id="mainArea">
                    {onMain === 0 && <Main setParentState={(num) => setOnMain(num)} />}
                    {onMain === 1 && <SignIn setParentState={(bool) => setIsLoggedIn(bool) } />}
                    {onMain === 2 && <SignUp setParentState={(bool) => setRegSuccess(bool) } />}
                </div>

            </div>
        </div>
    );
}