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
    console.log('Users in component:', talkshow);
  return (
    <>
        <div className="w-[1300px] mx-auto mt-8 p-12">
    {talkshow && talkshow.length > 0 ? (
      talkshow.map((element, id) => (
        <div key={id}>
          <h3 className="text-3xl mb-8">{element.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: element.content }} />
          {/* <div dangerouslySetInnerHTML={{ __html: element.video }} /> */}
           <iframe src={element.video} frameborder="0" allowfullscreen></iframe>
          <h1>{element.tags}</h1>
          <img src={element.image}></img>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
  </div>
    </>
  )
}

export default Talkshow