---
to: "<%= component_type !== 'navigations' ? `${abs_path}/${component_name}.stories.tsx` : null %>"
---

import <%= component_name %> from './<%= component_name %>';

import { ComponentStory, ComponentMeta } from '@storybook/react';

const config = {
    title: 'Components/<%= component_name %>',
    component: <%= component_name %>,
} as ComponentMeta<typeof <%= component_name %>>;

export default config;

export const Default: ComponentStory<typeof <%= component_name %>> = () => {
    return (
        <<%= component_name %> />
    )
};
