import { useState } from "react";
import React from 'react';
import Table from "./Table.jsx";
import {Users} from "./users";
import styles from "./filter.modules.css";
const Filter = () => {
    const[query,setQuery] = useState("");
    
    const search = (data) => {
        return data.filter(item=>
            item.Subject.toLowerCase().includes(query) || 
            item.Languages.toLowerCase().includes(query) || 
            item.Classes.toLowerCase().includes(query))
    };
    return(
        <div className="app">
            <input type="text" placeholder="Search.." className="search" onChange={(e)=>setQuery(e.target.value)}/>
            <Table className="table" data={search(Users)}/>
     </div>

    );
}

export default Filter;