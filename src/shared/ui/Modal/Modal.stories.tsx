import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: {
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit '
      + 'incidunt necessitatibus possimus quis saepe sunt totam.\n ',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi '
      + 'consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
