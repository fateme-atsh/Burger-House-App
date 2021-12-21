import React from 'react';
import MiddleMenue from './MiddleMenue/MiddleMenue';
import OrderDescription from './OrderDescription/order-description';
import OrderMenu from './OrderMenu/order-menu';

const MenuLayout = () => {
    return (
      <>
        
        <MiddleMenue/>
        <OrderDescription/>
        <OrderMenu/>
        
      </>
    )
  }
  
  export default MenuLayout;
  