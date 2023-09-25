import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import PieChat from './components/PieChat';
import Final from './components/Final';
import ModalInClassComponents from './components/ModalInClassComponents';
import Enseignant from './components/EnseignantC';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              {/*<Route  exact path="/"  element={<ListEmployeeComponent/>} />*/}
              <Route  exact path="/"  element={<Enseignant/>} />
              <Route  path="/employees" element={<ListEmployeeComponent/>} />
              <Route  path="/add-employee" element={<CreateEmployeeComponent/>} />
              <Route  path="/update-employee/:id" element={<UpdateEmployeeComponent/>} />
              <Route  path="/pie" element={<PieChat/>}/>
              <Route  path="/final" element={<Final/>}/>
              <Route  path="/test" element={<ModalInClassComponents/>}/>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
