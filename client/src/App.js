import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styles from './App.css';
import Home from './pages/Home/Home.jsx';
import Layout from './components/Layout.jsx';
import Store from './pages/Store/Store.jsx';
import CompareProducts from './pages/CompareProducts/CompareProducts.jsx';
import Wishlist from './pages/Wishlist/Wishlist.jsx';
import Login from './pages/Login/Login.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="compare-products" element={<CompareProducts />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
