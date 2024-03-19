import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
    const [activePopup, setActivePopup] = useState(true);

    const slideAnim = useRef(new Animated.Value(0)).current;
    const loginOpacity = slideAnim.interpolate({
        inputRange: [0, 0.2, 0.5, 1], // Adjusted for a more pronounced fade
        outputRange: [1, 0.6, 0.3, 0], // Adjusted opacity values
    });

    const registerOpacity = slideAnim.interpolate({
        inputRange: [0, 0.5, 0.8, 1], // Adjusted for a more pronounced fade
        outputRange: [0, 0.3, 0.6, 1], // Adjusted opacity values
    });

    const togglePopup = () => {
        setActivePopup(!activePopup);
        Animated.timing(slideAnim, {
            toValue: activePopup ? 1 : 0,
            duration: 600,
            useNativeDriver: false,
        }).start();
    };

    const loginSlideContainerStyle = {
        transform: [
            {
                translateX: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -400],
                }),
            },
        ],
        opacity: loginOpacity,
    };

    const registerSlideContainerStyle = {
        transform: [
            {
                translateX: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [400, 0],
                }),
            },
        ],
        opacity: registerOpacity,
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.wrapper, loginSlideContainerStyle]}>
                <View style={styles.formBox}>
                    <Text style={styles.title}>Login</Text>
                    <View style={styles.inputBox}>
                    <Icon name="envelope" style={styles.inputIcon} />
                        <TextInput style={styles.input} placeholder="Email" />
                    </View>
                    <View style={styles.inputBox}>
                        <Icon name="lock" style={styles.inputIcon} />
                        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.loginRegister}>
                        <Text style={styles.loginText}>
                            Don't have an account?{' '}
                            <TouchableOpacity onPress={togglePopup}>
                                <Text style={styles.link}>Register</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </Animated.View>

            <Animated.View style={[styles.wrapper, registerSlideContainerStyle]}>
                <View style={styles.formBox}>
                    <Text style={styles.title}>Registration</Text>
                    <View style={styles.inputBox}>
                        <Icon name="user" style={styles.inputIcon} />
                        <TextInput style={styles.input} placeholder="Username" />
                    </View>
                    <View style={styles.inputBox}>
                        <Icon name="envelope" style={styles.inputIcon} />
                        <TextInput style={styles.input} placeholder="Email" />
                    </View>
                    <View style={styles.inputBox}>
                        <Icon name="lock" style={styles.inputIcon} />
                        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
                    <View style={styles.loginRegister}>
                        <Text style={styles.loginText}>
                            Already have an account?{' '}
                            <TouchableOpacity onPress={togglePopup}>
                                <Text style={styles.link}>Login</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    wrapper: {
        position: 'absolute',


        width: 300, // Adjust the width based on your needs
        minHeight: 440,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.918)',
        borderRadius: 20,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 0 30px rgba(0, 0, 0, .5)',
        transition: 'min-height 0.5s ease',
    },
    activePopup: {
        transform: [{ scale: 1 }],
        minHeight: 520, // Set the height for the registration form
    },
    iconClose: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 45,
        height: 45,
        backgroundColor: '#1a3a79',
        fontSize: 20,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        zIndex: 1,
    },
    icon: {
        color: '#fff',
    },
    formBox: {
        width: '100%',
        padding: 40,
    },
    title: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    inputBox: {
        flexDirection: 'row',
        position: 'relative',
        width: '100%',
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#1a3a79',
        marginVertical: 30,
    },
    inputIcon: {
        fontSize: 20,
        color: '#fff',
        lineHeight: 50,
        marginRight: 5,
    },
    input: {
        flex: 1,
        height: '100%',
        backgroundColor: 'transparent',
        color: '#fff',
        fontWeight: '600',
        padding: 0,
    },
    btn: {
        width: '100%',
        height: 45,
        backgroundColor: '#1a3a79',
        borderWidth: 0,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
    },
    loginRegister: {
        fontSize: 14,
        color: '#1a3a79',
        textAlign: 'center',
        fontWeight: '500',
        marginVertical: 25,
    },
    loginText: {
        color: '#1a3a79',
        flexDirection: 'row',
        alignItems: 'center', // Align the items in the row
    },
    link: {
        color: '#1a3a79',
        fontWeight: '600',
        marginLeft: 5, // Add some margin
    },
});

export default App;
