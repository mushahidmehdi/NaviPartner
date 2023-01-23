import React from "react";
import styled, { keyframes } from "styled-components";

const UserTableSkeleton = () => {
  const delayTimes = [
    "2s",
    "2.5s",
    "3.4s",
    "3.6s",
    "4s",
    "4.5s",
    "5s",
    "5.5s",
    "6s",
    "6.5s",
    "7s",
    "7.5s",
    "8s",
    "8.5s",
  ];

  return (
    <>
      {delayTimes.map((delayTime) => (
        <TitleSkeleton delayTime={delayTime} key={delayTime}>
          {Array.from({ length: 12 }, (_, item) => (
            <SkeletonItem key={item} />
          ))}
        </TitleSkeleton>
      ))}
    </>
  );
};

const AniVertical = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
}
`;

const AniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
    background-color: #E3E3E3;
  }

  100% {
    background-position: 100% 0;
    background-color: #CFCFCF;

  }
`;

const TitleSkeleton = styled.div<{ delayTime: string }>`
  width: 100%;
  background-color: #cfcfcf;
  display: flex;
  flex: 1;
  overflow: hidden;
  border-radius: 0.5rem;
  margin-top: 1rem;
  gap: 0.4rem;
  padding-block: 1.3rem;
  padding-inline-start: 1rem;

  animation: ${AniVertical};
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-duration: ${({ delayTime }) => delayTime};

  opacity: 1;
  margin-inline-end: 2rem;
  height: 3.5rem;
  background-size: 50%;
  border-radius: 0.5rem;
  margin-block: 0.5rem;

  div:last-child {
    visibility: hidden;
  }
`;

const SkeletonItem = styled.div`
  flex: 0.25%;
  height: 100%;
  background-color: red;
  animation: ${AniHorizontal} 2s linear infinite;
  height: 1rem;
  border-radius: 0.4rem;
  animation: ${AniHorizontal} 2s linear infinite alternate;
`;

export default UserTableSkeleton;
