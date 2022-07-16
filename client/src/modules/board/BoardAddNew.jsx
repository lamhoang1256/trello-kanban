import { IconPlus } from "components/icons";
import styled from "styled-components";

const StyledBoardAddNew = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #e4e4e5;
`;

const BoardAddNew = () => {
  return (
    <StyledBoardAddNew>
      <IconPlus />
      Add another card
    </StyledBoardAddNew>
  );
};

export default BoardAddNew;
