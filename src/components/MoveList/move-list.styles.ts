import styled from "styled-components";

export const StyledMoveList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
  list-style: none;
`;

export const StyleMovieScore = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  bottom: -18px;
  left: 5px;
  svg {
    transform: rotate(-90deg);
  }
`;

