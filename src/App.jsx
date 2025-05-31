import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "./redux/slice/theme/theme.jsx"
import "../App.css";

function App() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();

    return (
        <div className={darkMode ? 'app dark' : 'app light'}>
            <div className="container">
                <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
                <button onClick={() => dispatch(toggleTheme())} className="toggle-btn">
                    {darkMode ? 'Switch to Light' : 'Switch to Dark'}
                </button>
            </div>
        </div>
    );
}

export default App;
