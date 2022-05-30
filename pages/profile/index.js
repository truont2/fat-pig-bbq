import styles from "../../styles/Profile.module.css";
import ProfileLayout from "../../components/layout/profileLayout";
import React from "react";
import profileLayout from "../../components/layout/profileLayout";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const ProfilePage = ({ homepage }) => {
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [orderOption, setOrderOption] = useState(
    {
      name: "", 
      desc:""
    }
  )
  const [deliveryServices, setDeliveryServices] = useState([]);
  
  const [data, setData] = useState({});

  const [per, setPerc] = useState(null);
  const [alert, setAlert] = useState({text: "", status:null});
  console.log(homepage, "homepage info");

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file1.name;

      const storageRef = ref(storage, file1.name);
      const uploadTask = uploadBytesResumable(storageRef, file1);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, imgJumbo: downloadURL }));
          });
        }
      );
    };
    file1 && uploadFile();
  }, [file1]);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file2.name;

      const storageRef = ref(storage, file2.name);
      const uploadTask = uploadBytesResumable(storageRef, file2);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, imgMenu: downloadURL }));
          });
        }
      );
    };
    file2 && uploadFile();
  }, [file2]);


  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      // creates a new collection named cities with document id LA
      setData({ ...data, alert: alert });
      const res = await setDoc(doc(db, "Menu", data.Name), {
        ...data,
        timeStamp: serverTimestamp(),
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleOrderOption = (e) => {
    setDeliveryServices([...deliveryServices, orderOption])
  }

  return (
    <div className={styles.newContainer}>
      <div className={styles.top}>
        <h1 className={styles.h1}>Homepage</h1>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.h1}>Edit Homepage</h1>
        {/* <div className={styles.left}>
          <img
            className={styles.img}
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
          alt="image placer"  
          />
        </div> */}
        <div className={styles.right}>
          <form onSubmit={handleAdd} className={styles.form}>
            <div className={styles.formInput}>
              <label htmlFor="Jumbofile" className={styles.label}>
                Jumbo Image: <DriveFolderUploadOutlinedIcon className={styles.icon} />
              </label>
              <input
                type="file"
                id="Jumbofile"
                onChange={(e) => setFile1(e.target.files[0])}
                style={{ display: "none" }}
                className={styles.input}
              />
              <img
                className={styles.img}
                src={
                  file1
                    ? URL.createObjectURL(file1)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="image placer"
              />
            </div>

            <div className={styles.formInput}>
              <label htmlFor="Menufile" className={styles.label}>
                Menu Image: <DriveFolderUploadOutlinedIcon className={styles.icon} />
              </label>
              <input
                type="file"
                id="Menufile"
                onChange={(e) => setFile2(e.target.files[0])}
                style={{ display: "none" }}
                className={styles.input}
              />
              <img
                className={styles.img}
                src={
                  file2
                    ? URL.createObjectURL(file2)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="image placer"
              />
            </div>

            <div className={styles.formInput} key="1">
              <label className={styles.label}>Title</label>
              <input
                id="JumboHeader"
                type="text"
                placeholder="Jumbo Title"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="2">
              <label className={styles.label}>Desc</label>
              <input
                id="JumboDescription"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="3">
              <label className={styles.label}>Font</label>
              <input
                id="PageFont"
                type="text"
                placeholder="Font"
                className={styles.input}
                onChange={handleInput}
              />
            </div>

            <div className={styles.formInput} key="7">
              <label className={styles.label}>Menu Card Desc</label>
              <input
                id="MenuCardHeader"
                type="text"
                placeholder="Menu Card Header"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="8">
              <label className={styles.label}>Menu Card Desc</label>
              <input
                id="MenuCardDesc"
                type="text"
                placeholder="Menu Card Description"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="9">
              <label className={styles.label}>Order Method 1</label>
              <input
                id="name"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={(e) => {
                  setOrderOption({...alert, text: e.target.value})
                }}
              />
              <input
                id="Order1"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="10">
            <label className={styles.label}>Order Method 2</label>
            <input
                id="name"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
              <input
                id="Order2"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="11">
            <label className={styles.label}>Order Method 3</label>
            <input
                id="name"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
              <input
                id="Order3"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="12">
            <label className={styles.label}>Order Method 4</label>
            <input
                id="name"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
              <input
                id="Order4"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="13">
              <input
                className={styles.checkbox}
                type="checkbox"
                id="Alert"
                onChange={(e) => {
                  setAlert({...alert, status: e.target.checked})
                }}
              />
              <label htmlFor="spicy">Set Alert</label>
            </div>
            <div className={styles.formInput} key="=14">
              <label className={styles.label}>Alert Text</label>
              <input
                id="AlertDesc"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={(e) => {
                  setAlert({...alert, text: e.target.value})
                }}
              />
            </div>
            {/* if you want to put in an array of values then I think you need to save to a state thats a array the save thtat the database */}
            <div className={styles.formInput} key="15">
              <label className={styles.label}>Sunday</label>
              <input
                id="SundayTime"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="16">
              <label className={styles.label}>Week Day hours</label>
              <input
                id="MenuCardDesc"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            <div className={styles.formInput} key="17">
              <label className={styles.label}>Saturday</label>
              <input
                id="MenuCardDesc"
                type="text"
                placeholder="Description"
                className={styles.input}
                onChange={handleInput}
              />
            </div>
            {/* depending on the number of order options, you can change the description for each of them so an input form will show for each on and modify the text in that certain card position? */}

            <button
              className={styles.button}
              disabled={per !== null && per < 100}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      {console.log(data, 'form data')};
    </div>
  );
};
ProfilePage.Layout = ProfileLayout;

export const getServerSideProps = async () => {
  // currently using mongo ATlas but switching to firebase -> more secure
  const res = await axios.get("http://localhost:3000/api/homepage");
  return {
    props: {
      homepage: res.data,
    },
  };
};

export default ProfilePage;

// import styles from "../../styles/Profile.module.css";
// import ProfileLayout from "../../components/layout/profileLayout";
// import React from "react";
// import profileLayout from "../../components/layout/profileLayout";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   addDoc,
//   collection,
//   doc,
//   serverTimestamp,
//   setDoc,
// } from "firebase/firestore";
// import { auth, db, storage } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// const ProfilePage = ({ homepage }) => {
//   const [file1, setFile1] = useState("");
//   const [file2, setFile2] = useState("");

//   const [data, setData] = useState({});
//   const [per, setPerc] = useState(null);
//   console.log(homepage, "homepage info");


//     const uploadFile = (file) => {
//       const name = new Date().getTime() + file.name;

//       const storageRef = ref(storage, file.name);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//           console.log("Upload is " + progress + "% done");
//           setPerc(progress);
//           switch (snapshot.state) {
//             case "paused":
//               console.log("Upload is paused");
//               break;
//             case "running":
//               console.log("Upload is running");
//               break;
//             default:
//               break;
//           }
//         },
//         (error) => {
//           console.log(error);
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             setData((prev) => ({ ...prev, img: downloadURL }));
//           });
//         }
//       );
//     };


//   const handleAdd = async (e) => {
//     e.preventDefault();
//     try {
//       // creates a new collection named cities with document id LA
//       const res = await setDoc(doc(db, "Menu", data.Name), {
//         ...data,
//         timeStamp: serverTimestamp(),
//       });

//       console.log(res.id);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleInput = (e) => {
//     const id = e.target.id;
//     const value = e.target.value;
//     setData({ ...data, [id]: value });
//   };

//   return (
//     <div className={styles.newContainer}>
//       <div className={styles.top}>
//         <h1 className={styles.h1}>Homepage</h1>
//       </div>
//       <div className={styles.bottom}>
//         <h1 className={styles.h1}>Edit Homepage</h1>
//         {/* <div className={styles.left}>
//           <img
//             className={styles.img}
//             src={
//               file
//                 ? URL.createObjectURL(file)
//                 : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//             }
//           alt="image placer"  
//           />
//         </div> */}
//         <div className={styles.right}>
//           <form onSubmit={handleAdd} className={styles.form}>
//             <div className={styles.formInput}>
//               <label htmlFor="Jumbofile" className={styles.label}>
//                 Jumbo Image: <DriveFolderUploadOutlinedIcon className={styles.icon} />
//               </label>
//               <input
//                 type="file"
//                 id="Jumbofile"
//                 onChange={(e) => setFile1(e.target.files[0]) && uploadFile(e.target.files[0])}
//                 style={{ display: "none" }}
//                 className={styles.input}
//               />
//               <img
//                 className={styles.img}
//                 src={
//                   file1
//                     ? URL.createObjectURL(file1)
//                     : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//                 }
//                 alt="image placer"
//               />
//             </div>

//             <div className={styles.formInput}>
//               <label htmlFor="Menufile" className={styles.label}>
//                 Menu Image: <DriveFolderUploadOutlinedIcon className={styles.icon} />
//               </label>
//               <input
//                 type="file"
//                 id="Menufile"
//                 onChange={(e) => setFile2(e.target.files[0]) && uploadFile(e.target.files[0])}
//                 style={{ display: "none" }}
//                 className={styles.input}
//               />
//               <img
//                 className={styles.img}
//                 src={
//                   file2
//                     ? URL.createObjectURL(file2)
//                     : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
//                 }
//                 alt="image placer"
//               />
//             </div>

//             <div className={styles.formInput} key="1">
//               <label className={styles.label}>Title</label>
//               <input
//                 id="Name"
//                 type="text"
//                 placeholder="Name"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="2">
//               <label className={styles.label}>Desc</label>
//               <input
//                 id="Description"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="3">
//               <label className={styles.label}>Font</label>
//               <input
//                 id="Font"
//                 type="text"
//                 placeholder="Font"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>

//             <div className={styles.formInput} key="7">
//               <label className={styles.label}>Menu Card Desc</label>
//               <input
//                 id="MenuCardDesc"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="8">
//               <label className={styles.label}>Menu Card Desc</label>
//               <input
//                 id="MenuCardDesc"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="9">
//               <label className={styles.label}>Menu Card Desc</label>
//               <input
//                 id="MenuCardDesc"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="10">
//               <label className={styles.label}>Menu Card Desc</label>
//               <input
//                 id="MenuCardDesc"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="=11">
//               <label className={styles.label}>Menu Card Desc</label>
//               <input
//                 id="MenuCardDesc"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="12">
//               <input
//                 className={styles.checkbox}
//                 type="checkbox"
//                 id="spicy"
//                 name="spicy"
//               />
//               <label htmlFor="spicy">Set Alert</label>
//             </div>
//             <div className={styles.formInput} key="=11">
//               <label className={styles.label}>Alert Text</label>
//               <input
//                 id="MenuCardDesc"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="=11">
//               <label className={styles.label}>Sunday</label>
//               <input
//                 id="MenuCardDesc"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="=11">
//               <label className={styles.label}>Week Day hours</label>
//               <input
//                 id="MenuCardDesc"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             <div className={styles.formInput} key="=11">
//               <label className={styles.label}>Saturday</label>
//               <input
//                 id="MenuCardDesc"
//                 type="text"
//                 placeholder="Description"
//                 className={styles.input}
//                 onChange={handleInput}
//               />
//             </div>
//             {/* depending on the number of order options, you can change the description for each of them so an input form will show for each on and modify the text in that certain card position? */}

//             <button
//               className={styles.button}
//               disabled={per !== null && per < 100}
//               type="submit"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//       {/* <div className={styles.listContainer}>
//           <div className={styles.listTitle}><h1 className={styles.h1}>Current Items</h1></div>
//           <Table menuItems={menuItems}/>
//       </div> */}
//     </div>
//   );
// };
// ProfilePage.Layout = ProfileLayout;

// export const getServerSideProps = async () => {
//   // currently using mongo ATlas but switching to firebase -> more secure
//   const res = await axios.get("http://localhost:3000/api/homepage");
//   return {
//     props: {
//       homepage: res.data,
//     },
//   };
// };

// export default ProfilePage;
