//This Will be the whole documentation for firebase setup for project.

/*
 * CRUD operation represent flow of data in-out of Application
 * C: CREATE DATA
 * R: READ DATA
 * U: UPDATE DATA
 * D: DELETE DATA
 */

//In order to access Firestore we will Firebase API
import { initializeApp } from "firebase/app";

//Import some important functions from Firebase API to add features like authentication storage + Storing/Fetching Data.
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

//Import some important methods to use Cloud Firestore effectively.
/*
doc: is actually needed to get documents from firestore database.
getDoc: to read the documents.
setDoc: to write the documents.
*/
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

//Inorder access firebase the required object
const firebaseConfig = {
  apiKey: "AIzaSyCY2Pm77l4zqI4BnqNrDix5HsuRJ1gxlSs",
  authDomain: "react-study-project-5f02d.firebaseapp.com",
  projectId: "react-study-project-5f02d",
  storageBucket: "react-study-project-5f02d.appspot.com",
  messagingSenderId: "289487239597",
  appId: "1:289487239597:web:71c3a0690af9b7599ac924",
};

//Initializing the firebase (Software development Kit)
const firebaseApp = initializeApp(firebaseConfig);
//Creates App instance for us. (help us to attach the instance we have on firebase)

//Initialize a Google provider
const googleProvider = new GoogleAuthProvider();
//Configuration for google provider to select account while sign in or sign Up. This will generate prompt.
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//We need to export out authentication to our components
export const auth = getAuth();

//We need to export signIn with pop up facility.
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//Working with Firestore

//Create instance for firestore;
export const db = getFirestore();

//This function will create the document in fire for all the user that signs in the application
/*
Since we all know this document is not present in firestore but google still return us object. Google did this because it points to something unique in database. Google want us to use this in order to create document in database.

*/
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  /*
   userSnapshot.exists() can be use to check wether Doc really exists in database or not.
   1. We checked wether document exists or not.
   2. if exists we just return the DocRef
   3. if not the we setDoc set the document in database. By using try-catch block.
  */
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(
        "Error 'utils/Firebase': Issue in creating Document in database"
      );
    }
  }
  return userDocRef;
};

//Create Authentication User with the help of Raw Email and Password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//Signing with email and password
export const signInWithAuthUserWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

//SignOut User
export const singOutUser = async () => await signOut(auth);