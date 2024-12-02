import { createContext } from "react";
import Component_A from "./component/Component_A";

// Create Context
export const MyData = createContext("Data from App.jsx");
const App = () => {
  return (
    <div>
      <MyData.Provider value="Data passed from App.jsx">
        {/* Components */}
        <Component_A></Component_A>
      </MyData.Provider>
    </div>
  );
};

export default App;
