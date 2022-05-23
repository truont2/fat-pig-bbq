import React, { useContext } from "react";
import styles from '../styles/Update.module.css';
// import { update, remove } from "../../redux/userSlice";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { updateUser2 } from "../../redux/userSlice";

export default function Update() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const handleClick = (e) => {
//     e.preventDefault();
//     // without API
//     // dispatch(update({ name, email }));
//     // with API
//     dispatch(updateUser2({ name, email }));
//   };

  return (
    <div className={styles.update}>
      <div className={styles.updateWrapper}>
        <h3 className={styles.updateTitle}>Update Your Account</h3>
        {/* <Warning /> */}
        <button className={styles.delete}>Delete Account</button>
        <div className={styles.updateContainer}>
          <form className={styles.form}>
            <div className={styles.formItem}>
              <label>Profile Picture</label>
              <div className={styles.profilePic}>
                <img
                  className={styles.avatar}
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className={styles.change}>Change</span>
              </div>
            </div>
            <div className={styles.formItem}>
              <label>Username</label>
              <input
                className={styles.formItem}
                type="text"
                placeholder="testing"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.formItem}>
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder="testing"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.formItem}>
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              // disabled={user.pending}
              className={styles.updateButton}
            //   onClick={handleClick}
            >
              Update
            </button>
            {/* {user.error && <span className="error">Something went wrong!</span>}
            {user.pending === false && (
              <span className="success">Account has been updated!</span>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
}