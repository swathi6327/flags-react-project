import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./Country";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "./Wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  background: var(--background);
  justify-content: center;
  padding: 3em 0rem;
`;

function CountryList() {
  const countryListByName = useSelector((state) => state.countryListByName);
  const dispatch = useDispatch();

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && countryListByName.length === 0) {
      return state.coutryFilteredByRegion;
    }

    if (countryListByName.length > 0) {
      return countryListByName;
    }

    return state.countryList;
  });

  //console.log("Estado total de la app: ", countryList);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v3.1/all")
      .then((response) => response.json())
      .then((list) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: list,
        });
        //console.log(list.length);
      })
      .catch(() => console.log("ERROR"));
  }, [dispatch]);

  return (
    <Wrapper>
      <CountryListStyled>
        {countryList.map(
          ({
            name,
            capital,
            flag,
            population,
            region,
            nativeName,
            alpha2Code,
          }) => {
            return (
              <Country
                key={name}
                name={name}
                capital={capital}
                flag={flag}
                population={population}
                region={region}
                nativeName={nativeName}
                alpha2Code={alpha2Code}
              />
            );
          }
        )}
      </CountryListStyled>
    </Wrapper>
  );
}
export default CountryList;
