import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { FaBeer } from 'react-icons/all';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Hello world</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
  disabled: false,
};

export const Showcase = () => {
  const intents: ButtonProps['intent'][] = [
    'primary',
    'secondary',
    'ghost',
    'warn',
  ];

  return (
    <div>
      <div>
        {intents.map((intent) => (
          <div className="py-2">
            <h2 className="text-2xl font-semibold">{intent}</h2>
            <div>
              <Button intent={intent}>Hello world</Button>
              <Button intent={intent} disabled>
                Hello world
              </Button>
            </div>
            <div>
              <Button fullWidth intent={intent}>
                Hello world
              </Button>
              <Button fullWidth intent={intent} disabled>
                Hello world
              </Button>
            </div>
            <div>
              <Button intent={intent} icon={<FaBeer />}>
                Hello world
              </Button>
              <Button intent={intent} icon={<FaBeer />} iconPosition="end">
                Hello world
              </Button>
              <Button intent={intent} icon={<FaBeer />} disabled>
                Hello world
              </Button>
              <Button
                intent={intent}
                icon={<FaBeer />}
                iconPosition="end"
                disabled
              >
                Hello world
              </Button>
            </div>
            <div>
              <Button isLoading intent={intent}>
                Hello world
              </Button>
              <Button
                isLoading
                intent={intent}
                loadingText="Doing something..."
              >
                Hello world
              </Button>
              <Button isLoading intent={intent} disabled>
                Hello world
              </Button>
              <Button
                isLoading
                intent={intent}
                loadingText="Doing something..."
                disabled
              >
                Hello world
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
