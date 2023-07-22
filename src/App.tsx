import Button from "./components/Button";
import Home from "./components/Home";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="p-0 m-0">
    <Navigation/>  
    <Home/>
    <Button type="submit">
      login
      </Button>
    
    </div>
  );
}

export default App;
