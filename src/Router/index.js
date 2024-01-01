import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Page/Home'
import Header from '../Components/Header'
import Category from '../Components/Category'
import ListCategory from '../Page/ListCategory'
import DetalhesProducts from '../Page/DetalhesProducts'
import Favorite from '../Page/Favorite'
import MyEspaco from '../Page/MyEspaco'
import MyOrders from '../Page/MyOrders'
function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Category />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<ListCategory />} />
        <Route path="/detalhesproducts/:id" element={<DetalhesProducts />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/meuespaco" element={<MyEspaco />} />
        <Route path="/meuespaco/meuspedidos" element={<MyOrders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
