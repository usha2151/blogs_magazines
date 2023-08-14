import { db } from "../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";


export const REGISTER_USER = 'REGISTER_USER';
export const GET_BLOG = 'GET_BLOG';
export const GET_MAGAZINE = 'GET_MAGAZINE';
export const GET_INTERVIEW = 'GET_INTERVIEW';


   // This is for store data from post form
export const registerUser = (userData) => {
    return async (dispatch) => {
      try {
        let collectionName = "";
        if (userData.cat === "blog") {
          collectionName = "blog";
        } else if (userData.cat === "magazine") {
          collectionName = "magazine";
        } else if (userData.cat === "interview") {
          collectionName = "interview";
        }
        const storageRef = ref(storage, `/images/${userData.imagename}`);
        const uploadTask = uploadBytesResumable(storageRef, userData.image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

          },
          (err) => console.log(err),
          () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {

        addDoc(collection(db , collectionName),{
          title: userData.title,
          content: userData.content,
          description: userData.description,
          image: url,
          date: serverTimestamp()
      })
      .then(() => {
        alert("uploaded successfully!");
      }).catch((err) => { alert(err); })
    });
   });
  
        // Dispatch action to update Redux state
        dispatch({
          type: 'REGISTER_USER',
          payload: userData
        });

        alert("done");
      } catch (error) {
        console.error('Error registering user:', error);
      }
    };
  };





// Fetch blog data
export const getBlog = () => async (dispatch) => {
  try {
    const q = query(collection(db, 'blog'));
    const users = await getDocs(q);

    if (users.docs.length > 0) {
      const usersArray = users.docs.map((snap) => snap.data());

      dispatch({
        type: GET_BLOG,
        payload: usersArray,
      });

      console.log('Fetched users:', usersArray);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error and dispatch an error action if needed
  }
};



// Fetch blog magazine
export const getMagazine = () => async (dispatch) => {
  try {
    const q = query(collection(db, 'magazine'));
    const users = await getDocs(q);

    if (users.docs.length > 0) {
      const usersArray = users.docs.map((snap) => snap.data());

      dispatch({
        type: GET_MAGAZINE,
        payload: usersArray,
      });

      console.log('Fetched users:', usersArray);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error and dispatch an error action if needed
  }
};



// Fetch blog interview
  export const getInterview = () => async (dispatch) => {
    try {
      const q = query(collection(db, 'interview'));
      const users = await getDocs(q);
  
      if (users.docs.length > 0) {
        const usersArray = users.docs.map((snap) => snap.data());
  
        dispatch({
          type: GET_INTERVIEW,
          payload: usersArray,
        });
  
        console.log('Fetched users:', usersArray);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle error and dispatch an error action if needed
    }
  };
  
  
  
  

  