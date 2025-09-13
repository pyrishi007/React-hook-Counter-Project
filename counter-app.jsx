import react from "react";
import reactDOM from "react-dom/client";
import "./counter-app.css";
import { useState, useEffect } from "react";
import Gestures from "./src/ShimmerUI/shimmerUI";

//header
const Header = () => {
  const [counterUp, setCounterUp] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
  }, []);

  //Logic for incrementing value
  const counterUpdate = (e) => {
    if (e.target.tagName === "BUTTON") {
      setCounterUp(counterUp + 1);
    }
  };

  //Lgic for decrementing value
  const counterDown = (e) => {
    if (e.target.tagName === "BUTTON") {
      setCounterUp(counterUp - 1);
    }
  };

  return loading ? (
   <Gestures/>
  ) : (
    <div className="counterApp">
      <div className="counterAppheader">
        <h1>Counter App</h1>
        <p>{counterUp}</p>
      </div>

      <div className="counterbtns">
        <button onClick={counterUpdate}>ADD</button>
        <button onClick={counterDown}>REMOVE</button>
      </div>
    </div>
  );
};

const rootElement = reactDOM.createRoot(document.querySelector("#root"));
rootElement.render(<Header />);
