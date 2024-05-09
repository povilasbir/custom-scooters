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
import FrameForm from './Pages/Parts/FrameForm/FrameForm';
import ControllerForm from './Pages/Parts/ControllerForm/ControllerForm';
import BatteryForm from './Pages/Parts/BatteryForm/BatteryForm';
import MotorForm from './Pages/Parts/MotorForm/MotorForm';
import Contacts from './Pages/Contacts/Contacts';

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

        <Route path='/parts/frameForm' element={<FrameForm />} />
        <Route path='/parts/batteryForm' element={<BatteryForm />} />
        <Route path='/parts/controllerForm' element={<ControllerForm />} />
        <Route path='/parts/motorForm' element={<MotorForm />} />

        <Route path='/parts/frameForm/:id' element={<FrameForm />} />
        <Route path='/parts/batteryForm/:id' element={<BatteryForm />} />
        <Route path='/parts/controllerForm/:id' element={<ControllerForm />} />
        <Route path='/parts/motorForm/:id' element={<MotorForm />} />

        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
