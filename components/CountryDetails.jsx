const CountryDetails = () => {
  const params = useParams();
  const countryName = params.country;
  const [isDark] = useTheme();
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        if (!data) {
          setNotFound(true);
          return;
        }
        updateCountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [countryName]);

  if (notFound) {
    return <div>Country Not Found</div>;
  }

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <main className={`country-Detail ${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>Back
        </span>

        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                {countryData.nativeName || countryData.name}
              </p>
              <p>
                <b>Population: </b>
                {countryData.population.toLocaleString("en-IN")}
              </p>
              <p>
                <b>Region: </b>
                {countryData.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {countryData.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {countryData.capital?.join(", ")}
              </p>
              <p>
                <b>Top Level Domain: </b>
                {countryData.tld}
              </p>
              <p>
                <b>Currencies: </b>
                {countryData.currencies}
              </p>
              <p>
                <b>Languages: </b>
                {countryData.languages}
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetails;
