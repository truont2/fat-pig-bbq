import Leftbar from "../leftbar";
// import Update from "../../components/Update";
import styles from '../../styles/Profile.module.css'

const profileLayout = ({children}) => {
  return (
    <>
      <div className={styles.container}>
        <Leftbar />
        <div className={styles.homeContainer}>
          {children}
        </div>
      </div>
    </>
  );
};

export default profileLayout;