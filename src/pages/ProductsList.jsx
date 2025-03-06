import React, { useState } from 'react'
import { useOutletContext } from "react-router-dom";
import styles from '../components/styles/ProductList.module.css'
import Product from '../components/layout/Product'
import ProductCard from '../components/layout/Productcard'
import { filterProducts,filterProductsBySeachQuery} from '../utils/Filter';
import ProductDetails from '../data/ProductDetails'

const ProductsList = ({ searchQuery }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [selectedOption, setSelectedOption] = useState("Recommended")
    const filters = useOutletContext();
    const options = ["Recommended", "Price: Low to High", "Price: High to Low", "Name: A to Z", "Name: Z to A"]
    const filteredProducts = filterProductsBySeachQuery(filterProducts(ProductDetails, filters),searchQuery);
    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }
    const sortedProductsList = [...filteredProducts].sort((a, b) => {
        switch (selectedOption) {
            case "Price: Low to High":
                return a.price - b.price;
            case "Price: High to Low":
                return b.price - a.price;
            case "Name: A to Z":
                return a.name.localeCompare(b.name);
            case "Name: Z to A":
                return b.name.localeCompare(a.name);
            default:
                return 0;
        }
    })

    const handleProductClick = (index) => {
        setClickedIndex(index);
        setIsModalOpen(true);
    };
    return (
    <div className={styles.container}>
        <div className={styles['sort-container']}>
            <div className={styles['sort-box']} onClick={()=>setIsOpen(!isOpen)}>
                <span className={styles["sort-text"]}>Sort by:</span>
                <span className={styles['sort-selected']}>{selectedOption}</span>
                <i className={`fa-solid fa-chevron-${isOpen?"down":'up'}`}></i>
            </div>
            {isOpen && (
                <ul className={styles['sort-dropdown']}>
                    {options.map((option, index) => (
                        <li key={index} onClick={()=>handleSelect(option)}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
        <div className={styles['display-products']}>
            {sortedProductsList.map((product, index) => (<Product key={index} product={product} onClick={() => handleProductClick(index)}/>))}
        </div>
         {isModalOpen && clickedIndex !== null && (
                <div className={styles.modal}>
                    <ProductCard product={sortedProductsList[clickedIndex]} />
                    <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
            )}   
    </div>
  )
}

export default ProductsList

