import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlog } from "../redux/actions/action";

const Blog = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getBlog());
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
  );
};

export default Blog;
