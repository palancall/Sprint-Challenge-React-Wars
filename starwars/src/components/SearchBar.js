import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  padding: 5px 20px;
  text-align: center;
`;

const SearchBar = () => {
  return (
    <div>
      <SearchInput placeholder="SEARCH" type="text" />
    </div>
  );
};

export default SearchBar;
