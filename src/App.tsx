import { Routes, Route } from 'react-router-dom';
import  AboutPage  from './pages/AboutPage/AboutPage';
import  ProductPage  from './pages/ProductPage/ProductPage';
import { Navigations } from './components/Navigations/Navigations';
import 'tailwindcss/tailwind.css'


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
