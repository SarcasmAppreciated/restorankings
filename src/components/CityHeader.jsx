import "./CityHeader.css";

function CityHeader({cities, city, setCity}) {
    const handleClick = (cityName) => {
        setCity(cityName);
    };
    return (
        <div id="city-wrapper">
            {cities.map((cityName, key) =>
                <h1
                    key={key}
                    className={city === cityName ? "selected" : ""}
                    onClick={() => handleClick(cityName)}>
                        {cityName}
                </h1>)}
        </div>
    )
}

export default CityHeader;
