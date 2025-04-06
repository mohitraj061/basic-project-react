import { useState } from "react";

function App() {
  const [color, setColor] = useState("#1F2937"); // Default dark gray background

  return (
    <div
      className="w-full h-screen duration-200 flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-8 bg-black/30 px-6 py-3 rounded-full shadow-lg">
        Background Color Changer
      </h1>

      {/* Buttons Container */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-black/30 backdrop-blur-sm px-4 py-3 rounded-3xl">
          {/* Buttons */}
          <button
            onClick={() => setColor("#DC2626")} // Dark Red
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#DC2626" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("#16A34A")} // Dark Green
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#16A34A" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("#2563EB")} // Dark Blue
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#2563EB" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("#3F6212")} // Dark Olive
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#3F6212" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("#CA8A04")} // Dark Yellow
            className="outline-none px-6 py-2 rounded-full text-black font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#CA8A04" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("#DB2777")} // Dark Pink
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#DB2777" }}
          >
            Pink
          </button>

          <button
            onClick={() => setColor("#6D28D9")} // Dark Purple
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#6D28D9" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("#000000")} // Black
            className="outline-none px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: "#000000" }}
          >
            Black
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
