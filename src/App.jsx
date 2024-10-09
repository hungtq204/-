
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutAdmin from './Layouts/LayoutAdmin'
import Dashboard from './pages/Dashboard'
import ProductPage from './pages/ProductPage';
import ProductAdd from './components/ProductAdd';
import Productedit from './components/Productedit';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} ></Route>
        <Route path="/admin" element={<LayoutAdmin></LayoutAdmin>} >
          <Route index element={<Dashboard />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='products/add' element={<ProductAdd />} />
          <Route path='products/:id/edit' element={<Productedit />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
