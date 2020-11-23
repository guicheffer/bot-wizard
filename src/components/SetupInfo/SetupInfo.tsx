import React, { FunctionComponent, ReactElement, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clearSelectedIntents, selectAllIntents } from '../../store/intents/intents.slices';
import { getSelectedStateInfo } from '../../store/intents/intents.selectors';
import { RootState } from '../../store/store';
import CONFIGS from '../../app/configs';
import styles from './SetupInfo.module.scss';

interface SetupInfoProps {}

const makeGetSelectedStateInfo = () => getSelectedStateInfo;

/**
 *
 * Self contained component (dumb one)
 *
 */

export const SetupInfo: FunctionComponent<SetupInfoProps> = (): ReactElement => {
  const dispatch = useDispatch();

  const getSelectedStateInfo = useMemo(makeGetSelectedStateInfo, []);
  const selectedStateInfo = useSelector((state: RootState) => getSelectedStateInfo(state));

  const handleClearAction = useCallback((event: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatch(clearSelectedIntents());
    event.preventDefault();
  }, [dispatch]);

  const handleSelectAllAction = useCallback((event: React.SyntheticEvent<HTMLButtonElement>) => {
    dispatch(selectAllIntents());
    event.preventDefault();
  }, [dispatch]);

  return (
    <section className={`row ${styles.setupInfo}`}>
      <hr className='fade-rule'/>

      <div className={styles.options}>
        <p className={styles.max}>{selectedStateInfo.selected} / {selectedStateInfo.max || CONFIGS.APP.TRANSLATIONS?.MAX_PLACEHOLDER}</p>

        <div className={styles.actions}>
          <button
            className={styles.button}
            data-clear-all
            disabled={selectedStateInfo.selected === 0}
            onClick={handleClearAction}
          >
            { CONFIGS.APP.TRANSLATIONS?.CLEAR_COPY }
          </button>

          <button
            className={styles.button}
            data-select-all
            disabled={selectedStateInfo.selected === selectedStateInfo.max}
            onClick={handleSelectAllAction}
          >
            { CONFIGS.APP.TRANSLATIONS?.ALL_COPY }
          </button>

          <button
            className={styles.button}
            disabled={selectedStateInfo.selected === 0 || selectedStateInfo.selected > selectedStateInfo.max}
            onClick={() => window.alert(CONFIGS.APP.TRANSLATIONS?.NEXT_ACTION_COPY)}
            value='__next'
          >
            { CONFIGS.APP.TRANSLATIONS?.NEXT_COPY }
          </button>
        </div>
      </div>
    </section>
  );
}
