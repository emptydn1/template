import styled, { css } from "styled-components";
import { GUTTER_H, GRID_WIDTH } from "../variables/Variables";

//--------------------------------utils
let s = {
  "1-2": `calc((100% - ${GUTTER_H}) / 2);`,
  "1-3": `calc((100% - 2 * ${GUTTER_H}) / 3);`,
  "2-3": `calc(2 * ((100% - 2 * ${GUTTER_H}) / 3) + ${GUTTER_H});`,
  "1-4": `calc((100% - 3 * ${GUTTER_H}) / 4);`,
  "2-4": `calc(2 * ((100% - 3 * ${GUTTER_H}) / 4) + ${GUTTER_H});`,
  "3-4": `calc(3 * ((100% - 3 * ${GUTTER_H}) / 4) + 2 * ${GUTTER_H});`,
};

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const textCenter = css`
  text-align: center !important;
`;

//-----------------------------------grid
export const Container = styled.div`
  width: ${({ width }) => (width ? width : GRID_WIDTH)};
  margin: ${({ margin }) => (margin ? margin : "0 auto")};
  max-width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  ${({ flex }) => (flex ? flexCenter : "")};
  ${({ text }) => (text ? textCenter : "")};
  width: ${({ size }) => (size ? s[size] : "")};
  background-color: red;
`;
