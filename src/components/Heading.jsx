import "./MenuItem.css";

function Heading({name}) {
    return (
        <div className="menu-item-wrapper">
            <h3 className="heading">{name}</h3>
        </div>
    )
}

export default Heading;
