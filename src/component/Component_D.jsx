import { useContext } from "react";
import { MyData } from "../App";

const Component_D = () => {
  // Extract Context
  const data = useContext(MyData);
  return (
    <div>
      <h1 className="text-red-700 font-semibold">Component_D</h1>

      {/* Access Context without Drilling */}
      <p className="text-red-700 font-semibold">{data}</p> 
    </div>
  );
};

export default Component_D;
