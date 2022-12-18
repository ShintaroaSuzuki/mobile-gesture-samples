import Props from "./PanGesture.types";
import { StyleSheet, Text, View, Animated, PanResponder } from "react-native";
import { useState, useRef } from "react";
import { colorScheme } from "@/utils";

const PanGesture = ({ width, height }: Props) => {
    const clipHeight = useRef(
        new Animated.Value(height - (height / 10) * 6)
    ).current;
    const [level, setLevel] = useState<number>(3);

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                const level = Math.floor(
                    event.nativeEvent.locationY / (height / 10)
                );
                setLevel(Math.max(0, Math.min(5, 5 - level / 2)));
                clipHeight.setValue((level * height) / 10);
            },
        })
    ).current;

    return (
        <View {...panResponder.panHandlers}>
            <View
                style={[
                    styles.box,
                    { width, height, backgroundColor: colorScheme.beige },
                ]}
            >
                <Text style={[{ color: colorScheme.black }]}>▲</Text>
                <Text style={[styles.text, { color: colorScheme.black }]}>
                    {level.toFixed(1)}
                </Text>
                <Text style={[{ color: colorScheme.black }]}>▼</Text>
            </View>
            <Animated.View
                style={{
                    overflow: "hidden",
                    position: "absolute",
                    height: clipHeight.interpolate({
                        inputRange: [0, 0, height, height],
                        outputRange: ["0%", "0%", "100%", "100%"],
                    }),
                }}
            >
                <View
                    style={[
                        styles.box,
                        { width, height, backgroundColor: colorScheme.black },
                    ]}
                >
                    <Text style={[{ color: colorScheme.lightGray }]}>▲</Text>
                    <Text
                        style={[styles.text, { color: colorScheme.lightGray }]}
                    >
                        {level.toFixed(1)}
                    </Text>
                    <Text style={[{ color: colorScheme.lightGray }]}>▼</Text>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        borderRadius: 28,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 40,
        whiteSpace: "pre",
        letterSpacing: 0.5,
    },
    image: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default PanGesture;
