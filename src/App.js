import React, { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import SinglePage from "./components/SinglePage";
import Footer from "./components/Footer";
import "./App.scss";
import "./styles/Home.scss";
import "./styles/NavigationBar.scss";
import "./styles/Footer.scss";
import "./styles/About.scss";
import "./styles/ContactUsSmall.scss";
import "./styles/OurExpertise.scss";
import "./styles/ContactUs.scss";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="app">
      <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <SinglePage activeTab={activeTab} />
      <Footer />
    </div>
  );
}

export default App;
