import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DndExperiment } from './dndExperiment';

const Story: ComponentMeta<typeof DndExperiment> = {
  component: DndExperiment,
  title: 'DndExperiment',
};
export default Story;

const Template: ComponentStory<typeof DndExperiment> = (args) => <DndExperiment/>;

export const Primary = Template.bind({});

