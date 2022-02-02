import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
};

export const fullscreen = (props) => {
    return css`
      @media only screen and (min-width: 500px) {
        ${props}
      }
    `;
  };