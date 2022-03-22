import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes/Routes";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <BrowserRouter>
      <div className="app" data-theme={theme}>
        <Header onSwitchTheme={switchTheme} theme={theme} />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
