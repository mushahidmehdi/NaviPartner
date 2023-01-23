import {
  DeleteOutlined,
  ExpandCircleDownOutlined,
  HighlightOff,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

import { User } from "../../data/data";
import Blogs from "../BlogPost/Blogs";

interface Props {
  user: User;
  deleteUser: (id: number) => void;
}

const iconStyles = {
  color: "#77808f",
};

const UserRow: React.FC<Props> = ({ user, deleteUser }) => {
  const [openBlogsId, setOpenBlogsId] = useState<number>(0);

  return (
    <IncoundWrapper bg={openBlogsId === user.id}>
      <InbountInfoWrapper>
        <MobileDisplayWrapper>
          <MobileDisplay>
            <ItemCellGroup>
              <MobHeadingWrapper>
                <MobileCell>
                  <p>First Name</p>
                  <span>{user.first_name}</span>
                </MobileCell>
                <DeliverEditWrapper>
                  <ActionWrapper onClick={() => deleteUser(user.id)}>
                    <DeleteOutlined style={iconStyles} />
                  </ActionWrapper>
                  <ActionWrapper>
                    {openBlogsId === user.id ? (
                      <HighlightOff
                        onClick={() => setOpenBlogsId(0)}
                        style={iconStyles}
                      />
                    ) : (
                      <ExpandCircleDownOutlined
                        onClick={() => setOpenBlogsId(user.id)}
                        style={iconStyles}
                      />
                    )}
                  </ActionWrapper>
                </DeliverEditWrapper>
              </MobHeadingWrapper>

              <ItemCellGroup>
                <MobileCell>
                  <p>Last Name</p>
                  <span>{user.last_name}</span>
                </MobileCell>
                <MobileCell>
                  <p>Gender</p>
                  <span>{user.gender}</span>
                </MobileCell>

                <MobileCell>
                  <p>IP Address</p>
                  <span>{user.ip_address}</span>
                </MobileCell>
              </ItemCellGroup>
            </ItemCellGroup>
          </MobileDisplay>
          {openBlogsId === user.id && <Blogs openBlogsId={openBlogsId} />}
        </MobileDisplayWrapper>

        <DesktopDisplayWrapper>
          <DesktopDisplay>
            <DesktopListCell>
              <h4>{user.first_name}</h4>
              <span>{user.email}</span>
            </DesktopListCell>
            <DesktopListCell>
              <p>{user.last_name}</p>
            </DesktopListCell>
            <DesktopListCell>
              <p>{user.gender}</p>
            </DesktopListCell>
            <DesktopListCell>
              <p>{user.ip_address}</p>
            </DesktopListCell>

            <ShowMoreIconWrapper>
              <ShowMoreImageWrapper onClick={() => deleteUser(user.id)}>
                <DeleteOutlined style={iconStyles} />
              </ShowMoreImageWrapper>
              <ShowMoreImageWrapper>
                {openBlogsId === user.id ? (
                  <HighlightOff
                    onClick={() => setOpenBlogsId(0)}
                    style={iconStyles}
                  />
                ) : (
                  <ExpandCircleDownOutlined
                    onClick={() => setOpenBlogsId(user.id)}
                    style={iconStyles}
                  />
                )}
              </ShowMoreImageWrapper>
            </ShowMoreIconWrapper>
          </DesktopDisplay>
          {openBlogsId === user.id && <Blogs openBlogsId={openBlogsId} />}
        </DesktopDisplayWrapper>
      </InbountInfoWrapper>
    </IncoundWrapper>
  );
};

const ItemCellGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MobileCell = styled.div`
  display: flex;
  flex-direction: column;
  width: 11rem;
  margin-block: 0.8rem;

  > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1rem;
    color: #828282;
  }
  > span {
    font-size: 1.1rem;
    font-weight: 500;
    color: "#0F0A0A";
  }
`;

const MobHeadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 98%;
  justify-content: space-between;
  align-items: center;
`;

const DeliverEditWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const IncoundWrapper = styled.div<{ bg: boolean }>`
  border-radius: 0.5rem;
  margin-block: 1rem;
  padding: 0.6rem;
  background-color: ${({ bg }) => bg && "#e2e8f0"};
  @media only screen and (max-width: 62em) {
    border-radius: 0rem;
    margin-block: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const InbountInfoWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: 62em) {
    width: 100%;
    border-radius: 0.5rem;
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }
`;

const MobileDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 62.01em) {
    display: none;
  }
`;

const MobileDisplay = styled.section`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  background-color: #f9f9f9;
`;

const DesktopDisplayWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media only screen and (max-width: 62.01em) {
    display: none;
  }
`;

const DesktopDisplay = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  gap: 0.3rem;
  padding-block: 0.35rem;
  border-radius: 0.2rem;

  @media only screen and (max-width: 62em) {
    display: none;
  }
`;

const DesktopListCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.25;
  overflow: hidden;
  padding-block: 0.5rem;

  > p {
    width: 10rem;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 18px;
    max-width: 100%;
  }
  > span {
    align-self: flex-start;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 18px;
  }
  h6 {
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
  }
  h5 {
    align-self: flex-start;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
  }
  h4 {
    align-self: flex-start;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 18px;
  }
`;

const ShowMoreIconWrapper = styled.div`
  @media only screen and (min-width: 56.01rem) {
    display: flex;
    align-items: center;
    flex: 0.25;
    gap: 0.4rem;
  }
`;

const ShowMoreImageWrapper = styled.div`
  width: 2.4rem;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99rem;
  @media only screen and (min-width: 56.01rem) {
    width: 2.2rem;
    height: 2.2rem;
    padding: 0.4rem;
  }
`;

const ActionWrapper = styled(ShowMoreImageWrapper)`
  width: 2rem;
  height: 2rem;
  padding: 0.2rem;
`;

export default UserRow;
