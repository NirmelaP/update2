
import './App.css';
import Home from './components/home';
import Movies from './components/movies';
import{BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
      </Routes>
      
  
      
    </div>
    </BrowserRouter>
  );
}

export default App;
