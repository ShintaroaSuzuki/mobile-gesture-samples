import BluetoothScreen from './BluetoothScreen';

import { ComponentStory, ComponentMeta } from '@storybook/react';

const config = {
    title: 'Components/BluetoothScreen',
    component: BluetoothScreen,
} as ComponentMeta<typeof BluetoothScreen>;

export default config;

export const Default: ComponentStory<typeof BluetoothScreen> = () => {
    return (
        <BluetoothScreen />
    )
};
