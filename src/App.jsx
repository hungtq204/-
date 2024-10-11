import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hompage from './pages/Hompage'
import LayoutAdmin from './layouts/LayoutAdmin'
import Dashboard from './layouts/Dashboard'
import ProductPage from './pages/ProductPage'
import ProductAdd from './components/ProductAdd'
import Productedit from './components/Productedit'

const App = () => {
  return (
    <>


      <Routes>
        <Route path='/' element={<Hompage></Hompage>}></Route>
        <Route path='/admin' element={<LayoutAdmin></LayoutAdmin>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='products' element={<ProductPage></ProductPage>}></Route>
          <Route path='products/add' element={<ProductAdd></ProductAdd>}></Route>
          <Route path='products/edit:/id' element={<Productedit></Productedit>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App