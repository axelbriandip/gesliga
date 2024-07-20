import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';

// imports
import './assets/styles/index.css';
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignUpPage';
import Footer from "./components/footer/Footer";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignUpPage/>}></Route>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App