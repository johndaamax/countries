import React, { useState, useEffect } from "react";
import Table from "../../components/UI/Table";
import Modal from "../../components/UI/Modal/Modal";
import CountryDetails from "../../components/UI/CountryDetails/CountryDetails";

import "./CountryList.css";

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
    <section>
      <h1 className="page-summary">{props.title}</h1>
      {countries.length > 0 ? <Table countries={countries} clicked={handleClick} /> : null}
      {showModal ? (
        <Modal closeModal={() => setShowModal(false)}>
          <h3 style={{ textAlign: "center" }}>Country details</h3>
          {selectedCountry ? <CountryDetails selectedCountry={selectedCountry} /> : null}
        </Modal>
      ) : null}
    </section>
  );
};

export default CountryList;
