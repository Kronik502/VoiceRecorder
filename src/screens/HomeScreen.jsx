import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AudioRecorder from '../components/AudioRecorder';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Voice Recorder</Text>
            <AudioRecorder />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});
