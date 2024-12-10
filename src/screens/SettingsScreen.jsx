import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    const handleResetSettings = () => {
        // Add logic to reset settings
        alert('Settings reset to default!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.setting}>
                <Text>Dark Mode</Text>
                <Switch value={isDarkMode} onValueChange={handleToggleDarkMode} />
            </View>
            <Button title="Reset to Default" onPress={handleResetSettings} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
});
