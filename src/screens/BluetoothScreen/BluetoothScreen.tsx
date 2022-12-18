import { StyleSheet, SafeAreaView } from "react-native";
import { colorScheme } from "@/utils";

const BluetoothScreen = () => {
    return (
        <SafeAreaView
            style={[
                styles.container,
                { backgroundColor: colorScheme.darkGray },
            ]}
        >
            <></>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default BluetoothScreen;
