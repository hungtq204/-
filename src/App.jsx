import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LayoutAdmin from './layouts/Admin/LayoutAdmin'
import Dashboard from './Layouts/Admin/Dashboard'
import ProductPageList from './Pages/ProductPageList'
import ProductAdd from './components/ProductAdd'
import Productedit from './Components/ProductEdit';

const App = () => {
  return (
    <div>


      <Routes>

        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/admin' element={<LayoutAdmin></LayoutAdmin>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='products' element={<ProductPageList></ProductPageList>}></Route>
          <Route path='products/add' element={<ProductAdd></ProductAdd>}></Route>
          <Route path='products/edit/:id' element={<Productedit></Productedit>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App