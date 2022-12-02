import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import SingUp from './component/SingUp';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from "./component/UpdateComponent"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <h1 className=''>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/logout' element={<h1>Hii Logout is  there</h1>} />
            <Route path='/profile' element={<h1>Hii profile  is there </h1>} />
          </Route>
          <Route path='/signup' element={<SingUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </h1>

  );
}

export default App;
