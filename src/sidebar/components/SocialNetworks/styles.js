import styled from "styled-components";

export const StyledSocialNetworks = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: var(--margin-top-padrao);

  .social-btn {
        padding: .6rem;
        background-color: var(--bg-color-secondary);
        border-radius: var(--border-radius);
        color: #333;
        font-size: 2rem;

        :hover {
            background: var(--gradient);
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