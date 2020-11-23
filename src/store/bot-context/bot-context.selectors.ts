import { createSelector } from 'reselect';

import { RootState } from '../store';

export const getActiveBotContext = createSelector(
  (state: RootState) => state,
  (state) => state.botContext.active,
);
