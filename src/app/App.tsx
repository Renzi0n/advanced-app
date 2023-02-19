import { Route, Routes } from "react-router-dom";
import { classNames } from "shared/helpers/classNames/classNames";
import './styles/index.scss';
import { useTheme } from "shared/config/theme";

export function App() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            Hello
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Routes>
                <Route path="/"  element={<div />} />
            </Routes>
        </div>
    );
}