import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');

    const handleSave = () => {
        // Add logic to save user profile data
        alert('Profile updated successfully!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Name"
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
            />
            <Button title="Save Changes" onPress={handleSave} />
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
});
