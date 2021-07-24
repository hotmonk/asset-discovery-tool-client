import HomeScreen from "./components/Homescreen";
import CustomNavbar from "./components/Custom";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <HomeScreen/>
    </div>
  );
}

export default App;
