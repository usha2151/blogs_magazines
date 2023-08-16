import React, { useState } from "react";
import "jodit";
import "jodit/build/jodit.min.css";
import JoditEditor from "jodit-react";
// import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { registerUser } from "../redux/actions/action";
// import { db } from "../firebase";


  
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

  const dispatch = useDispatch();
  
	  const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [year, setYear] = useState("");
    const [catRole, setcatRole] = useState("");
   const [weight, setweight] = useState("");
   const [size, setsize] = useState("");
  const [pdf, setPdf] = useState("");
   const [tags, setTags] = useState("");
   const [video, setVideos] = useState("");
    const handleSubmit = (e) =>{
      
      try {
        e.preventDefault();
        console.log(image);
        // if(title == '' || content == '' || cat == ''){
          let data={
            title,content,imagename: image.name,image,cat,description,year,size,pdf,weight, pdfName:pdf.name,tags,video
        }
        dispatch(registerUser(data));
        setTitle('');
        setContent('');
        setImage('');    
      } catch(err){
        alert(err)
      }
      }
        
        const handleImageChange = (e) => {
          const file = e.target.files[0];
          setImage(file);
        };
       const handlePdf = (e) =>{
        const file = e.target.files[0];
        console.log(file.name)
        setPdf(file);
       }
// check category
const handleChange = (e) => {
  setCat(e.target.value);
  if(e.target.value == "blog"){
    setcatRole("blog")
  }
  else if(e.target.value == "magazine"){
    setcatRole("magazine")
  }
  else if(e.target.value == "interview"){
    setcatRole("interview")
  }
  else if(e.target.value == "talkshow"){
    setcatRole("talkshow")
  }
  else if(e.target.value == "calender"){
    setcatRole("calender")
  }

}
  
  return (
    <div className="mx-w-sm ">
      <div class="p-8 rounded  w-[70%] mx-auto mt-8 shadow">
        <h1 class="font-medium text-3xl">{catRole == "blog" ? 'Add Post' : ''} {catRole == "magazine" ? 'Add Magazine' : ''} {catRole == "talkshow" ? 'Talkshow' : ''} {catRole == "calender" ? 'Add Calender' : ''}</h1>
        <form>
          <div class="mt-8 grid lg:grid-cols-1 gap-4">
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
                onChange={handleChange}
              >
                <option selected>Choose</option>{" "}
                <option value="blog">Blog</option>{" "}
                <option value="magazine">Magazine</option>{" "}
                {/* <option value="interview">Interview</option>{" "} */}
                <option value="talkshow">Talkshow</option>{" "}
                <option value="calender">Calender</option>{" "}
              </select>
            </div>
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
            {catRole == "magazine" || catRole == "blog" || catRole == "calender" ? 
             <div>
              <label
                for="name"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
              Post Description
              </label>
              <textarea
               cols="30"
                rows="2"
                type="text"
                name="name"
                id="name"
                onChange={(e)=>{setDescription(e.target.value)}}
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="title"
              >
              </textarea>
            </div>
             : ''}
           
            <div>
              <label
                for="email"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Post Content
              </label>
              <JoditEditor
              value={content}
              config={editorConfig}
              onChange={(value) => setContent(value)}
              />

            </div>
            <div>
              <label
                for="tags"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
              Tags
              </label>
              <input
                type="text"
                name="name"
                id="tags"
                onChange={(e)=>{setTags(e.target.value)}}
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Add Your Tags"
              />
            </div>
            {catRole =="talkshow" ? <div>
              <label
                for="video"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
              Video Link
              </label>
              <input
                type="text"
                name="name"
                id="video"
                onChange={(e)=>{setVideos(e.target.value)}}
                class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Video link"
              />
            </div> : ''}
            <div>
              <label
                for="categories"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Post Categories
              </label>
              <select
                id="categories"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={category}
                onChange={(e)=>{setCategory(e.target.value)}}
              >
                <option selected>Choose</option>{" "}
                <option value="funny">Funny</option>{" "}
                <option value="amazing">Amazing</option>{" "}
                <option value="horror">Horror</option>{" "}
              </select>
            </div>
{catRole == "calender" ? 
  <div>
  <label
    for="categories"
    class="text-sm text-gray-700 block mb-1 font-medium"
  >
    Year
  </label>
  <select
    id="categories"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    value={year}
    onChange={(e)=>{setYear(e.target.value)}}
  >
    <option selected>Choose Year</option>{" "}
    <option value="2023">2023</option>{" "}
    <option value="2022">2022</option>{" "}
    <option value="2021">2021</option>{" "}
  </select>
</div>
: ''}
 {catRole == "calender" ? 
            <div>
              
            <label
              for="add"
              class="text-sm text-gray-700 block mb-1 font-medium"
            >
            Additional Info:
            </label>
            <div>
           <div> <label
              for="add"
              class="text-sm text-gray-700 block mb-1 font-medium"
            >
            weight:
            </label>
            <input
              type="text"
              name="name"
              value={weight}
              id="add"
              onChange={(e)=>{setweight(e.target.value)}}
              class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-50"
              placeholder="weight"
            />
            </div>
            <div><label
              for="add"
              class="text-sm text-gray-700 block mb-1 font-medium"
            >
            size:
            </label></div>
            </div>
           
              <input
              type="text"
              name="name"
              value={size}
              id="add"
              onChange={(e)=>{setsize(e.target.value)}}
              class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-50"
              placeholder="size"
            />
          </div>
 : ''}
      
            <div>
         <label
                for="f-iamg"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                {catRole == "blog" ? 'Featured Image' : ''} {catRole == "magazine" ? 'cover Image' : ''} {catRole == "calender" ? 'image' : ''} {catRole == "talkshow" ? 'Featured Image' : ''}
              </label>
        <input type="file" onChange={handleImageChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      {catRole == "magazine" ? 
         <div>
         <label
                for="u-image"
                class="text-sm text-gray-700 block mb-1 font-medium"
              >
                Upload Pdf
              </label>
        <input type="file" onChange={handlePdf} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div> 
      : ''}
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
