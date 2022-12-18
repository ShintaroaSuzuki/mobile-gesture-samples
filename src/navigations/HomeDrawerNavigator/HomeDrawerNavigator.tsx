import { createDrawerNavigator } from "@react-navigation/drawer";
import PanGestureScreen from "@/screens/PanGestureScreen";
import BluetoothScreen from "@/screens/BluetoothScreen";
import { colorScheme } from "@/utils";

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="PanGesture"
            screenOptions={{
                drawerStyle: { backgroundColor: colorScheme.lightGray },
                drawerType: "front",
                drawerActiveTintColor: colorScheme.turquoise,
            }}
        >
            <Drawer.Screen
                name="PanGesture"
                component={PanGestureScreen}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="Bluetooth"
                component={BluetoothScreen}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
};

export default HomeDrawerNavigator;
