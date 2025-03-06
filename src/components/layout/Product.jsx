import React, { useState } from 'react';
import styles from "../styles/Productcard.module.css";

const Product = ({ product,onClick }) => {
  return (
    <div className={styles.ProductListCardContainer} onClick={onClick}>
        <div className={styles.imageContainer}> 
          <img src={product.src} alt="Product" className={styles.productImage} />
        </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.name}</h3>
        <div className={styles.priceSection}>
          <span className={styles.discountedPrice}>₹{product.price}</span>
        </div>
        <p className={styles.offerText}>{product.stock} products available</p>
        <div className={styles.buttonAvailableSoldout}>
          {+(product.stock) > 0 ? (
              <button className={styles.available}> Add to cart</button>
          ) : (
            <>
              <button className={styles.soldout}>sold out</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;