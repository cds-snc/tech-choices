import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

import { SearchIcon, Form, Input, SearchWrapper } from "./styles";

export default connectSearchBox(({ refine, ...rest }) => (
  <SearchWrapper>
    <Form>
      <Input
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        {...rest}
      />
      <SearchIcon />
    </Form>
  </SearchWrapper>
));
