import React, { FunctionComponent, ReactNode } from 'react';
import { cn } from '@bem-react/classname';
import { classnames } from '@bem-react/classnames';

import { Link } from 'react-router-dom';

import './AppLink.sass';

const b = cn('Link');

interface OwnProps {
  className?: string;
  to: string | undefined;
  children: string | ReactNode;
  color?: string;
}

type IProps = OwnProps & React.HTMLProps<HTMLLinkElement>;

const AppLink: FunctionComponent<IProps> = ({ className, to, children, color }) => {
  if (!to) {
    return null;
  } else if (to.match(/^(http(s)?|ftp):\/\//)) {
    return (
      <a href={to} target='_blank' rel='noopener noreferrer nofollow' className={classnames(b({ color }), className)}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} className={classnames(b({ color }), className)}>
        {children}
      </Link>
    );
  }
};

AppLink.defaultProps = {
  color: 'blue',
};

export default AppLink;
