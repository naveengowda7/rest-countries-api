const CountriesList = ({ query }) => {
  const {
    data: countries,
    loading,
    error,
  } = useFetch("https://restcountries.com/v3.1/all");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!countries) return <div>No data available</div>; // Add this check

  return (
    <div className="grid-container">
      {countries
        .filter(
          (country) =>
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        )
        .map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            independent={country.independent}
            area={country.area}
          />
        ))}
    </div>
  );
};

export default CountriesList;
