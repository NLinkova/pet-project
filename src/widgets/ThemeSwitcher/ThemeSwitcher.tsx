import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { classNames } from 'shared/lib/classnames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation('translation');

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.DARK ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      {t('Кнопка темы')}
    </Button>
  );
};

export { ThemeSwitcher };
