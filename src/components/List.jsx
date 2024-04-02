import "./List.css";
import FilterCategory from "./FilterCategory";
import MenuItem from "./MenuItem";

function List({filter, filters, filterCategories, filteredSample, search, setSearch, city}) {
    let filterMap = new Map();
    filterCategories[filter].forEach((filterName) => {
        filterMap.set(filterName, filteredSample.filter((resto) => resto[filters[filter]] === filterName));
    });
    return (
        <div id="list">
            {[...filterMap.keys()].map((filterName, k) => 
                <div key={k}>
                    <FilterCategory name={filterName} />
                    {filterMap.get(filterName)
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((element, key) =>
                        <MenuItem
                            key={key}
                            element={element}
                            search={search}
                            setSearch={setSearch}
                            city={city} />
                    )}
                </div>
            )}
        </div>
    )
}

export default List;