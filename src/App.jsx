import "./App.css";
import { useState } from "react";
import { CityContext, FilterContext } from "./Context";

function App({children}) {
    const [city, setCity] = useState("seattle");
    const [filter, setFilter] = useState(0);

    return (
        <CityContext.Provider value={[city, setCity]}>
            <FilterContext.Provider value={[filter, setFilter]}>
                <div id="app">
                    {children}
                </div>
            </FilterContext.Provider>
        </CityContext.Provider>
    )
}

export default App;