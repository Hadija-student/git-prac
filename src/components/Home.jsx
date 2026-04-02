import React from "react";
import styles from "../styles/Home.module.css";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaBurger } from "react-icons/fa6";
import { FcBusinessman } from "react-icons/fc";

import Order from "../assets/Icons.png";
import Pay from "../assets/Icons (1).png";
import Enjoy from "../assets/Icons (2).png";
import Location from "../assets/Icons (3).png";

import { FaMotorcycle } from "react-icons/fa6";

const Home = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.header}>
          <h1>
            <FaBurger />
            <b className={styles.title1}>food</b>
            <b className={styles.title2}>wagon</b>
          </h1>

          <p>
            <BsFillGeoAltFill />
            <b>Deliver to</b>:Current Location
            <b>Mohammadpur Bus Stand,Dhaka </b>
          </p>
          <p>
            <FaSearch />
            Search food
          </p>

          <button>
            <FcBusinessman />
            login
          </button>
        </div>
      </header>
      <main>
        <div>
          <h1>Are you starving?</h1>
          <p>Within a few clicks,find meals that are accessible near you</p>
          <div>
            <button>
              
              <FaMotorcycle />
              Delivery
            </button>
            <button>Pickup</button>
            <input type="text" placeholder="enter Your Address" />
            <button>Find Food</button>
          </div>
        </div>
      </main>
      <section>
        <h2>How does it work</h2>
        <div className={styles.section1}>
          <div className={styles.card1}>
            <img src={Location} alt="" />

            <h3>Select location</h3>
            <p className={styles.p}>
              Choose your location where your food will be delivered
            </p>
          </div>
          <div className={styles.card2}>
            <img src={Order} alt="" />
            <h3>Choose order</h3>
            <p className={styles.p}>
              Check over hundreds of menus to pick your favorite food
            </p>
          </div>
          <div className={styles.card3}>
            <img src={Pay} alt="" />
            <h3>Pay advanced</h3>
            <p className={styles.p}>
              It's quick,safe and simple.Select several methods of payment.
            </p>
          </div>
          <div className={styles.card4}>
            <img src={Enjoy} alt="" />
            <h3>Enjoy meals</h3>
            <p className={styles.p}>Food is made and delivered to your home</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
