import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import Table from "../../components/UI/Table";
import Modal from "../../components/UI/Modal/Modal";
import CountryDetails from "../../components/UI/CountryDetails/CountryDetails";

const SummaryTitle = styled.h1`
  padding-top: 20px;
  text-align: center;
  text-transform: uppercase;
`;

/* Component that fetches and displays a list of countries from the 
restcountries API based on the apiSuffix prop that we pass to it. The 
fetching is done on component mount, so that the user immediately sees the
results on the screen.  */
const CountryList = props => {
  //Initialize the state that we will need
  const [countries, setCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});
  /* fetch data on component mount and watch for change on the apiSuffix prop, 
  in order to re-render with the proper fetch call and store the correct data
  */
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/" + props.apiSuffix)
      .then(res => {
        if (res.ok) return res.json();
        else throw new Error();
      })
      .then(data => {
        setCountries(data);
      })
      .catch(err => console.error(err));
  }, [props.apiSuffix]);

  /* method to run on click of a table record, shows modal 
  and saves info about the selected country 
  */
  const handleClick = row => {
    setShowModal(true);
    setSelectedCountry(row);
  };

  return (
    <section>
      <SummaryTitle>{props.title}</SummaryTitle>
      {countries.length > 0 && <Table countries={countries} clicked={handleClick} />}
      {showModal &&
        <Modal closeModal={() => setShowModal(false)}>
          {selectedCountry && <CountryDetails selectedCountry={selectedCountry} />}
        </Modal>
      }
    </section>
  );
};

export default CountryList;
