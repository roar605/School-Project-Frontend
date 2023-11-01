import React from "react";
import styles from "./table.module.css";
const Table = ({data}) => {
    return(
        <table className={styles.tab}>
            <tbody>
                <tr >
                    <th className={styles.hd}>Board</th>
                    <th className={styles.hd}>Location</th>
                    <th className={styles.hd}>Mode</th>
                </tr>
                {data.map((item) => (
                    <tr key = {item.id}>
                        <td>{item.Board}</td>
                        <td>{item.Location}</td>
                        <td>{item.Mode}</td>
                    </tr>
                ))}
            </tbody> 
        </table>
    );
}
export default Table;