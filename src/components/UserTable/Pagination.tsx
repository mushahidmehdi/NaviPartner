import { ArrowForwardIos } from "@mui/icons-material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";

import { User } from "../../data/data";

interface PaginationArrowProps {
  transform: number;
  curPage: number;
  lastPage: number;
}

interface PaginationNumberProps {
  border?: boolean;
  light?: "light" | "dark";
}

interface Props {
  data: User[];
  setCurrentRows: Dispatch<SetStateAction<User[]>>;
}

const PaginationArrow = styled.div<PaginationArrowProps>`
  display: flex;
  padding: 0.3rem;
  border-radius: 0.5rem;
  transform: rotate(${({ transform }) => transform}deg);
  cursor: pointer;
  opacity: ${({ transform, curPage, lastPage }) =>
    curPage === 1 && transform ? 0.2 : lastPage === curPage ? 0.2 : 1};
`;

const PaginationWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding-block: 1rem;
`;

const PaginationNumber = styled.div<PaginationNumberProps>`
  width: ${({ border }) => border && "1.9rem"};
  height: ${({ border }) => border && "1.9rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  color: ${({ light }) => light && "#BEBEBE"};
  border: ${({ border }) => border && "1px solid #BEBEBE"};
`;

const Pagination: React.FC<Props> = ({ data, setCurrentRows }: Props) => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    rowPerPage: 25,
  });

  const { currentPage, rowPerPage } = pagination;
  const indexOfLast = currentPage * rowPerPage;
  const indexOfFirst = indexOfLast - rowPerPage;
  const totalRows = data.length;
  const CurrentPageData = data.slice(indexOfFirst, indexOfLast);

  const numberOfPages = totalRows / rowPerPage;
  const lastPage = Math.ceil(numberOfPages);

  useEffect(() => {
    setCurrentRows(CurrentPageData);
  }, []);

  const incrementPaginarion = () => {
    if (lastPage > currentPage) {
      setPagination((prev) => ({
        ...prev,
        currentPage: currentPage + 1,
      }));
      setCurrentRows(CurrentPageData);
    }
  };

  const decrementPaginarion = () => {
    if (currentPage > 1) {
      setPagination((prev) => ({
        ...prev,
        currentPage: currentPage - 1,
      }));
      setCurrentRows(CurrentPageData);
    }
  };

  return (
    <PaginationWrapper>
      <PaginationArrow
        curPage={currentPage}
        lastPage={0}
        onClick={decrementPaginarion}
        transform={180}
      >
        <ArrowForwardIos />
      </PaginationArrow>

      <PaginationNumber border={true}>
        <span>{currentPage}</span>
      </PaginationNumber>

      <PaginationArrow
        curPage={currentPage}
        lastPage={lastPage}
        onClick={incrementPaginarion}
        transform={0}
      >
        <ArrowForwardIos />
      </PaginationArrow>

      <PaginationNumber light="light">
        <span> of {totalRows}</span>
      </PaginationNumber>
    </PaginationWrapper>
  );
};

export default Pagination;
