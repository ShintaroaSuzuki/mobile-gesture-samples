import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "@/navigations/TabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <TabNavigator />
        </NavigationContainer>
    );
}
