import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  padding: 5px 20px;
  text-align: center;
  margin: 1rem 0;
  outline: none;
  color: black;
`;
const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0 auto;
  font-family: "Russo One", sans-serif;
`;
const SearchBar = (props) => {
  const setSearch = props.setSearch;
  return (
    <SearchDiv>
      <Title>THE RICK AND MORTY API</Title>

      <SearchInput
        onChange={(e) => setSearch(e.target.value)}
        placeholder="SEARCH"
        type="search"
      />
    </SearchDiv>
  );
};

export default SearchBar;
