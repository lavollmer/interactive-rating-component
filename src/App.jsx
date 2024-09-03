import "./App.css";
import IconStar from "../src/assets/icon-star.svg";

function App() {
  return (
    <>
      <div className="font-overpass bg-very-dark-blue screen">
        <div className="flex flex-col bg-dark-blue rounded-lg">
          <div className="bg-dark-blue rounded-full h-8 w-8">
            <img src={IconStar} alt="icon-star" className="h-4 w-4" />
          </div>
          <div>
            <h1 className="text-white text-4xl">How did we do?</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
