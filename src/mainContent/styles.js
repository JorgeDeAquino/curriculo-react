import styled from "styled-components";

export const StyledMainContent = styled.section`
  background-color: var(--bg-color);
  flex: 1.8 1 0;
  border-radius: var(--border-radius);
  padding: 3rem;

  section {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: var(--emphasis);
    font-size: var(--font-size-title);
    margin-bottom: var(--margin-distance);
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    &::after {
      content: "";
      background: var(--detail);
      height: 3px;
      width: 30%;
    }
  }

  p {
    color: var(--text-color);
    margin-bottom: var(--margin-distance);
    line-height: 1.5rem;
    font-size: var(--font-size-text);
    text-align: justify;
  }
`;