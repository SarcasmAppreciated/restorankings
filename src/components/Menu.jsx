import { useState } from "react";
import "./Menu.css"
import CityHeader from "./CityHeader";
import Filter from "./Filter";
import List from "./List";
import SearchBar from "./SearchBar";

function Menu() {
    const filters = ["value", "neighbourhood"];
    const seattleFilterCategories = [
        ["high", "medium", "low", "to try"],
        ["downtown", "capitol hill", "fremont", "sodo", "slu"]
    ];
    const seattle = [
        {
            name: "Sushi Kashiba",
            neighbourhood: "downtown",
            value: "high",
            tags: ["downtown", "expensive", "sushi"]
        },
        {
            name: "Tavoláta Capitol Hill",
            neighbourhood: "capitol hill",
            value: "medium",
            tags: ["capitol hill", "pasta", "italian"]
        },
        {
            name: "Mamoon",
            neighbourhood: "capitol hill",
            value: "medium",
            tags: ["capitol hill", "middle eastern", "lebanese"]
        },
        {
            name: "Pie Bar",
            neighbourhood: "capitol hill",
            value: "high",
            tags: ["capitol hill", "pie", "late night"]
        }
    ];
    const vancouverFilterCategories = [
        ["high", "medium", "low", "to try"],
        ["downtown", "kitsilano"]
    ];
    const vancouver = [];
    
    const cities = ["seattle", "vancouver"];
    const [city, setCity] = useState("seattle");
    const data = city === "seattle" ? seattle : vancouver;
    const filterCategories = city === "seattle" ? seattleFilterCategories : vancouverFilterCategories;
    let [search, setSearch] = useState([]);
    let [currentInput, setCurrentInput] = useState("");
    let filteredSample = data.filter((resto) => search.every(v => resto.tags.includes(v)));
    let [filter, setFilter] = useState(0);
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
