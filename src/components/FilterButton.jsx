import "./FilterButton.css";

function FilterButton({click, name, index, state}) {
    let filterClassName = state == index ? "filter selected" : "filter";
    return (
        <button onClick={() => click(index)} className={filterClassName}>{name}</button>
    )
}

export default FilterButton;