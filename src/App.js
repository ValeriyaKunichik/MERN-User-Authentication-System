import {Routes, Route} from "react-router-dom"
import './App.css';
import Register from './Register';
import Login from './Login';
import LinkPage from './LinkPage';
import RequireAuth from './RequireAuth';
import Admin from './Admin';
import Home from './Home';
import Unauthorized from './Unauthorized';
import PersistLogin from './PersistLogin';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  return (
    <div className="App">
      <Routes>
                <Route path='/register' element={<Register />} />
                <Route path='/auth' element={<Login />} />
                <Route path="linkpage" element={<LinkPage />} />
                <Route path="unauthorized" element={<Unauthorized />} />
                <Route element={<PersistLogin />}>
                  <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                      <Route path="/" element={<Home />} />
                  </Route>
                  <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                      <Route path="/admin" element={<Admin />} />
                  </Route>
                </Route>
      </Routes>
    </div>
  );
}

export default App;
