import React from 'react';

import { Button } from './Button';
import { withDesign } from 'storybook-addon-designs'
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: true },
  },
  decorators: [withDesign],
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};

export const Demo = Template.bind({});
Demo.play = async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
};
Demo.args = {
  label: 'Button Demo',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
Secondary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
Small.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/WJqZ4FmiXGr8vOZlAQxwGj/Material-2-Design-Kit-(Community)?node-id=242%3A7153',
  },
}
