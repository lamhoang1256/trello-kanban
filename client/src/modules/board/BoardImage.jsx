import styled from "styled-components";

const StyledBoardImage = styled.div`
  img {
    border-radius: 4px;
  }
`;

const BoardImage = () => {
  return (
    <StyledBoardImage>
      <img src="https://source.unsplash.com/random" alt="" />
    </StyledBoardImage>
  );
};

export default BoardImage;
