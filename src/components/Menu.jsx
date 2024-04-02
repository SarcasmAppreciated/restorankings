import { useContext, useState } from "react";
import "./Menu.css"
import CityHeader from "./CityHeader";
import { CityContext } from "../Context";
import Filter from "./Filter";
import List from "./List";
import SearchBar from "./SearchBar";
import { cities, getCityNeighbourhoods, getCityData } from "../assets/CityRouter";
import { defaultFilterCategories, filters } from "../assets/Constants";

function Menu() {
    const [city, setCity] = useContext(CityContext);
    const [search, setSearch] = useState([]);
    const [currentInput, setCurrentInput] = useState("");
    const [filter, setFilter] = useState(0);
    const filterCategories = getCityNeighbourhoods(city, defaultFilterCategories);
    const filteredSample = getCityData(city).filter((resto) => search.every(v => resto.tags.includes(v)));
    return (
        <>
            <CityHeader
                cities={cities}
                city={city}
                setCity={setCity} />
            <SearchBar
                search={search}
                setSearch={setSearch}
                currentInput={currentInput}
                setCurrentInput={setCurrentInput} />
            <Filter
                filter={filter}
                filters={filters}
                setFilter={setFilter} />
            <List
                filter={filter}
                filters={filters}
                filteredSample={filteredSample}
                filterCategories={filterCategories}
                search={search}
                setSearch={setSearch} />
        </>
    )
}

export default Menu;
