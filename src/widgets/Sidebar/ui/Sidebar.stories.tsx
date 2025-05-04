import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

export default meta;
export type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {};
