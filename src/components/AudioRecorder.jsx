import React, { useState } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { saveVoiceNote, deleteVoiceNote, getVoiceNotes } from '../utils/storage';

export default function AudioRecorder() {
    const [recording, setRecording] = useState(null);
    const [recordings, setRecordings] = useState([]);

    const loadRecordings = async () => {
        const storedNotes = await getVoiceNotes();
        setRecordings(storedNotes || []);
    };

    const startRecording = async () => {
        try {
            const permission = await Audio.requestPermissionsAsync();
            if (permission.granted) {
                const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
                setRecording(recording);
            }
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    };

    const stopRecording = async () => {
        setRecording(null);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        const newNote = { uri, date: new Date().toISOString(), id: Date.now().toString() };
        await saveVoiceNote(newNote);
        loadRecordings();
    };

    const playRecording = async (uri) => {
        const { sound } = await Audio.Sound.createAsync({ uri });
        await sound.playAsync();
    };

    const handleDelete = async (id) => {
        await deleteVoiceNote(id);
        loadRecordings();
    };

    React.useEffect(() => {
        loadRecordings();
    }, []);

    return (
        <View style={styles.container}>
            <Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} />
            <FlatList
                data={recordings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.recordingItem}>
                        <Text>{new Date(item.date).toLocaleString()}</Text>
                        <Button title="Play" onPress={() => playRecording(item.uri)} />
                        <Button title="Delete" onPress={() => handleDelete(item.id)} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    recordingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
});
