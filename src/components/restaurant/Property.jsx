import "./Property.css";

function Property({keyName, value, isText = false, isNotes = false}) {
    let val = "";
    if (Array.isArray(value)) {
        value.forEach((element) => val = val.concat(element).concat(", "));
        val = val.substring(0, val.length - 2);
    } else {
        val = value;
    }
    return (
        <div className={isNotes ? "property-wrapper notes" : "property-wrapper"}>
            <h3>{keyName}:</h3>
            <p className={isText ? "text" : ""}>{val}</p>
        </div>
    )
}

export default Property;