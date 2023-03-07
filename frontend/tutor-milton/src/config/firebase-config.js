import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAPHfLRVwiyFCPaJdcOabfNKF5J23L-2Hc",
    authDomain: "milton-tutor.firebaseapp.com",
    projectId: "milton-tutor",
    storageBucket: "milton-tutor.appspot.com",
    messagingSenderId: "359882636602",
    appId: "1:359882636602:web:40073c0f7b9b748e31a403",
    measurementId: "G-PVHQHRBWKV"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const auth = app.auth();
  const db = app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  logout,
  firebase,
};

//   firebase.initializeApp(firebaseConfig)
//   firebase.analytics();

// export default firebase;