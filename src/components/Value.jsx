import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const increment = () => {
    countRef.current = count;
    setCount(count + 1);
  };

  const decrement = () => {
    countRef.current = count;
    setCount(count - 1);
  };

  return (
      <div className="card shadow p-4 bg-light">
        <h3 className="card-title">Previous Value Tracker</h3>
        <br />
        <p>
          Current: {count} | Previous: {countRef.current}
        </p>

        <div>
          <button className="btn btn-success me-2" onClick={increment}>
            Increment
          </button>
          <button className="btn btn-danger" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
  );
}

export default PreviousValue;
