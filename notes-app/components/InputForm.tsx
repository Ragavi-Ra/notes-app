import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import NotesList from "./NotesList";

export default function InputForm() {
    const [val, setVal] = useState("");
    const [notes, setNotes] = useState<string[]>([]);
    const [IsEditing, setIsEditing] = useState<boolean>(false);
    const [EditIndex, setEditIndex] = useState<number | null>(null);

    let editVal: boolean = false;
    const handleAddOrUpdateNote = () => {
        if(val.trim()){
            
            if(IsEditing && (EditIndex !== null)){
                let updatedNotes = [...notes]
                updatedNotes[EditIndex] = val
                setNotes(updatedNotes)
                setEditIndex(null)
                setIsEditing(false)
            }
            else{
                setNotes([...notes, val]);
            }    
            setVal("");
        }
    }
    const handleDelete = (index: number) => {
        let updatedNotes = notes.filter((_, i) => i !== index )
        setNotes(updatedNotes)
    }
    const handleEdit = (index: number) => {
        setIsEditing(true)
        setEditIndex(index)
        setVal(notes[index])
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.textvalue}>Enter the notes:</Text>
            <TextInput 
            style={styles.InputText1}
            multiline={true}
            value= {val}
            onChangeText={setVal}
            /> 
            <TouchableOpacity
                style={styles.buttondesign}
                onPress={handleAddOrUpdateNote}
            >
                <Text
                style={{
                    color: 'white',
                }}>
                    {IsEditing ? "Update" : "Enter"}
                </Text>
            </TouchableOpacity>
            <NotesList notes={notes} onDelete={handleDelete} onEdit ={handleEdit}/>
        </View>

    );
}

const styles = StyleSheet.create({
    textvalue:{
        marginBottom: 10
    },
    container:{
        flex: 1, 
        alignItems: "center", 
        marginTop: 10
    },
    InputText1: {
        width: 350,
        height: 100, 
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        textAlignVertical: "top",
        fontSize: 16,
    },
    buttondesign:{
        backgroundColor: 'blue',
        width: 300,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
})