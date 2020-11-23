import { createSelector } from 'reselect';

import { Key } from './intents.slices';
import { RootState } from '../store';

export const getUpdatedIntents = createSelector(
  (state: RootState) => state,
  (state) => state.intents.list,
);

export const getSelectedState = createSelector(
  (state: RootState) => state,
  (_: any, key: Key) => key,
  (state, key) => state.intents.selected.includes(key),
);

export const getSelectedStateInfo = createSelector(
  (state: RootState) => state,
  (state) => ({ max: state.intents.list.length, selected: state.intents.selected.length }),
);
