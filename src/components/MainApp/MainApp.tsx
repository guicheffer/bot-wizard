import { useSelector } from 'react-redux';
import React, { FunctionComponent, ReactElement, useMemo } from 'react';

import { getActiveBotContext } from '../../store/bot-context/bot-context.selectors';

// Local App Components
import { BotContext } from '../BotContext/BotContext';
import { RootState } from '../../store/store';
import { SetupInfo } from '../SetupInfo/SetupInfo';

// From Shared
import { IntentsList } from '../shared/IntentsList/IntentsList';
import { getUpdatedIntents } from '../../store/intents/intents.selectors';
import { isPollingFailed, isPollingLoading } from '../../store/polling/polling.selectors';

const makegetActiveBotContext = () => getActiveBotContext;

export const MainApp: FunctionComponent = ({ children, ...props }): ReactElement => {
  const activeBotContextState = useMemo(makegetActiveBotContext, []);
  const activeBotContext = useSelector((state: RootState) => activeBotContextState(state));

  const updatedIntents = useSelector(getUpdatedIntents);
  const hasPollingFailed = useSelector(isPollingFailed);
  const hasPollingLoading = useSelector(isPollingLoading);

  return (
    <div className='BotWizardApp' data-testid='main-app'>
      <BotContext context={activeBotContext} />

      <div className='container'>
        <IntentsList
          isFailed={hasPollingFailed}
          isLoading={hasPollingLoading}
          intents={updatedIntents}
        />
      </div>

      <SetupInfo />
    </div>
  );
};

export default MainApp;
