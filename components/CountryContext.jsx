import { createContext } from "react";

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const {
    data: countries,
    loading,
    error,
  } = useFetch("https://restcountries.com/v3.1/all");
};
