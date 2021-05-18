import React from "react";
import styled from "styled-components";
import { FilterByRegion } from "./FilterByRegion";
import Search from "./Search";
import Wrapper from "./Wrapper";

const ActionListStyle = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 480px 1fr 200px;
    }
  } ;
`;

function ActionList() {
  return (
    <ActionListStyle>
      <Wrapper>
        <div className="grid">
          <Search />
          <span></span>
          <FilterByRegion />
        </div>
      </Wrapper>
    </ActionListStyle>
  );
}

export default ActionList;
