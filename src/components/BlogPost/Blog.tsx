import { ChevronLeft, Delete, Edit } from "@mui/icons-material";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { deleteBlogPost } from "../../data/data";
import EditBlog from "./BlogForm";

const Blog: React.FC = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const location = useLocation();
  const blog = location.state.blog;
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      deleteBlogPost(id);
      navigate("/");
    }
  };

  return (
    <BlogWrapper>
      {edit ? (
        <EditBlog blogPost={blog} />
      ) : (
        <>
          <ActionWrapper>
            <BackButton onClick={() => history.back()}>
              <ChevronLeft />
              Back
            </BackButton>
            <EditButton>
              <Edit onClick={() => setEdit(true)} type="reset" />
              <Delete onClick={() => handleDelete(blog.id)} />
            </EditButton>
          </ActionWrapper>
          <Title>{blog.title}</Title>
          <p>{dayjs(blog.datePosted).format("ddd, MMM D, YYYY h:mm A")}</p>
          <ImgWrapper>
            <img
              alt={blog.title}
              src={blog.imgUrl ?? "https://source.unsplash.com/random/?nature"}
            />
          </ImgWrapper>
          <p>{blog.body}</p>
        </>
      )}
    </BlogWrapper>
  );
};

export default Blog;

const BlogWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  font-family: serif;
  padding: 2rem;
  line-height: 1.4;
  font-size: 1rem;
`;

const ImgWrapper = styled.div`
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const BackButton = styled.button`
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline-end: 0.5rem;
  cursor: pointer;
`;

const EditButton = styled.button`
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 99rem;
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
