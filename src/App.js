import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>No page yet...</h1>} />
      </Routes>
    </>
  );
}

export default App;
