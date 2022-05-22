import Footer from './Footer';
import Navbar from './Navbar';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";


export default function Layout({children}) {

  const {userInfo} = useSelector((state) => state.user);

  return (
    <>
      <Navbar user={userInfo}/>
      {children}
      <h1>{userInfo.name}</h1>
      <Footer />
    </>
  )
}