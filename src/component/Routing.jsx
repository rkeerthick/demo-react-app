import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Form  from "./Form"
export default function Routing() {
    return (
        <div>
        <BrowserRouter>
            <Routes>
            <Route path="/" exact element={<Form />}>
                <Route path="/Form" element={<Form />}></Route>
            </Route>
            <Route path="/Home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

// render={(props) => <Home {...props} />} 