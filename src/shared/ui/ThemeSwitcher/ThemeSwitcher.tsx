import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { classNames } from 'shared/lib/classnames/classnames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, {}, [className])}>
      {theme === Theme.DARK ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      TOGGLE
    </Button>
  );
}

export { ThemeSwitcher };

