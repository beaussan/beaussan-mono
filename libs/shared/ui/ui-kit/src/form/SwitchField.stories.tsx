import { SwitchField } from './SwitchField';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { z } from 'zod';
import { SimpleForm } from './useZodForm';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Forms/SwitchField',
  component: SwitchField,
} as ComponentMeta<typeof SwitchField>;

const baseValidationSchema = z.object({
  boolInput: z.boolean(),
});

export const Basic: ComponentStory<typeof SwitchField> = () => {
  return (
    <SimpleForm onSubmit={action('onSubmit')} schema={baseValidationSchema}>
      <SwitchField name="boolInput" label="My boolean input"></SwitchField>
      <SwitchField
        name="boolInput"
        label="My boolean input"
        description="Some description"
      ></SwitchField>
      <SwitchField
        name="boolInput"
        label="My boolean input"
        description="Some description"
        disabled
      ></SwitchField>
    </SimpleForm>
  );
};
