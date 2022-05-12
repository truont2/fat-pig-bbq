import React from 'react'
import styles from '../styles/About.module.css'
import Picture from '../public/assets/store.jpg';
import Image from 'next/image';
export default function about() {
  return (
    <div className={styles.main}>
      <h2>About Us</h2>
      <div className={styles.content}>
      <Image
        src={Picture}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur minima voluptates cumque commodi veritatis accusantium harum itaque. Pariatur dolore perferendis, placeat fugiat optio, dolorem saepe suscipit exercitationem veniam necessitatibus quisquam.</p>
      </div>
    </div>
  )
}
