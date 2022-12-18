import { useRef } from "react";
import {
    createBottomTabNavigator,
    BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colorScheme } from "@/utils";
import HomeDrawerNavigator from "@/navigations/HomeDrawerNavigator";

enum TabBarIcon {
    Home = "home",
    Settings = "cog",
}

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: colorScheme.black }]}
        >
            {state.routes.map((route, index) => {
                const AnimatedIcon = Animated.createAnimatedComponent(Icon);

                const animatedValue = useRef(new Animated.Value(0)).current;

                const interpolateIconSize = animatedValue.interpolate({
                    inputRange: [0, 60, 100],
                    outputRange: [28, 26, 24],
                });

                const interpolateTextSize = animatedValue.interpolate({
                    inputRange: [0, 60, 100],
                    outputRange: [10, 9, 8],
                });

                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = async () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    Animated.timing(animatedValue, {
                        toValue: 100,
                        duration: 75,
                        useNativeDriver: false,
                    }).start();
                    await new Promise((resolve) => setTimeout(resolve, 75));

                    Animated.timing(animatedValue, {
                        toValue: 0,
                        duration: 75,
                        useNativeDriver: false,
                    }).start();
                    await new Promise((resolve) => setTimeout(resolve, 75));

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onPressIn = () => {
                    Animated.timing(animatedValue, {
                        toValue: 100,
                        duration: 75,
                        useNativeDriver: false,
                    }).start();
                };

                const onPressOut = () => {
                    Animated.timing(animatedValue, {
                        toValue: 0,
                        duration: 75,
                        useNativeDriver: false,
                    }).start();

                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <View style={styles.button} key={`tabBarButton${index}`}>
                        <TouchableOpacity
                            activeOpacity={1.0}
                            accessibilityRole="button"
                            accessibilityState={
                                isFocused ? { selected: true } : {}
                            }
                            accessibilityLabel={
                                options.tabBarAccessibilityLabel
                            }
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            onPressIn={onPressIn}
                            onPressOut={onPressOut}
                            style={styles.inner}
                        >
                            <AnimatedIcon
                                name={`${
                                    TabBarIcon[
                                        route.name as keyof typeof TabBarIcon
                                    ] + (isFocused ? "" : "-outline")
                                }`}
                                size={28}
                                color={
                                    isFocused
                                        ? colorScheme.emerald
                                        : colorScheme.lightGray
                                }
                                style={[{ fontSize: interpolateIconSize }]}
                            />
                            <Animated.Text
                                style={[
                                    styles.text,
                                    {
                                        color: isFocused
                                            ? colorScheme.emerald
                                            : colorScheme.lightGray,
                                        fontSize: interpolateTextSize,
                                    },
                                ]}
                            >
                                {label}
                            </Animated.Text>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },

    button: {
        flex: 1,
        alignItems: "center",
    },
    inner: {
        marginTop: 10,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        marginTop: 4,
        fontSize: 10,
    },
});

const SettingsScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colorScheme.darkGray,
            }}
        >
            <Text style={{ color: colorScheme.white }}>Settings</Text>
        </SafeAreaView>
    );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen
                name="Home"
                component={HomeDrawerNavigator}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigator;
