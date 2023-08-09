import Form from "./component/Form";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./component/Home";
// import FormWrapper from "./component/FormWrapper";


export default function App() {
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