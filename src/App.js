import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        {/* instead of using swithc i use Routes and keep the Login componet as the element in the Route */}
        <Routes>
          <Route exact path= "/" element={<Login/>}/>
          <Route exact path="/home" element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
