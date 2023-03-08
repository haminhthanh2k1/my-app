import React, { createContext, useState } from "react";
import Children from "./Children";


export const countNumber = createContext();

function Parents() {
  const [count, setCount] = useState(0);
  return (
    <countNumber.Provider value={{ count, setCount }}>
      <div>
        <Children data={{ count, setCount }} />
      </div>
    </countNumber.Provider>
  );
}

export default Parents;
