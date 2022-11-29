import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  if (loading) return <Loading />;
  if (cocktails.length === 0)
    return <h2 className="section-title">no cocktails to display</h2>;
  return (
    <section className="section">
      <h2 className="section-title">Cocktail List</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
