import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import OfferImg from './components/OfferImg'
import Cards from './components/Cards'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import ProductSection from './components/ProductSection'


export default function App() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    try {
      const response = await fetch(import.meta.env.VITE_API_BASE_URL);
      const data = await response.json();
      setProducts(data)

    } catch (error) {
      console.log(error)
      setProducts([]);
    }
  }

  useEffect(
    () => {
      getProducts()
    },
    []
  )
  const chocolate = products.filter((prod) => prod.search_query == "chocolate");
  const milk = products.filter((prod) => prod.search_query == "milk");
  const hookah = products.filter((prod) => prod.search_query == "Hookah");
  const masala = products.filter((prod) => prod.search_query == "Masala");





  return (
    <>
     {/* header */}
    <Header />
    <div className='container mx-auto px-4'>
     
      {/* Offer    */}
      <OfferImg />
      {/* Cards */}
      <Cards />
      {/* ProductSection */}
      <ProductSection title={"Chocolate"} products={chocolate} />
      <ProductSection title={"Dairy, Bread & Eggs"} products={milk} />
      <ProductSection title={"Hookah"} products={hookah} />
      <ProductSection title={"Masala"} products={masala} />

      
      {/* footer */}
      <Footer />
    </div>
</>

   
  )
}
