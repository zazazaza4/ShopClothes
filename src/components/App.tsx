import {FC, lazy} from 'react';
//alert
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//react-router
import {
  Routes,
  Route,
} from "react-router-dom";
//pages and lazy loading
const ProductList = lazy(() => import( '../pages/ProductList'));
const Home = lazy(() => import( '../pages/Home'));
const Product = lazy(() => import( '../pages/Product'));
const Login = lazy(() => import( '../pages/Login'));
const Register = lazy(() => import( '../pages/Register'));
const Cart = lazy(() => import( '../pages/Cart'));
const Page404 = lazy(() => import( '../pages/Page404'));



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