import React, {useState, useEffect} from 'react'
import ProductItem from '../components/ProductItem';

function Products() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const response = await fetch ('https://codexplained.se/cars.php');
            const data = await response.json();
            setProducts(data);
            } catch (error) {
      } 
    }

    useEffect(() => { 
      fetchProducts();
     }, []);

  return (
    <div>
      <section>
        {
             products.map(product =>  
              <ProductItem key={product.id}product={product} />
             )
        }
       </section>
       </div>
  )
}

export default Products;
