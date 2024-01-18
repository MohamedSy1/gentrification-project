import HomePage from "./front-end/pages/Home";
import SourcePage from "./front-end/pages/source";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    RouterProvider,
    createBrowserRouter,
  } from "react-router-dom";

function App() {
    return (
        <BrowserRouter basename="/gentrification-project">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pages" element={<SourcePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;