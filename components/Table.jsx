import styles from "../styles/Table.module.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function List({menuItems}) {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Item ID</TableCell>
            <TableCell className="tableCell">Image</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Creation Date</TableCell>
            <TableCell className="tableCell">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuItems.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{row._id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className={styles.image} />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.title}</TableCell>
              <TableCell className="tableCell">{row.desc}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.createdAt}</TableCell>
              <TableCell className="tableCell">
              <Button
                size="small"
                onClick={() =>
                  (window.location.href = `/profile/modifyMenu/${row._id}`)
                }
                className={styles.button}
              >
                Edit
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
