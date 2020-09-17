import React, { useContext, useState } from 'react';
import fbLogo from "../../Icon/fb.png"
import gglLogo from "../../Icon/google.png"
import './Login.css'
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handelGoogleSignIn, handleFbLogin, handleFbLogOut, handleGoogleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';


const Login = () => {

    const [fbUser, setFbUser] = useState ({
        isFbSignIn:false,
        name:'',
        email:''
    });
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn:false,
        name:'',
        email:'',
        password:'',
        error:'',
        success:false
    });

    initializeLoginFramework()

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //handling response
    const handleResponse = (res, redirect)=>{
        setUser(res);
        setLoggedInUser(res);
        if ( redirect){
            history.replace(from)
        }
    }
    
    const googleSignIn = ()=>{
        handelGoogleSignIn()
        .then (res=>{
            handleResponse(res, true);
        })
    }
    
    const signOut = ()=>{
        handleGoogleSignOut()
        .then( res =>{
            handleResponse(res, false);
        })
    }
    //Facebook login Area
    const fbLogIn = ()=>{
        handleFbLogin()
        .then ( res =>{
            handleResponse(res, true);
        })
    }

    const fbLogOut = ()=>{
        handleFbLogOut()
        .then ( res =>{
            handleResponse(res, false);
        })
    }

   //Handling from text with validation process
    const handleBlur = (e)=>{
        let isFieldValid = true;
        if ( e.target.name ==='email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if ( e.target.name === 'password'){
            const isPassLengthValid = e.target.value.length >6;
            const isPasswordValid = /\d{1}/.test(e.target.value);
            isFieldValid = isPassLengthValid && isPasswordValid;
        }
        if (isFieldValid){
            const newUser = {...user};
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }

    const handleSubmit = (e)=>{
        console.log(user.email, user.password);
        if (newUser && user.email && user.password){
            createUserWithEmailAndPassword(user.name, user.email, user.password)
            .then ( res =>{
                handleResponse(res, true);
            })
        }

        if ( !newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then ( res =>{
                handleResponse(res, true);
            })
        }

        e.preventDefault();
    }
    
    return (
        <div style={{textAlign:"center"}} >
            <h4> <b style={{fontSize:'30px'}}>Sign Up With Gmail Account</b> </h4>

            <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>
            <label htmlFor="newUser"> For Sign Up </label>

            <form className="login-form" onSubmit={handleSubmit} >
                {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Enter Your Name" required/>}
                <br/>
                <input type="text" name="email" onBlur={handleBlur} placeholder="Enter Your Email" required/>
                <br/>
                <input type="password" name="password" onBlur={handleBlur} placeholder="Enter Your Password"required/>
                <br/>
                <input type="submit" value={newUser ? 'Sign Up':'Sign In'}/>
            </form>
            <p style= {{color:'red'}} > {user.error} </p>
            {user.success && <p style= {{color:'green'}} > {newUser?'Sign Up':'Log In'} Successfully </p> }

            
             <p>----------------or--------------</p>
            {
                fbUser.isFbSignIn ?<button onClick={fbLogOut} >Log Out</button> :
                <button className="fg-btn" onClick={fbLogIn} > <img img className="btn-logo" src={fbLogo} alt=""/> Log in With Facebook</button>
            }
            <br/>
            {
                fbUser.isFbSignIn && 
                <div>
                    <h3> {fbUser.name} </h3>
                </div>
            }
            {
                user.isSignedIn ? <button onClick={signOut} > Sign Out from Google </button>
                :
                <button className="g-btn" onClick={googleSignIn} > <img className="btn-logo" src={gglLogo} alt=""/> Sign In with Google </button>
            }
            
            {
                user.isSignedIn && 
                <div>
                    <h2>Name : {user.name}</h2>
                    <h3> Email : {user.email} </h3>
                </div>
            }

        </div>
    );
};

export default Login;