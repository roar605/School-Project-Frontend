import React from "react";
import styles from "./table.module.css";
const Table = ({data}) => {
    return(
        <table className={styles.tab}>
            <tbody>
                <tr >
                    <th className={styles.hd}>Subject</th>
                    <th className={styles.hd}>Languages</th>
                    <th className={styles.hd}>Classes</th>
                </tr>
                {data.map((item) => (
                    <tr key = {item.id}>
                        <td>{item.Subject}</td>
                        <td>{item.Languages}</td>
                        <td>{item.Classes}</td>
                    </tr>
                ))}
            </tbody> 
        </table>
    );
}
export default Table;