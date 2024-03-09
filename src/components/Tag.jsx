import "./Tag.css";

function Tag({name, search, setSearch, mode}) {
    const handleTag = (tagName) => {
        if (!search.includes(tagName) && mode === "insert") {
            setSearch([...search, tagName]);
        } else if (mode === "delete") {
            setSearch(search.filter((element) => element !== tagName));
        }
    };
    return (
        <div className="tag" onClick={() => handleTag(name)}>
            <p>{name}</p>
        </div>
    )
}

export default Tag;
