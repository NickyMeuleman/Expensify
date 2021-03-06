import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = ({ uid, displayName, photoURL }) => ({
  type: 'LOGIN',
  uid,
  displayName,
  photoURL,
});

export const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);
export const startFacebookLogin = () => () => firebase.auth().signInWithPopup(facebookAuthProvider);

export const logout = () => ({ type: 'LOGOUT' });

export const startLogout = () => () => firebase.auth().signOut();
