import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import deleteIcon from "../assets/deleteimage.png";

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

  const deletePost = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then((response) => {
        setListOfPosts(listOfPosts.filter(post => post.id !== id));
        alert("Post deleted successfully!");
      })
      .catch((error) => {
        console.error("There was an error deleting the post!", error);
      });
  };

  return (
    <div>
      {listOfPosts.length > 0 ? (
        listOfPosts.map((value, key) => {
          return (
            <div className="post" key={key}>
              <div className="title"> {value.title} </div>
              <div className="body">{value.postText}</div>
              <div className="footer"> {value.userName} 
            
            <img
            src={deleteIcon}
            alt="Delete"
            className="deleteIcon"
            onClick={() => deletePost(value.id)}
            style={{ cursor: "pointer", marginLeft: "10px" }} /></div>
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
