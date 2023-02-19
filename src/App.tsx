import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { classNames } from "./helpers/classNames/classNames";
import './styles/index.scss';
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export function App() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            Hello
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Routes>
                <Route path="/"  element={<Counter />} />
            </Routes>
        </div>
    );
}