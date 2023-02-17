import styled from "styled-components";

export const StyledMainContent = styled.section`
  background-color: #ccc;
  flex: 1.7 1 0;
  border-radius: 8px;
  padding: 3rem;

  section {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: red;
    font-size: 2.2rem;
    margin-bottom: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    &::after {
      content: "";
      background: violet;
      height: 3px;
      width: 30%;
    }
  }

  p {
    color: black;
    margin-bottom: 1rem;
    line-height: 1.4rem;
  }

  .btn{
    padding: 1rem 1.2rem;
    color: blue;
    background: green;
    text-decoration: none;
    border-radius: 3rem;
    align-self: start;
  }
`;