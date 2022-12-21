import Menu from "./components/Menu";
import NavigationBar from "./components/NavigationBar";
import Content from "./components/Content";
import "./styles/style.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <div className="Nav-bar">
        <NavigationBar />
      </div>
      {/* Menu CTA */}
      <Menu />
      {/* Card */}
      <Content />
    </div>
  );
}

export default App;
