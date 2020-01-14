import React from "react";
import styled from 'styled-components';

const BaseDiv = styled.div``;
const Attribute = styled.p`
  line-height: 1.2;
  border-bottom: 1px solid #eee;

  span{
    font-size: 18px;
    font-weight: 700;
  }
`;
const CountryTitle = styled.h3`
  margin: 16px auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 700;
`;

/* Helper modal component that contains the extra information that we need to display */
const CountryDetails = ({ selectedCountry }) => {
  return (
    <BaseDiv>
      <CountryTitle>Country details</CountryTitle>
      <Attribute>
        Country name: <span> {selectedCountry.name} </span>
      </Attribute>
      <Attribute>
        Capital city: <span>{selectedCountry.capital}</span>
      </Attribute>
      <Attribute>
        Alpha 2Code: <span>{selectedCountry.alpha2Code}</span>
      </Attribute>
      <Attribute>
        Region: <span>{selectedCountry.region}</span>
      </Attribute>
      <Attribute>
        Population: <span>{selectedCountry.population}</span>
      </Attribute>
    </BaseDiv>
  );
};

export default CountryDetails;
