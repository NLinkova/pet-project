import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: { onClick: fn() },

};

export default meta; type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
};

// export const OutlineDark = Template.bind({});
// OutlineDark.args = {
//   children: 'Text',
//   theme: ThemeButton.OUTLINE,
// };
// OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
