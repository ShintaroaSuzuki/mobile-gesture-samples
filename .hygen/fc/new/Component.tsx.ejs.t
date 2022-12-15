---
to: <%= abs_path %>/<%= component_name %>.tsx
---

import Props from './<%= component_name %>.types';
import { StyleSheet } from 'react-native';

const <%= component_name %> = ({}: Props) => {
    return (
        <></>
    )
};

const styles = StyleSheet.create({});

export default <%= component_name %>;
