import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ProductPage } from './pages/ProductPage';
import { Navigations } from './components/Navigations';

function App() {
  return (
    <>
      <Navigations />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App;
