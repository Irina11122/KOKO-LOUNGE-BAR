import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/Navbar';
import Menu from './Menu';
import Home from '../sections/Home';
import Pay from './Pay';
export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </>
  );
}
