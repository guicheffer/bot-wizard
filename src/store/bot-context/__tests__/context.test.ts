import configureStore from 'redux-mock-store'

import { getActiveBotContext } from '../bot-context.selectors';
import { RootState } from '../../store';
import initialStateMock from '../../__mocks__/store.mocks';

const mockStore = configureStore();

const mockedStore = mockStore(initialStateMock);
const mockedState = mockedStore.getState() as RootState;

describe('getBotContext', () => {
  it('it gets the correct active name from active/current bot context', () => {
    // Since it's Berlin related (only for now)
    expect(getActiveBotContext(mockedState).name).toEqual('Ultimate UI');
  });
});
