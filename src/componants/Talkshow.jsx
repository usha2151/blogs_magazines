// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getTalkshowId } from "../redux/actions/action";
// import { useParams } from "react-router-dom";


// const Talkshow = () => {
//     const dispatch = useDispatch();
//     const params = useParams();
//     const talkshow = useSelector((state) => state.talkshowIdReducer);
  
//     useEffect(() => {
//       dispatch(getTalkshowId(params.TalkshowId));
//     }, [dispatch]);
//     console.log('Users in component:', talkshow);
//   return (
//     <>
//         <div className="w-[1300px] mx-auto mt-8 p-12">
//     {talkshow && talkshow.length > 0 ? (
//       talkshow.map((element, id) => (
//         <div key={id}>
//           <h3 className="text-3xl mb-8">{element.title}</h3>
//           <div dangerouslySetInnerHTML={{ __html: element.content }} />
//           {/* <div dangerouslySetInnerHTML={{ __html: element.video }} /> */}
//            <iframe src={element.video} frameborder="0" allowfullscreen></iframe>
//           <h1>{element.tags}</h1>
//           <img src={element.image}></img>
//         </div>
//       ))
//     ) : (
//       <p>Loading...</p>
//     )}
//   </div>
//     </>
//   )
// }

// export default Talkshow
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTalkshowId } from "../redux/actions/action";
import { useParams } from "react-router-dom";

const Talkshow = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const talkshow = useSelector((state) => state.talkshowIdReducer);

  useEffect(() => {
    dispatch(getTalkshowId(params.TalkshowId));
  }, [dispatch]);

  console.log('Talkshow in component:', talkshow);

  return (
    <div className="w-[1300px] mx-auto mt-8 p-12">
      {talkshow && talkshow.length > 0 ? (
        talkshow.map((element, id) => (
          <div key={id}>
            <h3 className="text-3xl mb-8">{element.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: element.content }} />
            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                  element.video
                )}`}
                title={element.title}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
            <h1>{element.tags}</h1>
            <img src={element.image} alt={element.title} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// Function to extract YouTube video ID from a YouTube URL
function getYouTubeVideoId(url) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]+)/);
  return match ? match[1] : null;
}

export default Talkshow;
