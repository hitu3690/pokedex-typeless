import React, { useEffect } from "react";
import { Registry, TypelessContext } from "typeless";
import NewsModule from "./features/news/module";

const registry = new Registry();
function App() {
  return (
    <TypelessContext.Provider value={{ registry }}>
      <div className="layout">
        <NewsModule />
      </div>
    </TypelessContext.Provider>
  );
}

export default App;
