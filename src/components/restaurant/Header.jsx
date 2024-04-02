import { useNavigate } from "react-router-dom";
import "../CityHeader.css";

function Header({heading}) {
    const navigate = useNavigate();
    return (
        <div className="header-wrapper">
            <h1 className="back-arrow" onClick={() => navigate(-1)}>←</h1>
            <h1>{heading}</h1>
        </div>
    )
}

export default Header;