import React, {useState} from 'react'
import {Outlet} from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
const Sidebar = () => {
    const [filters, setFilters] = useState({
        status: {
            available: false,
            soldOut:false,
        },
        query: '',
        minPrice: 0,
        maxPrice:200000,
    })
  return (
    <div className={styles.container}>
        <div className={styles.sidebar}>
            <h2 className={styles.title}>FILTERS</h2>
            <div className={styles.section}>
                <h3>Status</h3>
                <label>
                    <input
                        type="checkbox"
                        checked={filters.status.available}
                        onChange={(e) => setFilters((prev) => ({
                            ...prev,
                            status: {
                            ...prev.status,
                            available:e.target.checked  
                            }
                        }))}
                    /> Available
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={filters.status.soldOut}
                        onChange={(e) => setFilters((prev) => ({
                            ...prev,
                            status: {
                                ...prev.status,
                                soldOut:e.target.checked
                            }
                        }))}
                    /> Sold Out
                </label>
            </div>
            <div className={styles.section}>
                <h3>Name</h3>
                <input
                    type="text"
                    placeholder="Search"
                    className={styles.searchBox}
                    value={filters.query}
                    onChange={(e) => setFilters((prev) => ({
                        ...prev,
                        query:e.target.value
                    }))}
                />
            </div>
            <div className={styles.section}>
                <h3>Price</h3>
                <div className={styles.rangeSlider}>
                    <input
                        type="range"
                        min="0"
                        max="200000"
                        value={filters.minPrice}
                        onChange={(e) => setFilters((prev) => ({
                            ...prev,
                            minPrice:e.target.value
                        }))}
                        className={styles.slider}
                    />
                    <input
                        type="range"
                        min="100000"
                        max="200000"
                        value={filters.maxPrice}
                        onChange={(e) => setFilters((prev) => ({
                            ...prev,
                            maxPrice:e.target.value
                        }))}
                        className={styles.slider}
                    />
                </div>

                <div className={styles.priceSelect}>
                      <select className={styles.dropdown} value={filters.minPrice} onChange={(e) => setFilters((prev) => ({
                          ...prev,
                          minPrice:e.target.value
                      }))}>
                        <option value="0">0</option>
                        <option value="20000">₹20000</option>
                        <option value="30000">₹30000</option>
                        <option value="40000">₹40000</option>
                    </select>
                    <span className={styles.toText}>to</span>
                      <select className={styles.dropdown} value={filters.maxPrice} onChange={(e) => setFilters((prev) => ({
                          ...prev,
                          maxPrice:e.target.value
                      }))}>
                        <option value="80000+">₹80000+</option>
                        <option value="70000">₹70000</option>
                        <option value="60000">₹60000</option>
                        <option value="50000">₹50000</option>
                    </select>
                </div>
            </div>
            <div className={styles.sectionEmpty}>
            </div>
        </div>
        <div className={styles.content}>
            <Outlet context={filters}/>
        </div>
    </div>
  )
}

export default Sidebar