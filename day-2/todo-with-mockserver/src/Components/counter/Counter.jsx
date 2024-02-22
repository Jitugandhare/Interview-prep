import { useState } from "react";
import Button from "../common/button/Button";

function Counter() {
  const [count, setCount] = useState(0);
  const handleadd = () => {
    setCount(prev => prev + 1)
  }

  const handlesbs = () => {
    setCount(prev => prev - 1)
  }
  const handle_reset = () => {
    setCount(0)

  }
  return (
    <>
      {/* You can wrap all the elements in such a way that `Container` component will act like a parent div */}
      <h1>Count : {count}</h1>
      <div>
        {/* Add 3 buttons for INC, DEC, RESET using Button component */}
        <Button onClick={handleadd}>INC</Button>
        <Button onClick={handlesbs}>DEC</Button>
        <Button onClick={handle_reset}>RESET</Button>
      </div>
    </>
  );
}

export default Counter;
