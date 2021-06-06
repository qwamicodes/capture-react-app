import styled from "styled-components";

export const StyledLayout = styled.section`
  min-height: 90vh;
  padding: 5rem 10rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10vh;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
