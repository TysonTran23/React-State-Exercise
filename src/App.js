import logo from "./logo.svg";
import Clicker from "./Clicker";
import ButtonGroup from "./ButtonGroup";
import Counter from "./Counter";
import NumberGame from "./NumberGame";
import MagicEightBall from "./MagicEightBall";
import MagicEightBallAGAIN from "./MagicEightBallAGAIN";
import answers from "./answers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NumberGame />
      <MagicEightBall />
      <MagicEightBallAGAIN />
    </div>
  );
}

export default App;
