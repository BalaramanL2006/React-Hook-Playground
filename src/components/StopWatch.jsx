import { useState, useRef, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function StopWatch() {
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    const start = () => {
        if (timerRef.current !== null) {
            return;
        }

        timerRef.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    };

    const pause = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const reset = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setSeconds(0);
    };

    useEffect(() => {
        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    return (
            <div className="card shadow p-4 bg-light">
                <h3 className="mb-3">Stopwatch</h3>

                <h2>{seconds} Seconds</h2>

                <div>
                    <button
                        className="btn btn-success me-2"
                        onClick={start}
                    >
                        Start
                    </button>

                    <button
                        className="btn btn-primary me-2"
                        onClick={pause}
                    >
                        Pause
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={reset}
                    >
                        Reset
                    </button>
                </div>
            </div>
    );
}

export default StopWatch
