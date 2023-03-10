import styled from "styled-components";

export const StyledTechnologiesContainer = styled.div`
    margin-bottom: 1rem;

    .technologies-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin-left: 1rem;

        @media (max-width: 1200px) {
            justify-content: space-between;
            padding: 0;
            margin: 0;
        }

        @media (max-width: 1000px) {
            justify-content: space-between;
            padding-right: .5rem;
        }

        @media (max-width: 730px) {
            justify-content: center;
        }
    }

    .technology-card {
        display: flex;
        align-items: center;
        padding: .3rem;
        border: 1px solid #333;
        width: 40%;
        border-radius: var(--card-border-radius);
        background-color: var(--bg-color-secondary);
        
        @media (max-width: 1200px) {
            width: 44%;
        }

        @media (max-width: 730px) {
            width: 70%;
        }

        @media (max-width: 560px) {
            width: 90%;
            padding-left: .5rem;
        }
    }

    .technology-info {
        width: 35%;
        margin-left: 5%;
    }

        h3 {
            color: var(--text-color);
            font-size: 1.7rem;
        }

        svg {
            font-size: 5.5rem;
        }

        #html svg {
                color: #e44d26;
        }

        #react svg {
            color: #61dafb;
        }

        #js svg {
            color: #f0db4f;
        }

        #css svg {
            color: #1572b6;
        }

        #sass svg {
            color: #cc6699;
        }

        #bootstrap svg {
            color: #563d7c;
        }

        #next svg {
            color: #000;
        }

        #tailwind svg {
            color: #3490dc;
        }

        #node svg {
            color: #83cd29;
        }

        #laravel svg {
            color: #F05340;
        }
`;