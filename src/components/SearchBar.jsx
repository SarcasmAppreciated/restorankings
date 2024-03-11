import "./SearchBar.css";
import "./Tag.css";
import Tag from "./Tag";

function SearchBar({search, setSearch, currentInput, setCurrentInput, deleteFnc}) {
    const handleSearchInput = (event) => {
        switch(event.key) {
            case ",":
            case "Enter":
                const ci = currentInput.toLowerCase();
                if (!search.includes(ci)) {
                    setSearch([...search, ci]);
                }
                setCurrentInput("");
                break;
            case "Backspace":
                if (currentInput.length === 0 && search.length > 0) {
                    setSearch(search.slice(0, -1));
                }
        }
    };
    const handleChange = (input) => {
        setCurrentInput(input.target.value);
    };
    return (
        <div id="search-bar">
            {search.map((element, key) => <Tag key={key} name={element} search={search} setSearch={setSearch} mode="delete" />)}
            <input placeholder="Use comma or Enter key to seperate tags" onKeyDown={handleSearchInput} onChange={handleChange} value={currentInput}/>
        </div>
    )
}

export default SearchBar;