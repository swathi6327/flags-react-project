import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const FilterByRegionStyled = styled.select`
  padding: 1.3em;
  border: none;
  border-radius: 5px;
  outline: 0;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  background-color: var(--white);
  color: var(--black);
  @import url("https://fonts.google.com/specimen/Nunito+Sans");

  i {
    padding: 5rem;
  }
`;

const filterByRegionAction = (regionSelected) => {
  return {
    type: "FILTER_BY_REGION",
    payload: { regionSelected },
  };
};

export const FilterByRegion = () => {
  const dispatch = useDispatch();

  const filterByRegion = useSelector((state) => state.filterByRegion);

  const onRegionChange = (selectEvent) => {
    const value = selectEvent.target.value;

    dispatch(filterByRegionAction(value));
  };

  return (
    <FilterByRegionStyled onChange={onRegionChange} value={filterByRegion}>
      <option value="">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </FilterByRegionStyled>
  );
};
