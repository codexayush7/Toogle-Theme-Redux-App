import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slice/theme/theme.jsx';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;