import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GenreScreen from "../screens/GenreScreen";
import MoviesScreen from "../screens/MoviesScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Genre" component={GenreScreen} />
            <Tab.Screen name="Movies" component={MoviesScreen} />
        </Tab.Navigator>
    );
};