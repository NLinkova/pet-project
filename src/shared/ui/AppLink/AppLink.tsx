import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classnames/classnames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(
        cls.AppLink,
        {},
        [className, cls[theme]],
      )}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
