import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        cls.Sidebar,
        {
          [cls.expanded]: expanded,
        },
        [className],
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.expandedBtn}
        theme={ButtonTheme.BACKGROUND}
        square
        size={ButtonSize.L}
      >
        {expanded ? '<' : '>'}
      </Button>
      <div className={cls.swithers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
