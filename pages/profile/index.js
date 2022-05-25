import Leftbar from "../../components/leftbar";
import Update from "../../components/Update";
import profileLayout from "../../components/layout/profileLayout";
import styles from '../../styles/Profile.module.css'
import ProfileLayout from '../../components/layout/profileLayout'
import {useRouter} from 'next/router';

const ProfilePage = () => {
  const currentUser = false;
  const router = useRouter();

  return (
    <>
              {/* <div className={styles.container}>
        <Leftbar />
        <div className={styles.homeContainer}>
          testing
        </div><h1>
      </div> */}
      <h1>Dashboard</h1>
    </>
  );
};
ProfilePage.Layout = ProfileLayout;

// ProfilePage.getLayout = function getLayout(page) {
//   return (
//       <ProfileLayout>{page}</ProfileLayout>
//   )
// }

export default ProfilePage;