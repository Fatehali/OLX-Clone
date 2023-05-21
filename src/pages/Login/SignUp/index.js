import './SignUp.css';
import blackOLXLogo from '../../../images/olx-logo-new.png';
import { useState } from 'react';
import { registerUser } from '../../../config/firebase';
import Loader from '../../../components/Loader';

export default function SignUp( {setParentState} ) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    return (
        <div id="mainDiv">
            <div id="title">
                <img src={blackOLXLogo} alt="Main OLX logo" height="25" width='50' id="mainolxlogo" />
                <span id="firstspan">Create an Account</span>
            </div>

            <div id="signUpForm">
                <input type='text' onChange={ (e) => setName(e.target.value) } placeholder='Full Name' id="fullName" />
                <input type='email' onChange={ (e) => setEmail(e.target.value) } placeholder="Email" id="email" />
                <input type='password' onChange={ (e) => setPassword(e.target.value) } placeholder="Password" id="pass" />
                <input type='password' onChange={ (e) => setRePassword(e.target.value) } placeholder="Re-enter Password" id="repass" />

                { (verifyName(name) && verifyEmail(email) && (password.length > 5) && (password===rePassword)) ?
                        <button type='button' onClick={ () => register(email, password) }>Submit</button> :
                        <button type='button' disabled>Submit</button>      
                }
                
                <span>We won't reveal your email to anyone else nor use it to send you spam.</span>
            </div>

            {submitted && <Loader />}
        </div>
    );

    function verifyEmail(email) {
        return ( email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )? true : false
        );    
    }

    function verifyName(name) {
        return ( name.match(/^[a-z ,.'-]+$/i)? true : false );    
    }

    async function register(em, pass) {
        setSubmitted(true);
        const userObj = await registerUser(em, pass, {name: name});
        userObj?.success? setParentState(true) : alert(userObj?.msg);
    }
}