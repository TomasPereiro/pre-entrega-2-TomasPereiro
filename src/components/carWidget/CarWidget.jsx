import styles from './styles.module.css'
import React, { Component }  from 'react';
const CarWidget = () => {
    return(
        <div className={styles['carrito']}>
        
            <i class="bi bi-cart-fill carrito" >4</i>
            
           
        </div>
    )
}
export default CarWidget;