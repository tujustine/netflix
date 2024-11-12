import "./App.css";
import movies from "./assets/json/movies.json";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Section movies={movies} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
