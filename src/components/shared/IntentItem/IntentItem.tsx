import React, { FunctionComponent, ReactElement, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addIntentKey, Intent, removeIntentKey } from '../../../store/intents/intents.slices';
import { getSelectedState } from '../../../store/intents/intents.selectors';
import { RootState } from '../../../store/store';
import styles from './IntentItem.module.scss';

interface ResultProps {
  intent: Intent;
}

const makeGetSelectedState = () => getSelectedState;

/**
 *
 * I know, I could have named it in a better way...
 * ...I don't think it's a good one for now, we should pick something related to `expression` or related...
 */

export const IntentItem: FunctionComponent<ResultProps> = ({ children, ...props }): ReactElement => {
  const { intent } = props;
  const dispatch = useDispatch();

  const isSelectedState = useMemo(makeGetSelectedState, []);
  const isSelected = useSelector((state: RootState) => isSelectedState(state, intent.id));

  const handleSelectIntent = useCallback((event: React.SyntheticEvent<HTMLInputElement>) => {
    const isSelected = event.currentTarget.dataset.selected as "true" | "false" === "true";
    const selectedIntentKey = event.currentTarget.dataset.key as string;

    dispatch(isSelected ? removeIntentKey(selectedIntentKey) : addIntentKey(selectedIntentKey));
  }, [dispatch]);

  return (
    <label
      className={styles.intentItem}
      data-selected={!!isSelected}
      data-testid='intent-item'
      htmlFor={`intents-${intent.id}`}
    >
      <input
        checked={isSelected}
        className={styles.actualCheckbox}
        data-key={intent.id}
        data-selected={isSelected}
        id={`intents-${intent.id}`}
        onChange={handleSelectIntent}
        type='checkbox'
        name='intents'
      />
      <div className={`${styles.fakeChecksign} toggle`}><span></span></div>

      <article className={styles.info}>
        <p className={styles.intentTitle}> { intent.name } </p>
        <p className={styles.intentDescription}> { intent.description } </p>
      </article>
    </label>
  );
}
