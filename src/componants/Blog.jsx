import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "blog")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      
      setBlog(newData);
      console.log(blog);
    });
  };

  useEffect(()=>{
    fetchPost();
}, [])


  return (
    <div className="lg:w-[1300px]  mx-auto mt-12 p-12">
    {blog.map((element, id) => (
      <div key={id}>
        <h3 className="text-3xl mb-8">{element.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: element.Content }} />
      </div>
    ))}
  </div>

  );
};

export default Blog;
