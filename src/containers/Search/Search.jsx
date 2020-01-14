import React, { useState, useCallback } from "react";
import styled from 'styled-components';

import Table from "../../components/UI/Table";
import Modal from "../../components/UI/Modal/Modal";
import CountryDetails from "../../components/UI/CountryDetails/CountryDetails";

const SearchForm = styled.form`
  width: 450px;
  padding: 20px;
  margin: 0 auto;

  input {
    width: 270px;
    font: inherit;
    border: none;
    border-bottom: 2px solid #ccc;
    border-radius: 3px 3px 0 0;
    background: white;
    padding: 0.15rem 0.25rem;
    margin-right: 20px;
    transition: border-color 0.1s ease-out;
  }

  input:focus {
    border-color: #0048cf;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  font: inherit;
  border: 1px solid #0048cf;
  background: #0048cf;
  padding: 0.5rem 1.5rem;
  color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover, 
  &:active {
    background: #0048cf;
    border-color: #0048cf;
    box-shadow: 1px 1px 8px rgba(77, 51, 51, 0.26);
  }
`
/* The second main component that fetches country data from the restcountries API based on the 
value entered by the user on the input field. Incorrect calls trigger a GET error and display no data
*/

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const request = await fetch("https://restcountries.eu/rest/v2/name/" + searchValue)
      if(request.ok) {
        const data = await request.json()
        setCountries(data);
      } else {
        setCountries([]);
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  // callback hook to prevent unnecessary renders
  const handleClick = useCallback(row => {
    setShowModal(true);
    setSelectedCountry(row);
  }, []);

  return (
    <section>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter country name"
          value={searchValue}
          onChange={event => setSearchValue(event.target.value)}
        />
        <SubmitButton type="submit">
          Search
        </SubmitButton>
      </SearchForm>
      {!isLoading && <Table countries={countries} clicked={handleClick} />}
      {showModal && (
        <Modal closeModal={() => setShowModal(false)}>
          {selectedCountry && <CountryDetails selectedCountry={selectedCountry} />}
        </Modal>
      )}
    </section>
  );
};

export default Search;
