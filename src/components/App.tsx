import {FC} from 'react';

import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Page404 from '../pages/Page404'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Routes,
  Route,
} from "react-router-dom";

const App: FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/cart" element={<Cart />}/>
				<Route path="/products" element={<ProductList />}/>
				<Route path="/products/:productId" element={<Product />}/>
				<Route path="/register" element={<Register />}/>
				<Route path="/login" element={<Login />}/>
				<Route path="/*" element={<Page404 />}/>
			</Routes>
			<ToastContainer/>
		</>
	)
}

export default App;