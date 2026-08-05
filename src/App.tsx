import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import App_bak from "./bak/App_bak";

// App Component
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/origin" element={<App_bak />} />
        </Routes> 
    )
};

export default App;