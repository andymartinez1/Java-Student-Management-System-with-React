import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import StudentComponent from "./components/StudentComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListStudentComponent />}></Route>
          <Route path="/students" element={<ListStudentComponent />}></Route>
          <Route path="/add-student" element={<StudentComponent />}></Route>
          <Route
            path="/edit-student/:id"
            element={<StudentComponent />}
          ></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
