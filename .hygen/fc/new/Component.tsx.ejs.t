---
to: <%= abs_path %>/<%= component_name %>.tsx
---

<% if (component_type === 'components') { -%>
import Props from './<%= component_name %>.types';
import { StyleSheet } from 'react-native';
<% } -%>
<% if (component_type === 'screens') { -%>
import { StyleSheet, SafeAreaView } from 'react-native';
<% } -%>

const <%= component_name %> = (<%= component_type === 'components' ? "{}: Props" : null %>) => {
    return (
        <% if (component_type === 'screens') { -%>
        <SafeAreaView style={styles.container}>
            <></>
        </SafeAreaView>
        <% } else {-%>
        <></>
        <% } -%>
    )
};

<% if (component_type !== 'navigations') { -%>
const styles = StyleSheet.create({});
<% } -%>

export default <%= component_name %>;
