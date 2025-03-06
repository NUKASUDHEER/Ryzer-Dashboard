import React from 'react'
import styles from './Navbar.module.css'

const Navbar = ({setSearchQuery}) => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src="https://ryzer.com/images/logo.png" alt="Ryzer Logo" />
                </div>
                <div className={styles.nav}>
                    <a></a>
                    <a href="/">Home</a>
                    <a href="/dashboard">Dashboard</a>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.search}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search" onChange={(e)=>setSearchQuery(e.target.value)}/>
                </div>
                <div className={styles.icons}>
                        <span className="material-symbols-outlined">notifications
                            <label>Notification</label>
                        </span>
                    
                        <span className="material-symbols-outlined">shopping_cart
                            <label>Cart</label>
                        </span>

                        <span className="material-symbols-outlined">person
                            <label>Profile</label>
                        </span>
                </div>
            </div>
        </div>
  )
}

export default Navbar

