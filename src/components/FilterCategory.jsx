import "./MenuItem.css";

function FilterCategory({name}) {
    return (
        <div className="menu-item-wrapper">
            <h3 className="filter-category">{name}</h3>
        </div>
    )
}

export default FilterCategory;