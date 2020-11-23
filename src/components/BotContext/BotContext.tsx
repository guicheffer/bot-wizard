import React, { FunctionComponent, ReactElement } from 'react';

import { BotContext as BotContextInterface } from '../../store/bot-context/bot-context.slices';
import CONFIGS from '../../app/configs';
import styles from './BotContext.module.scss';

interface BotContextProps {
  context: BotContextInterface;
}

/**
 *
 * Self contained component (dumb one)
 *
 * Remember: This is pretty much mocked with stuff that comes from the "BotContext" slicer.
 * Ideally, this would come from an api response aiming to display the actual active bot context.
 */

export const BotContext: FunctionComponent<BotContextProps> = ({ children, ...props }): ReactElement => {
  const { context } = props;

  return (
    <section className={`row ${styles.botContext}`}>
      <h1 className={styles.botName}>
        <small>{ CONFIGS.APP.TRANSLATIONS?.BOT_NAME }</small>{ context.name }<small>{ CONFIGS.APP.TRANSLATIONS?.BOT_NAME_SUFFIX }</small>
      </h1>

      <h2 className={styles.botDomain}>
        <small>{ CONFIGS.APP.TRANSLATIONS?.BOT_DOMAIN }</small>
        <a target='_blank' rel='noindex nofollow noopener noreferrer' href={context.domain}> { context.domain } </a>
      </h2>

      <hr className='fade-rule'/>
    </section>
  );
}
