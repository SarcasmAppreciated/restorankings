import "./CityHeader.css";

function CityHeader({cities, city, setCity}) {
    const handleClick = (cityName) => {
        setCity(cityName);
    };
    return (
        <div className="header-wrapper">
            {cities.map((cityName, key) =>
                <h1
                    key={key}
                    className={city === cityName ? "city-heading selected" : "city-heading"}
                    onClick={() => handleClick(cityName)}>
                        {cityName}
                </h1>)}
        </div>
    )
}

export default CityHeader;