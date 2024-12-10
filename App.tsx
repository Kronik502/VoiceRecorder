import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!isAuthenticated ? (
                    <>
                        <Stack.Screen name="Login" options={{ headerShown: false }}>
                            {(props) => <LoginScreen {...props} setAuth={setIsAuthenticated} />}
                        </Stack.Screen>
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                        <Stack.Screen name="Settings" component={SettingsScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
