import "./App.css";
import { useState } from "react";
import { CityContext } from "./Context";

function App({children}) {
    const [city, setCity] = useState("seattle");

    return (
        <CityContext.Provider value={[city, setCity]}>
            <div id="app">
                {children}
            </div>
        </CityContext.Provider>
    )
}

export default App;