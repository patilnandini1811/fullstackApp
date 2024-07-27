import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts")
      .then((response) => {
        console.log("Response Data: ", response.data); // Debug log
        setListOfPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  }, []);

  return (
    <div>
      {listOfPosts.length > 0 ? (
        listOfPosts.map((value, key) => {
          return (
            <div className="post" key={key}>
              <div className="title"> {value.title} </div>
              <div className="body">{value.postText}</div>
              <div className="footer">{value.userName}</div>
              <div className="deletepost" button ="Delete"></div>
          </div>
          );
        })
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
}

export default Home;
