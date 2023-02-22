import styled from "styled-components";

export const StyledAboutContainer = styled.section`
    padding-right: 3.5rem;
    
    @media (max-width: 425px) {
        padding-right: .5rem;
    }

    p {
        padding-left: .8rem;

        @media (max-width: 425px) {
            padding-left: .5rem;
        }
    }
`;