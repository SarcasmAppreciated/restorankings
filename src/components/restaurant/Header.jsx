import { Link } from "react-router-dom";
import "../CityHeader.css";

function Header({heading}) {
    return (
        <div className="header-wrapper">
            <Link
                className="no-underline"
                to={"/"}>
                    <h1 className="back-arrow">←</h1>
            </Link>
            <h1>{heading}</h1>
        </div>
    )
}

export default Header;