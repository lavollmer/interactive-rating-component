import "./App.css";

import Rating from "./components/Rating";


function App() {
  const number = "";
  return (
    <>
      <div className="flex flex-col font-overpass bg-black screen">
        <div className="flex flex-col bg-very-dark-blue rounded-lg p-10 space-y-16 h-100 w-100">
         
          <div>
            <Rating number={number} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
