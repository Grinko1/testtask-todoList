module.exports = (layer, componentName) => `
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ${componentName} } from './${componentName}';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';


const meta = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    parameters: {
      layout: 'fullscreen'
    },
    tags: ['autodocs'],
    argTypes: {}
  } satisfies Meta<typeof ${componentName}>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Normal: Story = {
    args: {}
  };
  Normal.decorators = [
    StoreDecorator({}),
  ];
  export const Dark: Story = {
    args: {}
  };
  Dark.decorators = [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK),
  ];

`;
