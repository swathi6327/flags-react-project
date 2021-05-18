import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { useSelector } from "react-redux";
import CountrySelected from "./CountrySelected";

const CountryPageStyled = styled.div`
  .back {
    background: var(--white);
    color: var(--black);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 0.7em 2.2em;
    border-radius: 5px;
    border: none;
    margin-left: 1rem;
    cursor: pointer;
    margin-top: 1em;
  }
  i {
    margin-right: 5px;
  }
  @media screen and (min-width: 1024px) {
    .back {
      margin-top: 3em;
    }
  }
`;

function ContryPage({ match, history }) {
  //console.log(history);
  let DBcountry = useSelector((state) => {
    return state.countryList.find(
      (item) => item.alpha2Code === match.params.id.replace(/-/g, " ")
    );
  });
  const [country, setCountry] = useState(DBcountry);

  console.log(country);

  useEffect(() => {
    if (!country) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
        .then((response) => response.json())
        .then((data) => setCountry(data));
    }
  }, [country, match.params.id]);

  function handleClick() {
    history.goBack();
  }

  return (
    <CountryPageStyled>
      <Wrapper>
        <button className="back" onClick={handleClick}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <CountrySelected {...country} />
      </Wrapper>
    </CountryPageStyled>
  );
}
export default ContryPage;
