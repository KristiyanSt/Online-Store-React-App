import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styles from './App.css';
import Home from './pages/Home/Home.jsx';
import Layout from './components/Layout.jsx';
import Store from './pages/Store/Store.jsx';
import CompareProducts from './pages/CompareProducts/CompareProducts.jsx';
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx';
import Product from './pages/Product/Product.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="compare-products" element={<CompareProducts />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
