import { configureStore } from '@reduxjs/toolkit';

import monoSlice from './slices/monoSlice';

const store = configureStore({
    reducer: {
        mono: monoSlice
    }
});

export default store;