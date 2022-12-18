---
to: <%= abs_path %>/<%= component_name %>.tsx
---

<% if (component_type === 'components') { -%>
import Props from './<%= component_name %>.types';
import { StyleSheet } from 'react-native';
<% } -%>
<% if (component_type === 'screens') { -%>
import { StyleSheet, SafeAreaView } from 'react-native';
import { colorScheme } from '@/utils';
<% } -%>

const <%= component_name %> = (<%= component_type === 'components' ? "{}: Props" : null %>) => {
    return (
        <% if (component_type === 'screens') { -%>
        <SafeAreaView
            style={[
                styles.container,
                { backgroundColor: colorScheme.darkGray },
            ]}
        >
            <></>
        </SafeAreaView>
        <% } else {-%>
        <></>
        <% } -%>
    )
};

<% if (component_type === 'components') { -%>
const styles = StyleSheet.create({});
<% } -%>
<% if (component_type === 'screens') { -%>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
<% } -%>

export default <%= component_name %>;
