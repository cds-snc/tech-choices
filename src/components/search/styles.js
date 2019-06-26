import React from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import { Search } from "styled-icons/fa-solid/Search";
import { Algolia } from "styled-icons/fa-brands/Algolia";

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`;

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
  position: absolute;
  top: 15px;
  right: 10px;
`;

export const SearchWrapper = styled("form")(
  css({
    mt: [4],
    mx: [4]
  })
);

export const FormWrap = styled("div")(
  css({
    display: "flex",
    position: "relative"
  })
);

export const Input = styled("input")(
  css({
    fontSize: [1, 3],
    padding: [2],
    width: "100%",
    color: "grey.900",
    bg: "white",
    "&:hover": {
      color: "grey.700"
    }
  })
);

//
export const HitsWrapperOuter = styled("div")(
  css({
    width: ["10px", "20px"]
  })
);
//

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  color: #3c4043;
  right: 0;
  top: calc(100% + 0.5em);
  width: 100vw;
  max-width: 54em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  border-radius: 2px;
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid #ccc;
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid #ccc;
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  mark {
    color: black;
    background: yellow;
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: white;
      background: #999;
      padding: 0.1em 0.4em;
      border-radius: 2px;
    }
  }
  h3 {
    margin: 0 0 0.5em;
  }
  h4 {
    margin-bottom: 0.3em;
  }
`;

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
);
