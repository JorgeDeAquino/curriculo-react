import styled from "styled-components";

export const StyledAboutContainer = styled.section`
    padding-right: 3.5rem;
    
    @media (max-width: 320px) {
        padding-right: .5rem;
    }

    p {
        padding-left: .8rem;
        
        @media (max-width: 320px) {
            padding-left: .5rem;
        }
    }
`;