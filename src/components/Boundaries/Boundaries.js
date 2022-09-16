import React, { useState } from "react";

const Boundaries = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState();

  const handlereset = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handlereset}>
        <p>
          Guess the number between {setNum1} and {setNum2}
        </p>
        <h1>Game Config!</h1>
        <div>
          Lower Bound:{" "}
          <input
            value={num1}
            onchange={(e) => setNum1(e.target.value)}
            type="number"
          />
        </div>
        <div>
          <input
            value={num2}
            onchange={(e) => setNum2(e.target.value)}
            type="number"
          />
        </div>
        <button>Reset</button>
      </form>
    </>
  );
};

export { Boundaries };
