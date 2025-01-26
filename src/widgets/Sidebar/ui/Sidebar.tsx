import { useState } from 'react';
import { classNames } from 'shared/lib/classnames/classnames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(cls.Sidebar,
      { [cls.collapsed]: collapsed },
      [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.swithers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}