const CountryCard = ({
  name,
  flag,
  population,
  region,
  capital,
  independent,
}) => {
  const freedom = independent ? "independent" : "dependent";
  return (
    <Link className="card-container" to={`/${name}`}>
      <div className="image-container">
        <img src={flag} className="card-img" alt={`${name} flag`} />
      </div>
      <div className="card-body-container">
        <section className="country-imp-details">
          <h3 className="card-title">{name}</h3>
          <span className={freedom}>{freedom}</span>
        </section>
        <section className="card-text">
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
          <p>
            <b>Population: </b>
            {population}
          </p>
        </section>
      </div>
    </Link>
  );
};

export default CountryCard;
