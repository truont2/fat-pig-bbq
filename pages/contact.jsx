import styles from "../styles/Contact.module.css";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { style } from "@mui/system";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z6vzmuw",
        "template_i07v4v9",
        form.current,
        "uWh6Oxid8hahrWfGQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <container className={styles.contactForm}>
      <h1 className={styles.contactHeader} style={{fontFamily: "Bebas Neue", fontWeight: 100, fontSize:"45px"}}>Contact Information</h1>
      <div className={styles.contactInfo}>
        <div className={styles.contactEmail} style={{fontFamily: "Bebas Neue", fontWeight:100, fontSize:"20px"}}>
          <EmailIcon/>
          <p>fatpigbbq@gmail.com</p>
        </div>
        <div className={styles.contactPhone} style={{fontFamily: "Bebas Neue", fontWeight:100, fontSize:"20px"}}>
          <LocalPhoneIcon/>
          <p>(425) 361-7640</p>
        </div>
      </div>
      <div className={styles.contactForm}>
        <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
          <input 
            type="name" 
            name="name" 
            placeholder="Your Name"
            required
          />
          <input 
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
              name="message"
              rows="8"
              placeholder="Your Message"
              cols="50"
              required
            ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </container>
  );
}
