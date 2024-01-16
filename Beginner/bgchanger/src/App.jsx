import { useState } from "react";

function App() {
  const [color, setColor] = useState("Green");

  let colors = [
    "White",
    "Red",
    "Green",
    "Yellow",
    "Black",
    "Olive",
    "Purple",
    "Gray",
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flexwrap justify-center bottom-12 inset-x-0 px-2">
          <div
            className="flex flex-wrap justify-center
gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
          >
            {colors.map((color) => (
              <button
                key={color}
                className={`outline-none px-4 py-1 rounded-full shadow-lg ${
                  color === "White" || color === "Yellow"
                    ? "text-black"
                    : "text-white"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
