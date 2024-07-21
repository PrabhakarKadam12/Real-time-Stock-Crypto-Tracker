// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchData } from '../redux/actions';
// import { AppState } from '../redux/types';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   CircularProgress,
//   Paper,
//   makeStyles,
//   Typography,
// } from '@material-ui/core';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   tableContainer: {
//     marginTop: 20,
//     marginBottom: 20,
//     overflowX: 'auto',
//   },
//   tableHeader: {
//     backgroundColor: '#f5f5f5',
//   },
//   tableCell: {
//     fontWeight: 'bold',
//   },
//   tableName: {
//     textAlign:'center',
//   },
// });

// const DataTable: React.FC = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const { data, loading, selectedSymbol } = useSelector((state: AppState) => state);

//   useEffect(() => {
//     dispatch(fetchData(selectedSymbol));
//     const interval = setInterval(() => {
//       dispatch(fetchData(selectedSymbol));
//     }, 10000); // Fetch data every 10 seconds

//     return () => clearInterval(interval);
//   }, [dispatch, selectedSymbol]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return (
//     <Paper className={classes.tableContainer}>
//       <Typography variant="h6" className={classes.tableName}  gutterBottom>
//         {selectedSymbol.charAt(0).toUpperCase() + selectedSymbol.slice(1)} Price Data
//       </Typography>
//       <Table className={classes.table}>
//         <TableHead className={classes.tableHeader}>
//           <TableRow>
//             <TableCell className={classes.tableCell}>Symbol</TableCell>
//             <TableCell className={classes.tableCell}>Price (USD)</TableCell>
//             <TableCell className={classes.tableCell}>Timestamp</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((entry) => (
//             <TableRow key={entry.timestamp}>
//               <TableCell>{entry.symbol}</TableCell>
//               <TableCell>{entry.price}</TableCell>
//               <TableCell>{new Date(entry.timestamp).toLocaleString()}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// };

// export default DataTable;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions";
import { AppState } from "../redux/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  tableContainer: {
    height: "calc(85vh - 150px)", // Adjust based on other elements height
    overflowY: "auto",
    marginTop: 20,
    marginBottom: 20,
  },
  table: {
    minWidth: 550,
  },
  tableHeader: {
    backgroundColor: "#f5f5f5",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  tableCell: {
    fontWeight: "bold",
  },
  stickyHeader: {
    textAlign: "center",
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: 2,
    padding: "16px 0",
  },
});

const DataTable: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, loading, selectedSymbol } = useSelector(
    (state: AppState) => state
  );

  useEffect(() => {
    dispatch(fetchData(selectedSymbol));
    const interval = setInterval(() => {
      dispatch(fetchData(selectedSymbol));
    }, 10000); // Fetch data every 10 seconds

    return () => clearInterval(interval);
  }, [dispatch, selectedSymbol]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Typography className={classes.stickyHeader} variant="h6" gutterBottom>
        {selectedSymbol.charAt(0).toUpperCase() + selectedSymbol.slice(1)} Price
        Data
      </Typography>
      <Paper className={classes.tableContainer}>
        <Table className={classes.table}>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell className={classes.tableCell}>Symbol</TableCell>
              <TableCell className={classes.tableCell}>Price (USD)</TableCell>
              <TableCell className={classes.tableCell}>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((entry) => (
              <TableRow key={entry.timestamp}>
                <TableCell>{entry.symbol}</TableCell>
                <TableCell>{entry.price}</TableCell>
                <TableCell>
                  {new Date(entry.timestamp).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default DataTable;
