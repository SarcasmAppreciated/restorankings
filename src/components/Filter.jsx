import "./Filter.css";
import "./FilterButton.css";
import FilterButton from "./FilterButton";

function Filter({filters, filter, setFilter}) {
    const handleFilter = (key) => {
        setFilter(key);
    };
    return (
        <div id="filter-wrapper">
            {filters.map((name, key) =>
                <FilterButton
                    key={key}
                    className="filter"
                    click={handleFilter}
                    index={key}
                    name={name}
                    state={filter} />
            )}
        </div>
    )
}

export default Filter;