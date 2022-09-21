import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Chips from "./components/Chips";
import { AppContextProvider } from "./AppContext";
// import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div>
      <AppContextProvider>
        {/* <Router> */}
        <Header />
        <div className="container">
          <Sidebar />
          <div className="main-container">
            <Chips />
            <Content />
          </div>
        </div>
        {/* </Router> */}
      </AppContextProvider>
    </div>
  );
};

export default App;
