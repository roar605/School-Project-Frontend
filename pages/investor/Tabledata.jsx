import React from "react";
import { data } from "./data";
import styles from './tabledata.modules.css';
function Tabledata() {
    return (
      <div className="app">
        <h1 className="thdr">Information Bulletin</h1>
        <table className="tab">
          <thead className="thd">
            <tr>
              <th>Investor</th>
              <th>Amount</th>
              <th>Cause</th>
              <th>Beneficiary count</th>
            </tr>
          </thead>
          <tbody className="tbd">
            {data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.Investor}</td>
                  <td>{value.Amount}</td>
                  <td>{value.Cause}</td>
                  <td>{value.Beneficiary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
export default Tabledata