import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTopOnLoad from "../components/ScrollToTopOnLoad";
import useLocalStorage from "use-local-storage";
import DarkMode from "../components/DarkMode";
import useWindowResize from "../hooks/useWindowResize";
import ApiCall from "../components/ApiCall";

function App() {
  const { width} = useWindowResize();

  const [theme, setTheme] = useLocalStorage("theme","light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Router>
      <ScrollToTopOnLoad />
      <div className="site-wrapper" data-theme={theme}>
        <div className="app">
          {width >= 768 ? (
            <div className="top-bar">
              <div className="top-bar-container">
                {<TopBar />}
                {<DarkMode theme={theme} switchTheme={switchTheme} />}
              </div>
              {<Navigation />}
            </div>
          ) : (
            <div className="top-bar">
              {<TopBar />}
              {<DarkMode theme={theme} switchTheme={switchTheme} />}
              {<Navigation />}
            </div>
          )}
          <header>{<Header />}</header>
          <main>
            <section className="page">
              <ApiCall />
            </section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
