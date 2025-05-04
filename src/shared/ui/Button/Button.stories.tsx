import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    onClick: fn(),
    children: 'Text',
  },
};

export default meta; type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
};
export const OutlineLight: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
  },
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];
