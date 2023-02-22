import styled from "styled-components";

export const StyledSidebar = styled.aside`
  background-color: var(--bg-color);
  flex: 1 1 0;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  padding-top: 7rem;
  
  @media (max-width: 768px) {
    padding-top: 30%;
    padding-bottom: 2rem;
    }

  @media (max-width: 620px) {
    padding-top: 35%;
    padding-bottom: 2rem;
    }

  @media (max-width: 425px) {
    padding-top: 33%;
    }

  @media (max-width: 325px) {
    padding-top: 4rem;
    }

  img {
    width: 60%;
    max-width: 300px;
    border-radius: var(--border-radius);
    position: absolute;
    top: -3rem;
    
    @media (max-width: 768px) {
      max-width: 350px;
      top: -2.5rem;
      width: 80%;
    }

    @media (max-width: 620px) {
      max-width: 350px;
      top: -2.7rem;
      width: 70%;
    }
    
    @media (max-width: 425px) {
      max-width: 300px;
      top: -1.7rem;
      width: 70%;
    }
  }

  h1 {
    width: 100%;
    font-size: var(--font-size-title);
    margin-top: var(--margin-distance);
    background: var(--text-color-secondary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title {
    font-size: var(--font-size-text);
    color: var(--text-color);
    background-color: var(--bg-color-secondary);
    border-radius: var(--border-radius);
    margin-top: 140px;
    padding: 1rem 1.2rem;
  }

  .btn {
    margin-top: var(--margin-distance);
    padding: 1rem 1.2rem;
    color: var(--text-color);
    background: var(--emphasis);
    text-decoration: none;
    border-radius: var(--border-radius);
    font-size: var(--font-size-text);
  }

`;