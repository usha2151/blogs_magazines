import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const Magazine = () => {

    const [magazine, setMagazine] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "magazine")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      
      setMagazine(newData);
      console.log(Magazine);
    });
  };

  useEffect(()=>{
    fetchPost();
}, [])

  return (
    <div className="w-[1300px] mx-auto mt-8 p-12">
    {magazine.map((element, id) => (
      <div key={id}>
        <h3 className="text-3xl mb-8">{element.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: element.Content }} />
      </div>
    ))}
  </div>
  )
}

export default Magazine
