import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { FaMoon, FaSun } from 'react-icons/fa';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.DARK ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export { ThemeSwitcher };
