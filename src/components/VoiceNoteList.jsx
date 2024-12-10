import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

export default function VoiceNoteList({ notes, onDelete, onPlay }) {
    return (
        <FlatList
            data={notes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text>{new Date(item.date).toLocaleString()}</Text>
                    <Button title="Play" onPress={() => onPlay(item.uri)} />
                    <Button title="Delete" onPress={() => onDelete(item.id)} />
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
});
