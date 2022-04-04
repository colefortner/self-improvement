import "./App.css";
import Weight from "./weight/Weight";
import Steps from "./fitness/steps/Steps";
import Sleep from "./sleep/Sleep";

function App() {
  return (
    <div className="App">
      <Weight />
      <Steps />
      <Sleep />
    </div>
  );
}

export default App;
