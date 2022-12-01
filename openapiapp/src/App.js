import SubwayAPI from "./SubwayAPI";
import "mvp.css";
import "./App.css";
import Postcode from "./Postcode";

function App() {
  return (
    <div className="App">
      <Postcode />
      <SubwayAPI />
      {/* <RechartsLine /> */}
    </div>
  );
}

export default App;
