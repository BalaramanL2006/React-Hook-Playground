import { useState, useRef } from "react";

function Focus() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  return (
    
      <div className="card shadow p-4 ">
        <h2>React Hook Playground</h2>
        <h3 className="card-title">Auto Focus Input</h3>
        <br />
        <input
          ref={inputRef}
          type="text"
          className="form-control shadow mb-3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <br />
        <br />
        <div>
          <button
            className="btn btn-primary me-2"
            onClick={() => inputRef.current.focus()}
          >
            Focus
          </button>
          <button className="btn btn-danger " onClick={() => setInputValue("")}>
            clear
          </button>
        </div>
      </div>
    
  );
}

export default Focus;
