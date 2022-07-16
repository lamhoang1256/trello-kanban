import styled from "styled-components";
import { BoardAddNew, BoardHeading, BoardImage, BoardList } from ".";

const StyledBoardColumn = styled.div`
  position: relative;
  height: 80vh;
  max-width: 300px;
  padding: 10px 10px 0 10px;
  background-color: #e4e4e5;
  border-radius: 8px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: darkgrey;
  }
`;

const BoardColumn = () => {
  return (
    <StyledBoardColumn>
      <BoardHeading></BoardHeading>
      <BoardImage></BoardImage>
      <BoardList />
      <BoardAddNew />
    </StyledBoardColumn>
  );
};

export default BoardColumn;
