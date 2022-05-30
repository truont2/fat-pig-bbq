import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/DataTable.module.css";
import { collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Datatable = ({menuItems}) => {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
      console.log("deleting")
      try {
        await deleteDoc(doc(db, "Menu", id));
        setData(data.filter((item) => item.id !== id));
      }catch(err) {
          console.log(err);
      }
    
  };

  useEffect(() => {
      //not allowed to do async on useffect itself so must create a function within
    // const fetchData = async () => {
    //     let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "Menu"));
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       list.push({id: doc.id, ...doc.data()});
    //     });
    //     setData(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    //    fetchData();
      //listen for realtime database
    //   updates everything once any change occurs on the database
      // const unsub = onSnapshot(
      //   collection(db, "Menu"),
      //   (snapShot) => {
      //     let list = [];
      //     snapShot.docs.forEach((doc) => {
      //       list.push({ id: doc.id, ...doc.data() });
      //     });
      //     setData(list);
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );

      // return () => {
      //     unsub();
      // }
      setData(menuItems);
  }, []);
  //if you want to createa document with a sepcific id or update use setDoc


  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className={styles.cellWithImg}>
            <img className={styles.cellImg} src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={styles.cellAction}>
            <Link href="/users/test" style={{ textDecoration: "none" }}>
              <div className={styles.viewButton}>View</div>
            </Link>
            <div
              className={styles.deleteButton}
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className={styles.datatable}>
      <DataGrid
        className={styles.datagrid}
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
