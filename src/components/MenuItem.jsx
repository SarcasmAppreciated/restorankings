import "./MenuItem.css";
import Tag from "./Tag";

function MenuItem({element, search, setSearch}) {
    return (
        <div className="menu-item-wrapper">
            <h3 className="resto">{element.name}</h3>
            <div className="tag-wrapper">
                {element.tags.map((element, key) =>
                    <Tag
                        key={key}
                        name={element}
                        search={search}
                        setSearch={setSearch}
                        mode="insert" />
                )}
            </div>
        </div>
    )
}

export default MenuItem;
