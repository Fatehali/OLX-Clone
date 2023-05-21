import './SignIn.css';
import blackOLXLogo from '../../../images/olx-logo-new.png';
import { useState } from 'react';
import { loginUser } from '../../../config/firebase';
import Loader from '../../../components/Loader';

export default function SignIn( {setParentState} ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    return (
        <div id="mainDiv">
            <div id="title">
                <img src={blackOLXLogo} alt="Main OLX logo" height="25" width='50' id="mainolxlogo" />
                <span id="firstspan">Enter Credentials</span>
            </div>

            <form id="signInForm">
                <input onChange={ (e) => setEmail(e.target.value) } type='email' placeholder="Email" />
                <input onChange={ (e) => setPassword(e.target.value) } type='password' placeholder="Password" />
                
                { (verify(email) && (password.length > 5)) ?
                        <button type='button' onClick={ () => authenticate(email, password) }>Submit</button> :
                        <button type='button' disabled>Submit</button>      
                }
                
                <span>We won't reveal your email to anyone else nor use it to send you spam.</span>
            </form>
            {submitted && <Loader />}
        </div>
    );

    function verify(email) {
        return ( email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )? true : false
        );    
    }

    async function authenticate(em, pass) {
        setSubmitted(true);
        const userObj = await loginUser(em, pass);
        userObj.loggedIn? setParentState(true) : alert(userObj.msg);
    }
}