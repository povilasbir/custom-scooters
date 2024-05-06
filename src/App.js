import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Main from './Pages/Main/Main';
import HeaderMenu from './Components/HeaderMenu/HeaderMenu';
import './styles.css'

function App() {
  return (
    <>
      <HeaderMenu />

      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
