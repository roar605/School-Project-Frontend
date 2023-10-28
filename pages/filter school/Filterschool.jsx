import { useState } from "react";
import React from 'react';
import Table from "./Table.jsx";
import {Users} from "./users.js";
import styles from "./filter.modules.css";
const Filterschool = () => {
    const[query,setQuery] = useState("");
    
    const search = (data) => {
        return data.filter(item=>
            item.Board.toLowerCase().includes(query) || 
            item.Location.toLowerCase().includes(query) || 
            item.Mode.toLowerCase().includes(query))
    };
    return(
        <div className="app">
            <input type="text" placeholder="Search.." className="search" onChange={(e)=>setQuery(e.target.value)}/>
            <Table className="table" data={search(Users)}/>
     </div>

    );
}

export default Filterschool;