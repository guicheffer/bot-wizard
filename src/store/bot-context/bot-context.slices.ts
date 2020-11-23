import { createSlice, /*PayloadAction*/ } from '@reduxjs/toolkit';

import CONFIGS from '../../app/configs';

export type BotContext = {
  domain: string;
  name: string;
}

type BotContextState = {
  active: BotContext;
}

const initialState: BotContextState = {
  // YES, this is pretty hack!
  active: {
    domain: CONFIGS.APP.DEFAULTS.BOT.domain,
    name: CONFIGS.APP.DEFAULTS.BOT.name,
  },
};

export const BotContextSlice = createSlice({
  initialState,
  name: 'BotContext',
  reducers: {
    /* I gave up updating the current UI chat bot configurations – would be a lot of work for a few hours */

    // setActiveBotContext: (state, { payload: newBotContext }: PayloadAction<BotContext>) => {
    //   state.active = newBotContext;
    // },
  },
});


// const { setActiveBotContext } = BotContextSlice.actions;
// export { setActiveBotContext };

export default BotContextSlice.reducer;
