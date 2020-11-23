import { call, put } from 'redux-saga/effects';

import { WatchedPollingActionType } from './polling-watcher';
import { fetchIntents } from '../services/fetch-intents';
import { setPollingComplete, setPollingFailed } from '../polling.slices';
import { updateIntentsList } from '../../intents/intents.slices';

// We could use kibana here, for instance, to track errors
// For now let's stick with these fake ones haha...
export const thisFunctionIsSuperDummyFakeLog = console.error;

export function* pollingWorker(_params: WatchedPollingActionType) {
  try {
    const intentsListResponse = yield call(() => fetchIntents());

    yield put(setPollingComplete());
    yield put(updateIntentsList(intentsListResponse));
  } catch (err) {
    thisFunctionIsSuperDummyFakeLog(err);

    yield put(setPollingFailed());
  }
}
