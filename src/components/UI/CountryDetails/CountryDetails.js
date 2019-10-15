import React from "react";

const CountryDetails = props => {
  return (
    <div className="details">
      <p>Country name: {props.selectedCountry.name}</p>
      <p>Capital city: {props.selectedCountry.capital}</p>
      <p>Alpha 2Code: {props.selectedCountry.alpha2Code}</p>
      <p>Region: {props.selectedCountry.region}</p>
      <p>Population: {props.selectedCountry.population}</p>
    </div>
  );
};

export default CountryDetails;
