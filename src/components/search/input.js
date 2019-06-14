import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

import { SearchIcon, FormWrap, Input, SearchWrapper } from "./styles";

export default connectSearchBox(({ refine, ...rest }) => (
  <SearchWrapper>
    <FormWrap>
      <Input
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        {...rest}
      />
      <SearchIcon />
    </FormWrap>
  </SearchWrapper>
));
