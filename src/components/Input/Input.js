import { useState } from "react";

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const getMessage = (guess, rnd) => {
  const guessNo = Number(guess);
  if (guessNo < rnd) return "To low";
  if (guessNo > rnd) return "To high";
  if (guessNo === rnd) return "Great!";
};

const Input = () => {
  const [guess, setGuess] = useState("");
  const [rnd, setRnd] = useState(getRandom(100));
  const [msg, setMsg] = useState("");
  const [count, setCount] = useState(0);
  const checkGuess = () => {
    setMsg(getMessage(guess, rnd));
    setCount((count) => count + 1);
  };
  const start = () => {
    setRnd(getRandom(100));
    setCount(0);
    setMsg("");
  };
  return (
    <>
      <h1>Play!</h1>
      <form>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        {msg !== "Great!" ? (
          <button type="button" onClick={checkGuess}>
            Guess
          </button>
        ) : (
          <button type="button" onClick={start}>
            Start again!
          </button>
        )}
        <div>{msg}</div>
        <div>No of guesses {count}</div>
      </form>
    </>
  );
};
export { Input };
