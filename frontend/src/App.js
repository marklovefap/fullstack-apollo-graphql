import { Routes, Route } from "react-router";
import Form from "./pages/Form";
import ShowRegister from "./pages/ShowRegister";

function App() {
    return (
        <div>
            <Routes>
                <Route strict exact path="/form" element={<Form />} />
                <Route strict exact path="/showRe" element={<ShowRegister />} />
            </Routes>
        </div>
    )
};

export default App;
