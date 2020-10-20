import styled from 'styled-components';

export default {
  Nav: styled.nav`
    background: #000000;
    display: flex;
    align-items: center;
    height: 60px;

    ul {
      display: flex;
      padding: 0;
      margin: 0;

      li {
        list-style: none;

        a {
          color: #16f10f;
          text-decoration: none;
          padding: 1em;

          &:hover {
            color: #f3dd12;
          }
        }
      }
    }
  `
};