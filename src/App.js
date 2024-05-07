import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Main from './Pages/Main/Main';
import HeaderMenu from './Components/HeaderMenu/HeaderMenu';
import './styles.css'
import Orders from './Pages/Orders/Orders';
import Order from './Pages/Order/Order';
import OrderForm from './Pages/OrderForm/OrderForm';
import OrderDelete from './Pages/OrderDelete/OrderDelete'
import Parts from './Pages/Parts/Parts';

function App() {
  return (
    <>
      <HeaderMenu />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/orders/:id' element={<Order />} />
        <Route path='/orders/form' element={<OrderForm />} />
        <Route path='/orders/form/:id' element={<OrderForm />} />
        <Route path='/orders/delete/:id' element={<OrderDelete />} />
        <Route path='/parts' element={<Parts />} />
      </Routes>
    </>
  );
}

export default App;
