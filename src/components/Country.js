import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import slugify from "slugify";

const CountryStyled = styled.div`
  cursor: pointer;
  border-radius: 5px;
  text-align: left;
  /* overflow: hidden; */
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);

  &:hover .details {
    border-radius: 0 0 5px 5px;
    /* box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.09); */
    border: 0.1px solid var(--black);
    border-top: none;
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px 5px 0 0;
  }

  .details {
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    border-radius: 0 0 5px 5px;
    transition: 0.3s border;
    background: var(--white);
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 0.9em;
    margin-bottom: 0.5rem;
  }
`;

function Country({
  name,
  capital,
  flag,
  population,
  region,
  nativeName,
  alpha2Code,
}) {
  const history = useHistory();
  function handleClick() {
    const id = alpha2Code || name;
    //console.log("alpha2Code", alpha2Code);
    history.push(`/country/${slugify(id)}`);
  }

  return (
    <CountryStyled onClick={handleClick}>
      <img loading="lazy" src={flag} alt={name} />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
        <p>
          <strong>Population: </strong>
          {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
