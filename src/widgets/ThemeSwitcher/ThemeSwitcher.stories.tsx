import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../app/providers/ThemeProvider';

import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,

};

export default meta;
export type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {};
