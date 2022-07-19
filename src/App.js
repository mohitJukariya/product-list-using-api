import './App.css'
import CompanyList from './components/CompanyList'
import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import GetDetails from './components/GetDetails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About'


function App() {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const url = `https://fakestoreapi.com/products`
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()
    setProducts(parsedData)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<CompanyList ProductData={products} loading={loading}/>} />
        <Route exact path ="/getDetails/:id" element={<GetDetails ProductData={products}/>} />
        <Route exact path ="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
