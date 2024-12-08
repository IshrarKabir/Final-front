import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
    <h1>WELCOME</h1>
    <div className="welcome-image">
      <img src="https://blogimage.vantagecircle.com/vcblogimage/en/2024/07/VC_Featured-Image-Light-1.png" /></div>
      
      <Link to={`employees`} className="button-spacing">
        <button>All Employees</button></Link>

      <Link to={`tasks`}><button>All Tasks</button></Link>
    </>
  );
}

export default App;