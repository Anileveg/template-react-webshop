import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Header() {
 return (
   <div className='header'>
   <ProductsLink to='/products'>Produkter</ProductsLink>
    </div>
  );
}

const ProductsLink = styled (Link)`
  font-size: 1.3em;
  font-weight: 350;
  &:hover {
  background-color: lightgrey;
  color: white;
  
}
`

export default Header;