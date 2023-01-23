import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";

import { addBlogPost, BlogPost, editBlogPost } from "../../data/data";

interface Props {
  blogPost?: BlogPost;
}

const BlogForm: React.FC<Props> = ({ blogPost }) => {
  const [title, setTitle] = useState(blogPost?.title || "");
  const [body, setBody] = useState(blogPost?.body || "");
  const location = useLocation();
  const userId = location.state?.openBlogsId;
  const navigate = useNavigate();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!blogPost) {
      const date = new Date().toISOString();
      const UUID = v4();
      const newBlogPost: BlogPost = {
        title,
        body,
        userId,
        datePosted: date,
        id: UUID,
      };
      addBlogPost(newBlogPost).then(() => {
        navigate("/");
      });
    } else {
      editBlogPost(blogPost.id, {
        title,
        body,
        userId: blogPost?.userId,
        datePosted: blogPost?.datePosted,
      }).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <EditBlogWrapper>
      <h4> {blogPost ? "Update BlogForm" : "Add BlogForm"}</h4>
      <form onSubmit={handleSubmit}>
        <BlogTitleField
          label="Blog Title"
          onChange={(evt) => setTitle(evt.target.value)}
          value={title}
        />
        <BlogAreaField
          label="Blog Post"
          onChange={(evt) => setBody(evt.target.value)}
          value={body}
        />
        <PutBlogPost type="submit">Update Blog</PutBlogPost>
      </form>
    </EditBlogWrapper>
  );
};

export default BlogForm;

interface BlogFieldProps {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const BlogAreaField: React.FC<BlogFieldProps> = ({ label, ...rest }) => (
  <TextFieldWrapper>
    <label htmlFor={label}>{label}</label>
    <textarea {...rest} />
  </TextFieldWrapper>
);

export const BlogTitleField: React.FC<BlogFieldProps> = ({
  label,
  ...rest
}) => (
  <TextFieldWrapper>
    <label htmlFor={label}>{label}</label>
    <input {...rest} />
  </TextFieldWrapper>
);

const EditBlogWrapper = styled.div`
  width: 40rem;
  max-width: 100%;
  margin: 0 auto;
`;

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  > label {
    font-size: 1rem;
    margin-inline-start: 0.1rem;
    color: #4a5568;
    margin-block-end: 0.43rem;
    line-height: 24px;
    font-weight: 00;
    line-height: 24px;
  }

  > input {
    height: 2.5rem;
    max-width: 100%;
    border: none;
    font-size: 1rem;
    color: #4a5568;
    outline: 1px solid #cfd5e1;
    border-radius: 0.4rem;
    padding: 10px, 14px, 10px, 14px;
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(0deg, #d0d5dd, #d0d5dd);
    text-indent: 0.6rem;

    ::placeholder {
      color: #d0d5dd;
      text-indent: 0.6rem;
    }
  }

  > textarea {
    max-width: 100%;
    border: none;
    font-size: 0.95rem;
    color: #667085;
    outline: 1px solid #cfd5e1;
    border-radius: 0.4rem;
    background: linear-gradient(0deg, #ffffff, #ffffff),
      linear-gradient(0deg, #d0d5dd, #d0d5dd);
    text-indent: 0.6rem;
    resize: vertical;
    font-family: "Montserrat", sans-serif;
    padding: 0.5rem;
    box-sizing: border-box;
    min-height: 12rem;
  }
`;

const PutBlogPost = styled.button`
  cursor: pointer;
  background-color: #cfd5e1;
  padding: 0.6rem;
  border-radius: 0.4rem;
  color: #0f0a0a;
  font-size: rem;
  line-height: 24px;
  margin-top: 0.5rem;
  width: 100%;
  font-weight: 600;
`;
