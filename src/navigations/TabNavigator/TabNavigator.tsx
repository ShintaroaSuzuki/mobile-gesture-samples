import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PanGestureScreen from "@/screens/PanGestureScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="PanGesture" component={PanGestureScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
