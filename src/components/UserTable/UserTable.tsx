import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { deleteUser, getUsers, User } from "../../data/data";
import Pagination from "./Pagination";
import UserRow from "./UserRow";
import UserTableSkeleton from "./UserTableSkeleton";

const Titles = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  overflow: hidden;
  border-radius: 0.5rem;
  margin-top: 1rem;
  gap: 0.4rem;
  background-color: #f3f3f3;
  padding-inline: 0.6rem;
  padding-block: 1.2rem;
  color: #828282;
  font-weight: 600;

  @media only screen and (max-width: 62em) {
    display: none;
  }
`;

const NameWrapper = styled.p`
  display: flex;
  align-items: center;
  flex: 0.25;

  > p {
    font-weight: 400;
    line-height: 1.2rem;
    font-size: 1rem;
    text-align: left;
  }
`;

const UserRowWrapper = styled.section`
  gap: 0.5rem;
  cursor: pointer;
  @media only screen and (max-width: 607px) {
    justify-content: center;
  }

  @media only screen and (max-width: 62em) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentRows, setCurrentRows] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const deleteUserHandler = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      setCurrentRows(currentRows.filter((user) => user.id !== id));
    }
  };

  if (loading) {
    return <UserTableSkeleton />;
  }

  return (
    <>
      <h1>NaviPartner Tech Test </h1>
      <NaviBody>
        UserTable contains all the user informations, you can see each user
        blogs by clicking on arrow icon and read them in detail view by clicking
        on the "Read More" button in the blog card.
      </NaviBody>
      <Titles>
        <NameWrapper>
          <p>First Name</p>
        </NameWrapper>
        <NameWrapper>
          <p>Last Name</p>
        </NameWrapper>
        <NameWrapper>
          <p>Gender</p>
        </NameWrapper>
        <NameWrapper>
          <p>IP Address</p>
        </NameWrapper>
        <NameWrapper />
      </Titles>
      {currentRows.map((user) => (
        <UserRowWrapper key={user.id}>
          <UserRow deleteUser={deleteUserHandler} user={user} />
        </UserRowWrapper>
      ))}

      <Pagination data={users} setCurrentRows={setCurrentRows} />
    </>
  );
};

export default UserTable;

const NaviBody = styled.p`
  max-width: 64rem;
  margin-top: 0.6rem;
`;
