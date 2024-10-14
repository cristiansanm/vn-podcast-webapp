import { configureStore } from '@reduxjs/toolkit';
import { RootState } from '../utils';
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export { setupStore, store };
