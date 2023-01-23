import { AddCircleOutline, Delete } from "@mui/icons-material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { BlogPost, deleteBlogPost, getMembers } from "../../data/data";

interface Props {
  openBlogsId: number;
}

const Blogs: React.FC<Props> = ({ openBlogsId }) => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  const navigate = useNavigate();

  const iconStyles = {
    color: "#77808f",
    cursor: "pointer",
  };

  const deleteBlog = (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      deleteBlogPost(id);
      setBlogs(blogs.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    getMembers().then((data) => {
      setBlogs(data.filter((item) => item.userId === openBlogsId));
    });
  }, [openBlogsId]);

  return (
    <BlogsWrapper>
      <IconsWrapper
        onClick={() => navigate("/blog/form", { state: { openBlogsId } })}
      >
        <AddNew>
          <AddCircleOutline style={iconStyles} />
          <p>Add New Blog</p>
        </AddNew>
      </IconsWrapper>
      <BlogFlex>
        {blogs.map((blog) => (
          <StyledCard key={blog.id}>
            <DateText>
              {dayjs(blog.datePosted).format("ddd, MMM D, YYYY h:mm A")}
            </DateText>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogBody>{blog.body}</BlogBody>
            <BlogActionWrapper>
              <ReadFullBlog
                onClick={() =>
                  navigate(`/blog/${blog.id}`, { state: { blog } })
                }
              >
                Read More
              </ReadFullBlog>
              <Delete onClick={() => deleteBlog(blog.id)} style={iconStyles} />
            </BlogActionWrapper>
          </StyledCard>
        ))}
      </BlogFlex>
    </BlogsWrapper>
  );
};

export default Blogs;

const BlogsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-inline: -0.5rem;

  @media only screen and (max-width: 62.01em) {
    max-width: 100%;
  }
`;

const BlogFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 0.5rem;
  cursor: auto;
  margin-top: 1rem;
`;

const StyledCard = styled.div`
  align-items: flex-start;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  padding-block-end: 0.6rem;
  max-width: 54rem;
  min-width: 32rem;
  flex: 1;

  @media only screen and (max-width: 62.01em) {
    max-width: 100%;
    min-width: 18rem;
  }
`;

const BlogTitle = styled.p`
  display: -webkit-box;
  margin: unset;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: #2d3748;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  .title::before {
    content: "";
    width: 200px;
    border-bottom: 1px dotted;
    margin-right: 5px;
  }
`;

const DateText = styled.h5`
  color: #828282;
  margin-bottom: 1rem;
`;

const BlogBody = styled.p`
  display: -webkit-box;
  margin: unset;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #828282;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  .title::before {
    content: "";
    width: 200px;
    border-bottom: 1px dotted;
    margin-right: 5px;
  }
`;

const BlogActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

const ReadFullBlog = styled.button`
  cursor: pointer;
  background-color: #cfd5e1;
  padding: 0.1rem 0.5rem;
  border-radius: 0.4rem;
  color: #0f0a0a;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 24px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;
const AddNew = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  background-color: rgba(255, 255, 255, 0.558);
  border: none;
  padding: 10px 20px;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;
  margin-block-start: 0.6rem;

  > p {
    margin-inline-start: 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 56.01rem) {
    padding: 0.4rem;
  }
`;
