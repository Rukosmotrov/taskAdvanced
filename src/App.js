import {BrowserRouter} from "react-router-dom";
import Routers from "./components/router/Routers";
import Main from "./components/Main";
import './index.css';
import Fonts from "./components/Fonts";
import {createContext, useEffect, useState} from "react";

export const FontContext = createContext(null);

function App() {
    const [tabsData, setTabsData] = useState();
    const [selectedFont, setSelectedFont] = useState(null);

    const getTabs = () => {
         fetch('http://json.ffwagency.md/tabs')
            .then(response => response.json())
            .then(json => setTabsData(json));
    }

    useEffect(() => {
        getTabs();
    }, []);

  return (
      <FontContext.Provider value={{
          selectedFont,
          setSelectedFont
      }}>
          <Main tabsData={tabsData}/>
      </FontContext.Provider>
  );
}

export default App;
