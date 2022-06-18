import Footer from '../Footer';
import Navbar from '../Navbar';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "../../styles/Layout.module.css";

export default function Layout({children}) {

  const {userInfo} = useSelector((state) => state.user);
  return (
    <div className={styles.body} >
      <div className={styles.content}>
      <Navbar user={userInfo}/>
      {children}
<<<<<<< HEAD
      </div>
=======
      <h1>{userInfo.email}</h1>
>>>>>>> dev
      <Footer />
      
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/homepage");
  return {
    props: {
      homepage: res.data
    }
  }
}