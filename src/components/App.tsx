import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Blog from "./BlogPost/Blog";
import BlogForm from "./BlogPost/BlogForm";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import UserTable from "./UserTable/UserTable";

const StyledWrapper = styled.div`
  padding: 24px;
`;

export const App = () => (
  <BrowserRouter>
    <StyledWrapper>
      <GlobalStyles />
      <Routes>
        <Route element={<UserTable />} path="/" />
        <Route element={<Blog />} path="/blog/:id" />
        <Route element={<BlogForm />} path="/blog/form" />
      </Routes>
    </StyledWrapper>
  </BrowserRouter>
);
