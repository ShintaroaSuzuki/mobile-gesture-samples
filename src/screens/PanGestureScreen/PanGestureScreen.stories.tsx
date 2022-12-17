import PanGestureScreen from './PanGestureScreen';

import { ComponentStory, ComponentMeta } from '@storybook/react';

const config = {
    title: 'Components/PanGestureScreen',
    component: PanGestureScreen,
} as ComponentMeta<typeof PanGestureScreen>;

export default config;

export const Default: ComponentStory<typeof PanGestureScreen> = () => {
    return (
        <PanGestureScreen />
    )
};
