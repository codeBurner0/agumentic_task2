
import './App.css';
import EmployeeRegistration from './components/EmployeeRegistration';
import Navbar from './components/navbar';
import Login from './components/Login'
import { Route,Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/register' element={<EmployeeRegistration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/welcome' element={<Welcome/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
