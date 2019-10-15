import React, { useState, useEffect } from "react";
import Table from "./components/UI/Table";
import Modal from "./components/UI/Modal";

const CountryList = props => {
  //Initialize the state that we will need
  const [countries, setCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});
  //fetch data on component mount
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
    return function cleanup() {
      setCountries([]);
    };
  }, [props.apiSuffix]);

  const handleClick = row => {
    setShowModal(true);
    setSelectedCountry(row);
  };

  return (
    <>
      <h1>{props.title}</h1>
      {countries ? <Table countries={countries} clicked={handleClick} /> : null}
      {showModal ? (
        <Modal closeModal={() => setShowModal(false)}>
          <h3 style={{ textAlign: "center" }}>Country details</h3>
          {selectedCountry ? (
            <div>
              <p>Country name: {selectedCountry.name}</p>
              <p>Capital city: {selectedCountry.capital}</p>
              <p>Alpha 2Code: {selectedCountry.alpha2Code}</p>
              <p>Region: {selectedCountry.region}</p>
              <p>Population: {selectedCountry.population}</p>
            </div>
          ) : null}
        </Modal>
      ) : null}
    </>
  );
};

export default CountryList;
