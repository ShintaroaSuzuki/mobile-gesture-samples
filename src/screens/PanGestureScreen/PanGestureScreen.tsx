import { StyleSheet, SafeAreaView } from "react-native";
import PanGesture from "@/components/PanGesture";

const PanGestureScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <PanGesture height={200} width={80} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default PanGestureScreen;
