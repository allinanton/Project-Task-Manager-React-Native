import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const AddColumnPopup = ({ onClose, onAddColumn}) => {
    const [columnName, setColumnName] = useState('');

    // Move styles inside the component
    const styles = StyleSheet.create({
        addColumnPopup: {
            // Style for the main container
            // You can define padding, margin, or other styles here
        },
        heading: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 15,
            paddingHorizontal: 10,
            borderRadius: 5,
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

        },
        cancelButton: {
            padding: 8,
            backgroundColor: '#C9C9C9FF',
            color: 'white',
            borderRadius: 5,
        },
        addButton: {
            padding: 8,
            backgroundColor: 'black', // Set to whatever background color you want for the button
            borderRadius: 5,
        },
        buttonText: {
            color: 'white', // Set to the desired text color
        },
        
    });

    const handleAddColumn = () => {
        if (columnName) {
            onAddColumn(columnName);
            onClose();
        }
    };

    return (
        <View style={styles.addColumnPopup}>
            <Text style={styles.heading}>Add a Column</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter column name"
                value={columnName}
                onChangeText={(text) => setColumnName(text)}
            />
            <View style={{ ...styles.buttonContainer}}>
                <TouchableOpacity onPress={handleAddColumn} style={styles.addButton}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose}>
                    <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default AddColumnPopup;
