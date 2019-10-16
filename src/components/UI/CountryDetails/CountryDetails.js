import React from "react";

import "./CountryDetails.css";

/* Helper component that contains the extra information that we need to display */
const CountryDetails = props => {
  return (
    <div className="details">
      <h3 className="details-title">Country details</h3>
      <p>
        Country name: <span className="field-value"> {props.selectedCountry.name} </span>
      </p>
      <p>
        Capital city: <span className="field-value">{props.selectedCountry.capital}</span>
      </p>
      <p>
        Alpha 2Code: <span className="field-value">{props.selectedCountry.alpha2Code}</span>
      </p>
      <p>
        Region: <span className="field-value">{props.selectedCountry.region}</span>
      </p>
      <p>
        Population: <span className="field-value">{props.selectedCountry.population}</span>
      </p>
    </div>
  );
};

export default CountryDetails;
