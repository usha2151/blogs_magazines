import { db } from "../../firebase";
import { addDoc, collection, doc, getDocs, query, getDoc } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { useState } from "react";


export const REGISTER_USER = 'REGISTER_USER';
export const GET_BLOG = 'GET_BLOG';
export const GET_MAGAZINE = 'GET_MAGAZINE';
export const GET_INTERVIEW = 'GET_INTERVIEW';
export const GET_INTERVIEWID = 'GET_INTERVIEWID';
export const GET_BLOGID = 'GET_BLOGID';
export const GET_MAGAZINEID = 'GET_MAGAZINEID';


   // This is for store data from post form
export const registerUser = (userData) => {

    return async (dispatch) => {
      try {
        let collectionName = "";
        if (userData.cat === "blog") {
          const storageRef = ref(storage, `/blogImages/${userData.imagename}`);
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
             
  
          addDoc(collection(db , "blog"), {
            title: userData.title,
            content: userData.content,
            description: userData.description,
            date: serverTimestamp(),
            image:url,
            tags:userData.tags

          }
           )
        .then(() => {
          alert("blog uploaded successfully!");
        }).catch((err) => { alert(err); })
      });
     });
        } else if (userData.cat === "magazine") {
          const storageRefImage = ref(storage, `/magazine/images/${userData.imagename}`);
          const uploadTaskImage = uploadBytesResumable(storageRefImage, userData.image);
          
          uploadTaskImage.on(
            "state_changed",
            (snapshot) => {
              const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              // Update your UI with the image upload progress if needed
            },
            (err) => {
              console.log(err);
            },
            () => {
              // Image upload complete, now upload the PDF
          
              const storageRefPdf = ref(storage, `/magazine/pdf/${userData.pdfName}`);
              const uploadTaskPdf = uploadBytesResumable(storageRefPdf, userData.pdf);
          
              uploadTaskPdf.on(
                "state_changed",
                (snapshot) => {
                  // Handle PDF upload progress if needed
                },
                (err) => {
                  console.log(err);
                },
                async () => {
                  // Both image and PDF uploads are complete, get the download URLs
                  const imageUrl = await getDownloadURL(uploadTaskImage.snapshot.ref);
                  const pdfUrl = await getDownloadURL(uploadTaskPdf.snapshot.ref);
          
                  // Now, add data to Firestore
                  addDoc(collection(db, "magazine"), {
                    title: userData.title,
                    content: userData.content,
                    description: userData.description,
                    pdf: pdfUrl,
                    tags:userData.tags,
                    date: serverTimestamp(),
                    coverImage: imageUrl
                  })
                    .then(() => {
                      alert("Magazine uploaded successfully!");
                    })
                    .catch((err) => {
                      alert(err);
                    });
                }
              );
            }
          );
          
         
        } else if (userData.cat === "interview") {
          collectionName = "interview";
        }
        else if (userData.cat === "calender") {
          const storageRef = ref(storage, `/calenderImages/${userData.imagename}`);
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
             
  
          addDoc(collection(db , "calender"), {
            title: userData.title,
            content: userData.content,
            description: userData.description,
            date: serverTimestamp(),
            year:userData.year,
            Additional : {
              size:userData.size,
              weight:userData.weight
            },
            image:url,
            tags:userData.tags
          }
           )
        .then(() => {
          alert("calender uploaded successfully!");
        }).catch((err) => { alert(err); })
      });
     });
          
        }
        else if (userData.cat === "talkshow") {
          const storageRef = ref(storage, `/talkshowImages/${userData.imagename}`);
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
             
  
          addDoc(collection(db , "talkshow"), {
            title: userData.title,
            content: userData.content,
            date: serverTimestamp(),
            video:userData.video,
            image:url,
            tags:userData.tags
          }
           )
        .then(() => {
          alert("talkshow uploaded successfully!");
        }).catch((err) => { alert(err); })
      });
     });
          
        }
    
  
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
      const usersArray = users.docs.map((snap) => ({
        id: snap.id,
        ...snap.data(),
      }));

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
      const usersArray = users.docs.map((snap) => ({
        id: snap.id,
        ...snap.data(),
      }));

      dispatch({
        type: GET_MAGAZINE,
        payload: usersArray,
      });

      console.log('Fetched users mag:', usersArray);
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
      const usersArray = users.docs.map((snap) => ({
        id: snap.id,
        ...snap.data(),
      }));

      dispatch({
        type: GET_INTERVIEW,
        payload: usersArray,
      });

      console.log('Fetched users inter:', usersArray);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error and dispatch an error action if needed
  }
};



// fetch single interview data 
export const getInterviewId = (id) => async (dispatch) => {
  try {
    const docRef = doc(db, 'interview', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = {
        id: docSnap.id,
        ...docSnap.data(),
      };

      dispatch({
        type: GET_INTERVIEWID,
        payload: [userData],
      });

      console.log('Fetched interview single data:', userData);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error and dispatch an error action if needed
  }
};


// fetch single blog data 
export const getBlogId = (id) => async (dispatch) => {
  try {
    const docRef = doc(db, 'blog', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = {
        id: docSnap.id,
        ...docSnap.data(),
      };

      dispatch({
        type: GET_BLOGID,
        payload: [userData],
      });

      console.log('Fetched blog single data:', userData);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error and dispatch an error action if needed
  }
};

  

// fetch single magazine data 
export const getMagazineId = (id) => async (dispatch) => {
  try {
    const docRef = doc(db, 'magazine', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = {
        id: docSnap.id,
        ...docSnap.data(),
      };

      dispatch({
        type: GET_MAGAZINEID,
        payload: [userData],
      });

      console.log('Fetched magazine single data:', userData);
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error and dispatch an error action if needed
  }
};
  
  

  