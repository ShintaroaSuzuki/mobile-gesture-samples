import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PanGesture from "@/components/PanGesture";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <PanGesture height={200} width={80} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
