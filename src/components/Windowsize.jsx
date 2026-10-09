
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
   
      <div className="card shadow p-4 text-center">
        <h2 className="text-primary mb-3">
          Window Size
        </h2>

        <p className="fs-5 mb-3">
          Browser Width
        </p>

        <h3 className="text-success">
          {width}px
        </h3>

        <p className="text-muted mb-0">
          Resize your browser to see the change.
        </p>
      </div>
  );
}

export default WindowSize
