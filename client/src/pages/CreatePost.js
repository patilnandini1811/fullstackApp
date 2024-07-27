import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./CreatePost.css";
import axios from 'axios';

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    userName: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("A title is required to proceed."),
    postText: Yup.string().required("Post is requried field."),
    userName: Yup.string().min(3).max(15).required("User name is required to proceed."),
  });

  const onSubmit = async (data, { resetForm }) => {
    try {
      const response = await axios.post("http://localhost:3001/posts", data);
      console.log("Post created:", response.data);
      alert("Post created successfully!");
      resetForm();
    } catch (error) {
      console.error("There was an error creating the post:", error);
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <div className='createPostPage'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='formContainer'>
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Title....)"
          />
          <label>Post:</label>
          <ErrorMessage name="postText" component="span" />
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. Post....)"
          />
          <label>User Name:</label>
          <ErrorMessage name="userName" component="span" />
          <Field
            id="inputCreatePost"
            name="userName"
            placeholder="(Ex. Sonu123....)"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
