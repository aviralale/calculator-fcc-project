import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [expression, setExpression] = useState(0);
  const clearScreen = () => {
    setResult(0);
    setExpression(0);
  };
  const appendOperator = (operator) => {
    setExpression(expression + operator);
  };
  const appendNumber = (number) => {
    setExpression(expression + number);
  };
  const appendDecimal = (decimal) => {
    setExpression(expression + decimal);
  };
  const calculate = () => {
    setResult(eval(expression));
  };
  return (
    <div className="flex  justify-center items-center min-h-[100vh]">
      <div className="container flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="credits digital text-3xl ">Calc by</h1>
          <h1 className="credits digital text-7xl ">AVIRAL</h1>
          <ul className="flex gap-2 digital">
            <li>
              <a href="https://www.linkedin.com/in/aviral-ale/" target="blank">
                Li.
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/aviral.who_/" target="blank">
                Insta.
              </a>
            </li>
            <li>
              <a href="https://github.com/dedyspooky" target="blank">
                Github.
              </a>
            </li>
            <li>
              <a href="https://www.abiralale.com.np/" target="blank">
                Portfolio.
              </a>
            </li>
          </ul>
        </div>
        <div className="calculator">
          <div className="text-right bg-gray-800 p-2 digital display min-h-40 text-5xl border border-gray-400">
            <h1 className="text-5xl">{expression}</h1>
            <h1 className="text-7xl">{result}</h1>
          </div>
          <div className="controls flex">
            <div className="buttons flex flex-col">
              <div className="row">
                <button
                  className="digital border border-gray-400 bg-red-800"
                  id="clear"
                  onClick={clearScreen}
                >
                  AC
                </button>
                <button
                  className="digital border border-gray-400 bg-yellow-800"
                  id="divide"
                  onClick={() => appendOperator("/")}
                >
                  /
                </button>
                <button
                  className="digital border border-gray-400 bg-yellow-800"
                  id="multiply"
                  onClick={() => appendOperator("*")}
                >
                  x
                </button>
              </div>
              <div className="row">
                <button
                  className="digital border border-gray-400"
                  id="seven"
                  onClick={() => appendNumber(7)}
                >
                  7
                </button>
                <button
                  className="digital border border-gray-400"
                  id="eight"
                  onClick={() => appendNumber(8)}
                >
                  8
                </button>
                <button
                  className="digital border border-gray-400"
                  id="nine"
                  onClick={() => appendNumber(9)}
                >
                  9
                </button>
              </div>
              <div className="row">
                <button
                  className="digital border border-gray-400"
                  id="four"
                  onClick={() => appendNumber(4)}
                >
                  4
                </button>
                <button
                  className="digital border border-gray-400"
                  id="five"
                  onClick={() => appendNumber(5)}
                >
                  5
                </button>
                <button
                  className="digital border border-gray-400"
                  id="six"
                  onClick={() => appendNumber(6)}
                >
                  6
                </button>
              </div>
              <div className="row">
                <button
                  className="digital border border-gray-400"
                  id="one"
                  onClick={() => appendNumber(1)}
                >
                  1
                </button>
                <button
                  className="digital border border-gray-400"
                  id="two"
                  onClick={() => appendNumber(2)}
                >
                  2
                </button>
                <button
                  className="digital border border-gray-400"
                  id="three"
                  onClick={() => appendNumber(3)}
                >
                  3
                </button>
              </div>
              <div className="row">
                <button
                  className="digital border border-gray-400"
                  id="zero"
                  onClick={() => appendNumber(0)}
                >
                  0
                </button>
                <button
                  className="digital border border-gray-400"
                  id="decimal"
                  onClick={() => appendDecimal(".")}
                >
                  .
                </button>
                <button
                  className="digital border border-gray-400 bg-blue-800"
                  id="equals"
                  onClick={calculate}
                >
                  =
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <button
                className="digital border border-gray-400 h-[8rem] bg-yellow-800"
                id="subtract"
                onClick={() => appendOperator("-")}
              >
                -
              </button>
              <button
                className="digital border border-gray-400 h-[12rem] bg-yellow-800"
                id="add"
                onClick={() => appendOperator("+")}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
