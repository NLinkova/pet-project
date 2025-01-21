import { classNames } from 'shared/lib/classnames/classnames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/">
          Main Page
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about">
          About Page
        </AppLink>
      </div>
    </div >
  )
}

export { Navbar };

