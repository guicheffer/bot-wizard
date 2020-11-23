import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Key = string;

interface Expression {
  id: Key;
  text: string;
}

interface TrainingData {
  expressionsCount: number;
  expressions: Expression[];
}

export type Intent = {
  id: Key;
  name: string;
  description: string;
  trainingData: TrainingData;
  reply: Expression;
}

type IntentsListState = {
  list: Intent[];
  selected: Key[];
}

const initialState: IntentsListState = {
  list: [
    // {
    //   "id": "34d7831e137a4016a55f98926800a643",
    //   "name": "Greeting",
    //   "description": "The user says hello.",
    //   "trainingData": {
    //     "expressionCount": 170,
    //     "expressions": [
    //       {
    //         "id": "6399fd6989984c7b871c6301744b0af5",
    //         "text": "Hello"
    //       },
    //       {
    //         "id": "68bafebc2a2e4843a56a221c2ceb12ed",
    //         "text": "Hi"
    //       },
    //       {
    //         "id": "b2a3208dc801432992812638368e0668",
    //         "text": "Good morning!"
    //       }
    //     ]
    //   },
    //   "reply": {
    //     "id": "f35d7e0936a44102bac9cb96c81eec3b",
    //     "text": "Hello :) How can I help you?"
    //   },
    // },
  ],
  selected: [],
};

export const intentsSlice = createSlice({
  name: 'intents',
  initialState,
  reducers: {
    updateIntentsList: (state, { payload: intents }: PayloadAction<Intent[]>) => {
      state.list = intents;
    },

    addIntentKey: (state, { payload: key }: PayloadAction<Key>) => {
      state.selected.push(key);
    },

    clearSelectedIntents: (state) => {
      state.selected = [];
    },

    removeIntentKey: (state, { payload: key }: PayloadAction<Key>) => {
      state.selected = state.selected.filter((item: Key) => item !== key);
    },

    selectAllIntents: (state) => {
      state.selected = state.list.map((intent: Intent) => intent.id);
    },
  },
});


const {
  addIntentKey,
  clearSelectedIntents,
  removeIntentKey,
  selectAllIntents,
  updateIntentsList,
} = intentsSlice.actions;

export {
  addIntentKey,
  clearSelectedIntents,
  removeIntentKey,
  selectAllIntents,
  updateIntentsList,
};

export default intentsSlice.reducer;
