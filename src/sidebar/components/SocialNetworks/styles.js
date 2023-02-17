import styled from "styled-components";

export const StyledSocialNetworks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: var(--margin-distance);

  .social-btn {
        padding: .6rem;
        background-color: var(--bg-color-secondary);
        border-radius: var(--border-radius);
        color: #333;
        font-size: 2rem;

        :hover {
            background: var(--detail);
            svg {
                color: var(--text-color-secondary);
                transition: .6s;
            }
        }
    }

    #linkedin {
        color: var(--text-color);
    }

    #github {
        color: #111;
    }


`;