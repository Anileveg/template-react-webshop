import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { motion } from "framer-motion"

  function Product() {
      const [product, setProduct]  =useState({});
      const params = useParams();

      const fetchProduct = async() => {
        try {
          const response = await fetch ('https://codexplained.se/cars.php?id=' + params.id);
          const data = await response.json();
          setProduct (data);
        } catch (error) {
  }

}

  useEffect(() => { 
   fetchProduct()
   }, [])

  return (
    <div>
      <motion.h1
      initial={{ x: '-100vw' }}
      animate={{ x: 0}}
      transition={{duration:1.2}}
    >
        {product.title}</motion.h1>
        <img src={product.url}></img>
        <h4> Pris: {product.price}:-</h4>
        <h5>Lagersaldo: {product.storage} ST</h5>
        <p> Beskrivning: {product.description}</p>
      </div>
  )
}

export default Product;