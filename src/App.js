import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styles from './App.css';
import Home from './pages/Home/Home.jsx';
import Layout from './components/Layout.jsx';
import Store from './pages/Store/Store.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
