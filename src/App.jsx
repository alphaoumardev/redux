import Leftbar from "./components/pages/Leftbar";
import Navbar from "./components/pages/Navbar";
import Rightbar from "./components/pages/Rightbar";
import Update from "./components/pages/Update";
import "./app.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;
