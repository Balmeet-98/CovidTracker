import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <nav
        className="d-flex navbar navbar-expand-lg navbar-light bg-dark justify-content-center"
        style={{ height: "710px" }}
      >
        <div>
          <Header />
        </div>
      </nav>
    </>
  );
}

export default App;
