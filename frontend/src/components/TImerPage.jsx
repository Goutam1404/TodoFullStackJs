// import React, { useState, useRef } from "react";
import React, { useState, useEffect } from "react";

const TimerPage = ({ darkTheme, setDarkTheme }) => {
  const theme = darkTheme != undefined ? darkTheme : false;

  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState("stopwatch"); // "stopwatch" or "timer"
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const toggleTheme = () => {
        setDarkTheme((prev) => !prev);
      };
  // Timer Logic
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (mode === "timer" && prev <= 1) {
            setRunning(false);
            return 0;
          }
          return mode === "stopwatch" ? prev + 1 : prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, mode]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleSetTimer = () => {
    const total =
      parseInt(hours || 0) * 3600 +
      parseInt(minutes || 0) * 60 +
      parseInt(seconds || 0);
    setTimeLeft(total);
    setMode("timer");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center transition-all duration-500 ${
        theme
          ? "bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"
          : "bg-gradient-to-br from-gray-100 via-blue-200 to-white"
      }`}
    >
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleTheme}
          className={`px-4 py-1 border rounded text-sm transition duration-300 transform hover:scale-105 ${
            darkTheme
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"
          }`}
        >
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 drop-shadow-lg">
        {mode === "timer" ? "Countdown Timer" : "Stopwatch"}
      </h1>

      <div className="text-6xl md:text-7xl font-mono mb-8 font-bold transition-all duration-300 tracking-wider">
        {formatTime(timeLeft)}
      </div>

      {mode === "timer" && (
        <div className="flex gap-2 justify-center mb-6">
          <input
            type="number"
            placeholder="HH"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className={`w-20 p-2 rounded-md text-center font-semibold shadow-inner outline-none ${
              theme ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          />
          <input
            type="number"
            placeholder="MM"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            className={`w-20 p-2 rounded-md text-center font-semibold shadow-inner outline-none ${
              theme ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          />
          <input
            type="number"
            placeholder="SS"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            className={`w-20 p-2 rounded-md text-center font-semibold shadow-inner outline-none ${
              theme ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          />
        </div>
      )}

      <div className="space-x-4 mb-6">
        <button
          onClick={() => setRunning(!running)}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setTimeLeft(0);
          }}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition transform hover:scale-105 shadow-lg"
        >
          Reset
        </button>
        <button
          onClick={() => setMode(mode === "timer" ? "stopwatch" : "timer")}
          className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition transform hover:scale-105 shadow-lg"
        >
          Switch to {mode === "timer" ? "Stopwatch" : "Timer"}
        </button>
      </div>

      {mode === "timer" && (
        <button
          onClick={handleSetTimer}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
        >
          Set Timer
        </button>
      )}
    </div>
  );
};

export default TimerPage;


// const TimerPage = () => {
//   const [milliseconds, setMilliseconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [darkTheme, setDarkTheme] = useState(false);
//   const [mode, setMode] = useState("stopwatch"); // 'stopwatch' or 'timer'
//   const [customHours, setCustomHours] = useState(0);
//   const [customMinutes, setCustomMinutes] = useState(0);
//   const [customSeconds, setCustomSeconds] = useState(0);
//   const [customSet, setCustomSet] = useState(false);
//   const timerRef = useRef(null);

//   const toggleTimer = () => {
//     if (isRunning) {
//       clearInterval(timerRef.current);
//     } else {
//       timerRef.current = setInterval(() => {
//         setMilliseconds((prev) => {
//           if (mode === "timer" && prev <= 0) {
//             clearInterval(timerRef.current);
//             setIsRunning(false);
//             return 0;
//           }
//           return mode === "timer" ? prev - 1000 : prev + 1000;
//         });
//       }, 1000);
//     }
//     setIsRunning(!isRunning);
//   };

//   const resetTimer = () => {
//     clearInterval(timerRef.current);
//     const totalMs =
//       (parseInt(customHours) * 3600 +
//         parseInt(customMinutes) * 60 +
//         parseInt(customSeconds)) *
//       1000;
//     setMilliseconds(mode === "timer" && customSet ? totalMs : 0);
//     setIsRunning(false);
//   };

//   const toggleTheme = () => {
//     setDarkTheme((prev) => !prev);
//   };

//   const handleCustomSubmit = (e) => {
//     e.preventDefault();
//     const totalMs =
//       (parseInt(customHours) * 3600 +
//         parseInt(customMinutes) * 60 +
//         parseInt(customSeconds)) *
//       1000;
//     if (!isNaN(totalMs) && totalMs > 0) {
//       setMilliseconds(totalMs);
//       setCustomSet(true);
//       setIsRunning(false);
//       clearInterval(timerRef.current);
//     }
//   };

//   const formatTime = (ms) => {
//     const hrs = String(Math.floor(ms / 3600000)).padStart(2, "0");
//     const mins = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
//     const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
//     return `${hrs}:${mins}:${secs}`;
//   };

//   return (
//     <div
//       className={`${
//         darkTheme
//           ? "bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white"
//           : "bg-gradient-to-br from-gray-100 via-blue-200 to-white"
//       } min-h-screen flex flex-col items-center justify-center px-4 transition-all duration-500`}
//     >
//       <div className="absolute top-4 right-4 space-x-2">
//         <button
//           onClick={toggleTheme}
//           className="px-4 py-1 border rounded text-sm"
//         >
//           {darkTheme ? "Switch to Light" : "Switch to Dark"}
//         </button>
//         <button
//           onClick={() => setMode(mode === "timer" ? "stopwatch" : "timer")}
//           className="px-4 py-1 border rounded text-sm"
//         >
//           {mode === "timer" ? "Switch to Stopwatch" : "Switch to Timer"}
//         </button>
//       </div>

//       <h1 className="text-4xl font-extrabold mb-6 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
//         {mode === "timer" ? "Timer" : "Stopwatch"}
//       </h1>

//       {mode === "timer" && (
//         <form onSubmit={handleCustomSubmit} className="mb-6 flex gap space-y-2">
//           <div className="flex gap-2">
//             <input
//               type="number"
//               min="0"
//               placeholder="HH"
//               value={customHours}
//               onChange={(e) => setCustomHours(e.target.value)}
//               className="px-2 py-1 border rounded w-20 text-black text-center"
//             />
//             <input
//               type="number"
//               min="0"
//               placeholder="MM"
//               value={customMinutes}
//               onChange={(e) => setCustomMinutes(e.target.value)}
//               className="px-2 py-1 border rounded w-20 text-black text-center"
//             />
//             <input
//               type="number"
//               min="0"
//               placeholder="SS"
//               value={customSeconds}
//               onChange={(e) => setCustomSeconds(e.target.value)}
//               className="px-2 py-1 border rounded w-20 text-black text-center"
//             />
//           </div>
//           <button
//             type="submit"
//             className="mt-6  bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
//           >
//             Set Timer
//           </button>
//         </form>
//       )}

//       <div
//         className={`text-7xl font-mono mb-8 drop-shadow-lg ${
//           darkTheme ? "text-blue-400" : "text-blue-800"
//         }`}
//       >
//         {formatTime(milliseconds)}
//       </div>

//       <div className="space-x-4">
//         <button
//           onClick={toggleTimer}
//           className={`px-6 py-2 text-white rounded text-lg ${
//             isRunning
//               ? "bg-yellow-500 hover:bg-yellow-600"
//               : "bg-green-500 hover:bg-green-600"
//           }`}
//         >
//           {isRunning ? "Pause" : "Start"}
//         </button>
//         <button
//           onClick={resetTimer}
//           className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded text-lg"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TimerPage;
