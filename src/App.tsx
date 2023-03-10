import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "@/navigations/TabNavigator";
import "react-native-gesture-handler";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <TabNavigator />
        </NavigationContainer>
    );
}
