
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Collection from './Components/Collection';
import Profile from './Components/Profile';
import AuthForm from './Components/AuthForm';
import RegForm from './Components/RegForm';
import Teams from './Components/Teams';
import Marketplace from './Components/Marketplace';

function App() {

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }*/

  return (
    <>
    <Dashboard />
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    <Router>
      <Routes>
        <Route exact path="/" element={<Collection />}/>
        <Route path="/collection" element={<Collection />} />
        <Route path="/auth" element={<AuthForm/>}/>
        <Route path="/register" element={<RegForm/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/teams" element={<Teams />}/>
        <Route path="/marketplace" element={<Marketplace/>}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
