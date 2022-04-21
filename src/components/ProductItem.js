import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function ProductItem({product}) {
  return (
    <motion.div
    initial={{ x: '-100vw' }}
    animate={{ x: 0}}
    transition={{duration:1.2}}
  >
  <section>
      <Link to={`/product/${product.id}`}><h1>{product.title}</h1> </ Link> <img src={product.url}></img> <h4>{product.price}:-</h4> <p>{product.description}</p>

     </section>
       </motion.div>
  
  )
}

export default ProductItem; 