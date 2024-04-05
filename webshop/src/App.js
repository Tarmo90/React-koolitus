import './App.css';
import NavigationBar from './components/NavigationBar';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/global/HomePage';
import {ContactUs} from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import NotFund from './pages/global/NotFound';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Supplier from './pages/admin/Supplier';
import MaintainPictures from './pages/admin/MaintainPictures';
import OnePictures from './pages/admin/OnePictures';

function App() {
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='contact' element={<ContactUs/>}/>
        <Route path='shops' element={<Shops/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='product/:productId' element={<SingleProduct/>}/>

        <Route path='admin' element={<AdminHome/>}/>
        <Route path='admin/add-product' element={<AddProduct/>}/>
        <Route path='admin/edit-product/:productId' element={<EditProduct/>}/>
        <Route path='admin/maintain-products' element={<MaintainProducts/>}/>
        <Route path='admin/maintain-categories' element={<MaintainCategories/>}/>
        <Route path='admin/maintain-shops' element={<MaintainShops/>}/>
        <Route path='admin/maintain-pictures' element={<MaintainPictures/>}/>
        <Route path='admin/supplier' element={<Supplier/>}/>

        <Route path='picture/:index' element={<OnePictures/>}/>


        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>

        <Route path='*' element={<NotFund/>}/> 

      </Routes>
    </div>
  );
}

export default App;

// KOJU:
// Cart.css --> keerata Cart.module.css-ks ja Cart.jsx sees vastavalt muudatused
// Uus fail: MaintainPictures.jsx -> lisada andmebaasi, kustutada andmebaasist, vaadata
//  Pildil on järgmised omadused: {src: "", alt: "", header: "", text: ""}

// 12. 03.04
// 13. 05.04 Alamkomponente ja andmete saatmist nende vahel (props), useContext -> globaalne muutuja
// 14. 10.04 Sisselogimist/registreerumist / Firebase
// 15. 12.04 Disainer
// 16. 17.04 Redux, Custom Hook
// 17. 19.04 1h45min, TypeScript
// 18. 03.05  --> lõpuprojekti esitlemine



