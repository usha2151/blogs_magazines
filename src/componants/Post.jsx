import React, { useState } from "react";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
import { addDoc, collection } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";


  
  const editorConfig = {
    readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
    uploader: {
      insertImageAsBase64URI: true
    },
    width: 1300,
    height: 342
  };




const Post = () => {

	  const [data, setData] = useState("");
    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title == '' || data == '' || cat == ''){
          alert("form filled!");
        }
        else{
          // var c = document.getElementById("ab").innerHTML =`<div>${data}</div>`;

          
          let collectionName = "";
          if (cat === "blog") {
            collectionName = "blog";
          } else if (cat === "magazine") {
            collectionName = "magazine";
          } else if (cat === "interview") {
            collectionName = "interview";
          }

           addDoc(collection(db, collectionName), {
           title:title,
           Content:data,
           date: serverTimestamp()
           }).then((res)=>{
            alert("post add");
            console.log(res);
           }).catch((err)=>{
            alert(err);
        })
        }
        }
        
        
   

  
  return (
    <div className="mx-w-sm ">
      <div class="p-8 rounded  w-[70%] mx-auto mt-8 shadow">
        <h1 class="font-medium text-3xl">Add Post</h1>
        <form>
          <div class="mt-8 grid lg:grid-cols-1 gap-4">
            <div>
              <label
                for="name"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
              Post Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e)=>{setTitle(e.target.value)}}
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="title"
              />
            </div>
            <div>
              <label
                for="email"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Post Content
              </label>
              <JoditEditor
              value={data}
              config={editorConfig}
              onChange={(value) => setData(value)}
              />

            </div>
            <div>
              <label
                for="countries"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Post Type
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={cat}
                onChange={(e)=>{setCat(e.target.value)}}
              >
                <option selected>Choose</option>{" "}
                <option value="blog">Blog</option>{" "}
                <option value="magazine">Magazine</option>{" "}
                <option value="interview">Interview</option>{" "}
              </select>
            </div>

          </div>
          <div class="space-x-4 mt-8 ">
            <button
              type="submit"
              class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
              onClick={handleSubmit}
            >
              POST
            </button>
            <button class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50" >
              RESET
            </button>
          </div>
        </form>
        <p id="ab mt-4"></p>
      </div> 
    </div>
  );
};

export default Post;
