import React from "react";
import Banner from "../components/layout/Banner";
import Product from "../components/layout/Product.jsx";
import productsList from '../data/ProductDetails.js'
import Footer from "../components/layout/Footer.jsx";
import styles from '../components/styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.bannerImg}>
        <img src="https://img.freepik.com/free-photo/education-modern-lifestyle-college-concept-attractive-carefree-redhead-female-student-sitting-wi_1258-144469.jpg" />
        <div className={styles.products}>
          {productsList.slice(0, 3).map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

