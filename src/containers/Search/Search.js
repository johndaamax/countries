import React, { useState } from "react";

import Table from "../../components/UI/Table";
import Modal from "../../components/UI/Modal/Modal";
import CountryDetails from "../../components/UI/CountryDetails/CountryDetails";
import "./Search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});

  const handleSubmit = event => {
    event.preventDefault();
    fetch("https://restcountries.eu/rest/v2/name/" + searchValue)
      .then(res => {
        if (res.ok) return res.json();
        else {
          setCountries([]);
          throw new Error();
        }
      })
      .then(data => {
        setCountries(data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleClick = row => {
    setShowModal(true);
    setSelectedCountry(row);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          className="search-name-input"
          type="text"
          placeholder="Enter country name"
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
        <button className="form-button" type="submit">
          Search
        </button>
      </form>
      <Table countries={countries} clicked={handleClick} />
      {showModal ? (
        <Modal closeModal={() => setShowModal(false)}>
          <h3 style={{ textAlign: "center" }}>Country details</h3>
          {selectedCountry ? <CountryDetails selectedCountry={selectedCountry} /> : null}
        </Modal>
      ) : null}
    </section>
  );
};

export default Search;
