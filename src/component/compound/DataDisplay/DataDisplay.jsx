// // import React from 'react'
// import styles from './DataDisplay.module.scss'

// const DataDisplay = ({ data, columns }) => {
//     return (
//       <div className={styles.dataDisplay}>
//         <div className={styles.header}>
//           {columns.map((column, index) => (
//             <div key={index} className={styles.cell}>
//               {column}
//             </div>
//           ))}
//         </div>
//         {data.map((row, rowIndex) => (
//           <div key={rowIndex} className={styles.row}>
//             {columns.map((column, colIndex) => (
//               <div key={colIndex} className={styles.cell}>
//                 {row[column.toLowerCase()]}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default DataDisplay;