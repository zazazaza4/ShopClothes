import Home from '../pages/Home.jsx';
import ProductList from '../pages/ProductList.jsx';
import Product from '../pages/Product.jsx';
import Register from '../pages/Register.jsx';
import Login from '../pages/Login.jsx';
import Cart from '../pages/Cart.jsx';
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/cart" element={<Cart />}/>
			<Route path="/products" element={<ProductList />}/>
			<Route path="/products/:productId" element={<Product />}/>
			<Route path="/register" element={<Register />}/>
			<Route path="/login" element={<Login />}/>
		</Routes>
	)
}

export default App;