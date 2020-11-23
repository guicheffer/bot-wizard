import { useDispatch } from 'react-redux';
import React, { FunctionComponent, ReactElement, useEffect } from 'react';

import { Intent } from '../../../store/intents/intents.slices';
import { IntentItem } from '../IntentItem/IntentItem';
import { setPollingStarted } from '../../../store/polling/polling.slices';
import CONFIGS from '../../../app/configs';
import styles from './IntentsList.module.scss';

interface IntentsListProps {
  isFailed: boolean;
  isLoading: boolean;
  intents: Intent[];
}

/**
 *
 * Self contained component (dumb one)
 *
 */

export const IntentsList: FunctionComponent<IntentsListProps> = ({ ...props }): ReactElement => {
  const { isFailed, isLoading, intents = [] } = props;
  const dispatch = useDispatch();

  // This will start polling on the first rendering
  // **ps**. this will also ignore eslint since it takes `dispatch` as modifiers only
  // eslint-disable-next-line
  useEffect(() => { dispatch(setPollingStarted()) }, [dispatch]);

  const { PUBLIC_URL } = process.env;
  const shouldShowIntents = !isFailed && !isLoading && !!intents.length;

  return (
    <section className={`row ${styles.intentsList}`}>
      {!shouldShowIntents && (
        <img data-testid='loading-image' className={styles.loading} src={`${PUBLIC_URL}/loading.gif`} alt='Loading...'/>
      )}

      { shouldShowIntents && (
        <>
          <p className={styles.explanation}> { CONFIGS.APP.TRANSLATIONS?.BOT_EXPLANATION } </p>

          <ul className={styles.intentsItem}>
            {intents.map(intent => (
              <li key={intent.id}>
                <IntentItem intent={intent}/>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
