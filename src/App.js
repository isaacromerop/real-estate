import { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import Hero from "./components/Hero/Hero";
import InfoSection from "./components/InfoSection/InfoSection";
import NavBar from "./components/NavBar/NavBar";
import GlobalStyle from "./GlobalStyle";
import { InfoData1, InfoData2 } from "./data";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <GlobalStyle />
      <NavBar menu={setMenu} />
      <Dropdown menu={menu} openMenu={setMenu} />
      <Hero />
      <InfoSection {...InfoData1} />
      <InfoSection {...InfoData2} />
    </div>
  );
}

export default App;
