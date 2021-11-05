import "./App.css";
import MinusButton from "./components/MinusButton";
import PlusButton from "./components/PlusButton";
import ResetButton from "./components/ResetButton";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddCounter from "./components/AddCounter";

const App = () => {
  const [counters, setCounter] = useState([0]);
  const resetValue = 0;

  return (
    <div className="App">
      <Header />
      <AddCounter counters={counters} setCounter={setCounter} />
      <div className="container">
        {counters.map((counter, i) => {
          return (
            <div className="counter-item">
              <div className="row-1">
                <MinusButton
                  counters={counters}
                  counter={counter}
                  setCounter={setCounter}
                  index={i}
                />

                <div className="counter">
                  <span>{counter}</span>
                </div>

                <PlusButton
                  counters={counters}
                  counter={counter}
                  setCounter={setCounter}
                  index={i}
                />
              </div>
              <ResetButton
                counters={counters}
                setCounter={setCounter}
                resetValue={resetValue}
                index={i}
              />
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
};

export default App;
