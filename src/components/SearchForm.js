import React from "react";
import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerms } = useGlobalContext();
  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const newCocktails = () => {
    setSearchTerms(searchValue.current.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form action="submit " className="search-form" onSubmit={handelSubmit}>
        <div className="form-control">
          <label htmlFor="name ">Search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={newCocktails}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
