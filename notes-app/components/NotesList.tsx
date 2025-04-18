import Index from "@/app";
import React from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

interface NotesListProps {
    notes: string[];
    onDelete: (index: number) => void;
    onEdit: (index: number) => void;
}



export default function NotesList({ notes, onDelete, onEdit }: NotesListProps) {
    function handleDelete(item: string, index: number){
        console.log(notes)
        console.log(item, index);
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={notes}
                keyExtractor={(item, Index) => {
                    return Index.toString();
                }}
                renderItem={({ item, index }) => {
                    return <View style={styles.container1}>
                        <Text style={{ flexWrap: "wrap", color: "green ", width: 250 }}>{item}</Text>
                        <View style={styles.deleteitem}>
                            <TouchableOpacity
                            onPress={() => onDelete(index)}
                            style={styles.deleteitem}
                            >
                                <MaterialIcons name="delete" size={18} color="#fc7659" />
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={() => onEdit(index)}
                            style={styles.deleteitem}
                            >
                                <Feather name="edit" size={18} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                }}

            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#fff',
        margin: 20,
        width: 350,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderRadius: 5

    },
    deleteitem: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: 100,

    }
}
)