import styled from "styled-components";

export const StyledInformationContainer = styled.section`
    align-items: center;
    background-color: var(--bg-color-secondary);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    margin-top: var(--margin-top-padrao);
    padding: 1rem 0 .5rem 0;
    text-align: center;
    width: 95%;

    .info-card {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1rem;
        padding-bottom: 1.2rem;
        width: 100%;

        div {
            display: flex;
            gap: .5rem;
        }

        p {
            font-size: var(--font-size-text);
            color: var(--text-color);
            font-weight: 500;
        }

        svg {
            background-color: var(--bg-color);
            padding: .4rem;
            width: 2rem;
            height: 2rem;
            margin-left: .5rem;
            border-radius: 5px;
        }

        #phone-icon {
            color: #e93b81;
        }

        #email-icon {
            color: #6ab5b9;
        }

        #pin-icon {
            color: #c17ceb;
        }
    }
`;