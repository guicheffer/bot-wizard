import configureStore from 'redux-mock-store'

import { getUpdatedIntents } from '../intents.selectors';
import { RootState } from '../../store';
import initialStateMock from '../../__mocks__/store.mocks';

const mockStore = configureStore();
const mockedStore = mockStore(initialStateMock);
const mockedState = mockedStore.getState() as RootState;

describe('getUpdatedIntents', () => {
  it('it works as expected', () => {
    expect(getUpdatedIntents(mockedState).length).toBeGreaterThanOrEqual(1);
  });
});
