import { HashRouter as Router} from "react-router-dom";
import Home from "./pages/HomePage";

function App() {
  return (
   <Router basename="/">
     <Home />
   </Router>
  );
}

export default App;