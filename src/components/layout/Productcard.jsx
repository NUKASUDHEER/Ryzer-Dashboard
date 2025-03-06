import React from 'react';
import styles from "../styles/Productcard.module.css";
const ProductCard = ({ product }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainerCard}> 
        <img src={product.src} alt="Product" className={styles.productImage} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        {/* <p className={styles.specialPrice}>Special Price</p> */}
        <div className={styles.priceSection}>
          <span className={styles.discountedPrice}>{product.price}</span>
          <span className={styles.originalPrice}>{product.OriginalPrice}</span>
          <span className={styles.discount}>{product.Offer} off</span>
        </div>
        <p className={styles.offerText}>{product.stock} products available</p>
        <div className={styles.ratingSection}>
          <span className={styles.rating}>&#9733; 66 ratings & 8 reviews</span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.addToCart}>ADD TO CART</button>
          <button className={styles.buyNow}onClick={() => alert("✅ Successfully purchased!")}>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;