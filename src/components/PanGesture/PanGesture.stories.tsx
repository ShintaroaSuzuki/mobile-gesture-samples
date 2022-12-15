import PanGesture from './PanGesture';

import { ComponentStory, ComponentMeta } from '@storybook/react';

const config = {
    title: 'Components/PanGesture',
    component: PanGesture,
} as ComponentMeta<typeof PanGesture>;

export default config;

export const Default: ComponentStory<typeof PanGesture> = () => {
    return (
        <PanGesture />
    )
};
