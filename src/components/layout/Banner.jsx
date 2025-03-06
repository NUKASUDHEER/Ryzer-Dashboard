import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../styles/Home.module.css'

const Banner = () => {
  return (
    <div className={styles.carouselContainer}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className={styles.carouselImage} src="https://img.freepik.com/free-vector/electronics-store-facebook-cover-template_23-2151173109.jpg?ga=GA1.1.1103271710.1741231989&semt=ais_hybrid" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className={styles.carouselImage} src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5172.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className={styles.carouselImage} src="https://img.freepik.com/free-vector/hand-drawn-electronics-store-sale-banner-template_23-2151138129.jpg?ga=GA1.1.1103271710.1741231989&semt=ais_hybrid" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Banner
