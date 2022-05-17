import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MenuItem from '../components/MenuItem';

export default function menu({menuItems}) {
  // do server side rendering
  return (
    <div>
      {menuItems.map((item, index) => {
        return <MenuItem item={item} /> 
      })}
    </div>

  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/menu");
  return {
    props: {
      menuItems: res.data
    }
  }
}