import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import AppLink from 'components/ui/AppLink';
import AppIcon from 'components/ui/AppIcon';

import './AppSocials.sass';

const b = cn('Socials');

interface IProps {
  className?: string;
}

const AppSocials: FunctionComponent<IProps> = ({ className }) => {
  return (
    <div className={classnames(b('Socials'), className)}>
      <ul className={b('List')}>
        <li className={b('Item')}>
          <AppLink
            to='https://github.com/webistomin/react-movie-app'
            target='_blank'
            rel='noopener noreferrer nofollow'
            className={b('Link')}
            color='grey'
            aria-label='Open project on GitHub'>
            <AppIcon className='Icon_github' icon='icon-github' width={24} height={24} />
          </AppLink>
        </li>
      </ul>
    </div>
  );
};

export default AppSocials;
