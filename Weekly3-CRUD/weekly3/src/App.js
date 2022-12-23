import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import ContentPage from "./pages/ContentPage";
import CreatePage from "./pages/CreatePage";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="content" element={<ContentPage />}></Route>
        <Route path="create" element={<CreatePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
