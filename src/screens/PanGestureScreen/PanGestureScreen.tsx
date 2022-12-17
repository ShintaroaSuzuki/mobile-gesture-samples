import { StyleSheet, SafeAreaView } from "react-native";
import PanGesture from "@/components/PanGesture";
import { colorScheme } from "@/utils";

const PanGestureScreen = () => {
    return (
        <SafeAreaView
            style={[
                styles.container,
                { backgroundColor: colorScheme.darkGray },
            ]}
        >
            <PanGesture height={200} width={80} />
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

export default PanGestureScreen;
