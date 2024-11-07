'use client';

import styled from 'styled-components';

export const Header = styled.header`
    width: 100vw;
    height: 10vh;

    nav {
      padding: 24px;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;

        gap: 48px;

        list-style: none;

        li {
          :hover {
              color: var(--white);
              transition: 1s;
          }

          a {
            text-decoration: none;
            color: var(--gray);
          }
        }
      }
    }


`;
