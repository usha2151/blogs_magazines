import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInterviewId } from "../redux/actions/action";
import { useParams } from "react-router-dom";

const Interview = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const users = useSelector((state) => state.interviewIdReducer);

  useEffect(() => {
    dispatch(getInterviewId(params.InterviewId));
  }, [dispatch]);

  console.log('Users in component:', users);

  return (
    <div className="w-[1300px] mx-auto mt-8 p-12">
      {users && users.length > 0 ? (
        users.map((element, id) => (
          <div key={id}>
            <h3 className="text-3xl mb-8">{element.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: element.content }} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Interview



// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getInterviewId } from "../redux/actions/action";
// import { useParams } from "react-router-dom";

// const Interview = () => {
//   const dispatch = useDispatch();
//   const selectedUserData = useSelector((state) => state.interviewIdReducer); // Make sure to use the correct state slice
//   const [data, setData] = useState(null); // Initialize data with null

//   const params = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (params.InterviewId) {
//           const response = await dispatch(getInterviewId(params.InterviewId));
//           console.log("Action response:", response);

//           // Check if payload exists and is not empty
//           if (response && response.payload && response.payload.length > 0) {
//             setData(response.payload[0]); // Set the fetched data
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching interview data:", error);
//       }
//     };

//     fetchData();
//   }, [dispatch, params.InterviewId]);

//   console.log("Selected user data:", selectedUserData);

//   return (
//     <div className="w-[1300px] mx-auto mt-8 p-12">
//       {data ? ( // Use 'data' instead of 'selectedUserData'
//         <div>
//           <h3 className="text-3xl mb-8">{data.title}</h3>
//           <div dangerouslySetInnerHTML={{ __html: data.content }} />
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Interview;
