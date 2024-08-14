import "./App.css";
import Mood from "./components/Mood";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import ManyCounters from "./components/ManyCounters";
function App() {
  return (
    <>
      <Mood/>
      <Hello />
      {/* <Counter /> */}
      <ManyCounters/>
    </>
  );
}

export default App;