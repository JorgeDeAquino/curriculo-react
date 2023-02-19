import styled from "styled-components";

export const StyledProjectsContainer = styled.div`
    margin-top: var(--margin-distance);

    p {
        margin-top: var(--margin-distance);
        text-align: justify;
    }
    
    .links{
        margin-top: 2rem;
    }
    
    .btn{
        padding: 1rem 1.2rem;
        color: var(--text-color);
        font-size: var(--font-size-text);
        background: var(--emphasis);
        text-decoration: none;
        border-radius: var(--border-radius);
        align-self: start;
        &:first-child {
            margin-right: 2rem;
        }
    }    
`;