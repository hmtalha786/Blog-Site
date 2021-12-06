import firebase from "gatsby-plugin-firebase";

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const googleLoginFun = () => {
  auth.signInWithPopup(provider).then((result: any) => {
    const user: any = result.user.displayName;
    return user;
  });
};
export { auth, provider, googleLoginFun };
