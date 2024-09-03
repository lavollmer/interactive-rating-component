import "./App.css";
import IconStar from "../src/assets/icon-star.svg";
import Rating from "./components/Rating";

function App() {
  const number = "";
  return (
    <>
      <div className="flex flex-col font-overpass bg-black screen">
        <div className="flex flex-col bg-very-dark-blue rounded-lg p-10 space-y-16 h-100 w-100">
          <div className="flex flex-col items-center justify-center bg-dark-blue rounded-full h-8 w-8">
            <img
              src={IconStar}
              alt="icon-star"
              className="flex flex-col items-center justify-center h-4 w-4"
            />
          </div>
          <div>
            <h1 className="text-white text-4xl">How did we do?</h1>
            <p className="text-light-grey text-lg">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!{" "}
            </p>
          </div>
          <div>
            <Rating number={number} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
