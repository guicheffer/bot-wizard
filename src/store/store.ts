import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';

import botContextSlice from './bot-context/bot-context.slices';
import intentsSlice from './intents/intents.slices';

import pollingSlices from './polling/polling.slices';

import { sagaMiddleware, pollingWatcher } from './polling/middlewares/polling-sagas';

export const store = configureStore({
  reducer: {
    botContext: botContextSlice,
    intents: intentsSlice,

    // This will be essentially for handling UI errors around the app (or when interactive loading is happening)
    polling: pollingSlices,
  },
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});

// @ts-ignore as it does not take saga types
// (I preferred to skip it for now to be a bit faster and agile)
sagaMiddleware.run(pollingWatcher);

// RootState giving its return type (in order to be accessed across the application)
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
