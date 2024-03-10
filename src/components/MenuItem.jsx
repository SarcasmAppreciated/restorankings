import { Link } from "react-router-dom";
import "./MenuItem.css";
import Tag from "./Tag";

function MenuItem({element, search, setSearch}) {
    return (
        <div className="menu-item-wrapper">
            <Link
                className="no-underline"
                to={`restaurant/${element.id}`}>
                <h3 className="resto">{element.name}</h3>
            </Link>
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