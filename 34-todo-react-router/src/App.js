import React from 'react';
import {BrowserRouter, Route, Routes, NavLink } 
from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import TodoRoutes from "./pages/Todo/TodoRoutes";

import style from  './App.css';

const activeClassName = ({isActive}) => isActive ? style.active : undefined

export default function App() {
    return (
        <BrowserRouter>
            <nav style={{ borderBottom:"solid 1px", paddingBottom: "1rem"}}>
                <NavLink to="/"      className={activeClassName}>Home</NavLink> |{" "}
                <NavLink to="/about" className={activeClassName}>About</NavLink> |{" "}
                <NavLink to="/todo"  className={activeClassName}>Todo</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="todo/*" element={<TodoRoutes />} />
        </Routes>
        </BrowserRouter>
    )
} 
