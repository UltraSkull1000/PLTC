
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import AuthModal from './Components/AuthModal';
import Collection from './Components/Collection';
import Profile from './Components/Profile';

function App() {
  return (
    <>
    <Dashboard />
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    <Router>
      <Routes>
        <Route exact path="/" element={<Collection/>}/>
        <Route path="/collection" element={<Collection />} />
        <Route path="/auth" element={<><Collection /><AuthModal/></>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
