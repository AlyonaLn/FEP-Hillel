import React from "react";
import {Routes, Route } from 'react-router-dom';
import TodoList from "./pages/TodoList";
import TodoDetail from "./pages/TodoDetail";

export default function TodoRoutes() {
    return (
        <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="1" element={<TodoDetail />} />
        </Routes>
    )
} 