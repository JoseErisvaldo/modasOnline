import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Page/Home'
import Header from '../Components/Header'
function RouterApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp
