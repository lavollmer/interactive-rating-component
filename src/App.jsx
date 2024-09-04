import "./App.css";
import Rating from "./components/Rating";

function App() {
  // declaring number variable to pass as prop to Rating component
  const number = "";
  
  return (
    <>
      {/* CSS class screen to apply styling to entire page */}
      <div className="flex flex-col font-overpass bg-black screen">
        <div className="flex flex-col bg-raisin-black rounded-lg p-10 space-y-16 h-100 w-100">
          <Rating number={number} />
        </div>
      </div>
    </>
  );
}

export default App;
