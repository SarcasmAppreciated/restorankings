import "./List.css";
import Heading from "./Heading";
import MenuItem from "./MenuItem";

function List({filter, filters, filterCategories, filteredSample, search, setSearch}) {
    let headingMap = new Map();
    filterCategories[filter].forEach((heading) => {
        headingMap.set(heading, filteredSample.filter((resto) => resto[filters[filter]] === heading));
    });
    return (
        <div id="list">
            {[...headingMap.keys()].map((heading, k) => 
                <div key={k}>
                    <Heading name={heading} />
                    {headingMap.get(heading).map((element, key) =>
                        <MenuItem
                            key={key}
                            element={element}
                            search={search}
                            setSearch={setSearch} />
                    )}
                </div>
            )}
        </div>
    )
}

export default List;
