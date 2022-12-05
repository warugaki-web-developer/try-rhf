import type { Meta, StoryObj } from '@storybook/react';

import { Form } from '@/components/Form';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Form> = {
  title: 'Example/Form',
  component: Form,
  tags: ['docsPage'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Form>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
