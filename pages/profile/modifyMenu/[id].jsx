import styles from "../../../styles/MenuItem.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { addProduct } from "../../redux/cartSlice";
import profileLayout from "../../../components/layout/profileLayout";

const Product = ({ pizza }) => {

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <input type="text" className={styles.title} />
        <span className={styles.price}>$price</span>
        <p className={styles.desc}>desc</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} >
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} >
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} >
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/menu/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};


Product.Layout = profileLayout;