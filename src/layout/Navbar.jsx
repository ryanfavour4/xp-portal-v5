import React from 'react';
import style from "../styles/Navbar.module.css";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className={style.container}>
        <h4>Welcome Ryan Favour</h4>
        <div className='d-flex'>
            <input type='text' placeholder='Search...'/>
            <button type='submit'><FaSearch/></button>
        </div>
    </div>
  )
}

export default Navbar