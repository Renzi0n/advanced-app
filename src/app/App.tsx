import { Route, Routes } from "react-router-dom";
import { classNames } from "shared/helpers/classNames/classNames";
import { useTheme } from "shared/helpers/theme";
import { AppRouter } from "./providers/Router";
import { Navbar } from "widgets/Navbar";
import './styles/index.scss';

export function App() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE THEME</button>
        </div>
    );
}