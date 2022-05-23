import Leftbar from "../components/leftbar";
import Update from "../components/Update";
import styles from '../styles/Profile.module.css'

const profile = () => {
  return (
    <>
      <div className={styles.container}>
        <Leftbar />
        <Update />
      </div>
    </>
  );
};

export default profile;