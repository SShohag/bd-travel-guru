import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

export const initializeLoginFramework = ()=>{
    if ( firebase.apps.length ===0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handelGoogleSignIn = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then ( res => {
        const { displayName, email} = res.user;

        const signInUser = {
            isSignedIn:true,
            name:displayName,
            email:email,
            success:true
        }
        return signInUser;
    }) 
    .catch(err =>{
        console.log(err);
        console.log(err.message);
    })       
}

export const handleFbLogin = ()=> {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider)
    .then(res => {
        console.log(res.user)
        const {displayName, email} =res.user;

        const fbSignInUser = {
            isFbSignIn:true,
            name:displayName,
            email:email,
            success:true
        } 
        return fbSignInUser;
        
      }).catch(err => {
        console.log(err);
      });
}

export const handleGoogleSignOut = ()=>{
    return firebase.auth().signOut()
    .then (res =>{
        const signOutUser = {
            isSignedIn:false,
            name:'',
            email:'',
            success:false
        }
        return signOutUser;
    })
}

export const handleFbLogOut = ()=>{
    return firebase.auth().signOut()
    .then(res => {
       const fbSignOutUser={
        isFbSignIn:false,
        name:'',
        email:'',
        success:false
       }
       return fbSignOutUser;
      }).catch(function(error) {
       console.log(error);
      });
}

 export const createUserWithEmailAndPassword =(name, email, password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)
            .then ( res =>{
                const newUserInfo = res.user;
                newUserInfo.success = true;
                newUserInfo.error = '';
                updateName(name)
                return newUserInfo;
            })
            .catch(error => {
                const newUserInfo = {};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                return newUserInfo;
              });
}

export const signInWithEmailAndPassword = (email, password)=>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
            .then( res =>{
                const newUserInfo = res.user;
                newUserInfo.success = true;
                newUserInfo.error = '';
                return newUserInfo;
            })
            .catch(error=> {
                const newUserInfo = {};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                return newUserInfo;
              });
}

const updateName= name =>{
    var user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: name,
    }).then(function() {
    console.log('Name Found')
    }).catch(function(error) {
    console.log(error);
    });
}
