import * as styledComponents from "styled-components";
import {
  space,
  layout,
  typography,
  color,
  border,
  width,
  flex
} from "styled-system";
import { theme } from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents;

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${border}
  ${width}
  ${flex}
`;

const ProductBox = styled.div(
  {
    display: "flex",
    border: "1px solid #ccc",
    "&:hover": {
      "background-color": "#efefef"
    }
  },
  space,
  layout,
  typography,
  color
);

const Container = styled.div(
  {
    margin: "0 auto",
    maxWidth: 900
  },
  space,
  layout,
  typography,
  color
);

export {
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  theme,
  Box,
  Container,
  ProductBox
};

export * from "styled-system";
export default styled;
