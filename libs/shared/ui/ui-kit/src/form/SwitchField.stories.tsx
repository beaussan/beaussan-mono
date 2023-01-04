import { SwitchField } from './SwitchField';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z } from 'zod';
import { useZodForm } from './useZodForm';
import { action } from '@storybook/addon-actions';
import Button from '../button/button';

export default {
  title: 'Forms/SwitchField',
  component: SwitchField,
} as ComponentMeta<typeof SwitchField>;

const baseValidationSchema = z.object({
  boolInput: z.boolean(),
  boolInputTwo: z.boolean(),
  boolRequired: z.literal(true),
  boolDisabled: z.boolean(),
});

export const Basic: ComponentStory<typeof SwitchField> = () => {
  const {
    Form,
    methods: { name },
  } = useZodForm({
    schema: baseValidationSchema,
    options: {
      defaultValues: {
        boolDisabled: false,
        boolRequired: false as any,
        boolInputTwo: false,
        boolInput: false,
      },
    },
  });
  return (
    <Form onSubmit={action('onSubmit')}>
      <SwitchField
        {...name('boolInput')}
        label="My boolean input"
      ></SwitchField>
      <SwitchField
        {...name('boolInputTwo')}
        label="My boolean input"
        description="Some description"
      ></SwitchField>
      <SwitchField
        {...name('boolRequired')}
        label="My boolean input"
        description="Some description"
      ></SwitchField>
      <SwitchField
        {...name('boolDisabled')}
        label="My boolean input"
        description="Some description"
        disabled
      ></SwitchField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
