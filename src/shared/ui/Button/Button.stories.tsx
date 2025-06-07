import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
};
export const OutlineLight: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
};
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundInverted: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
