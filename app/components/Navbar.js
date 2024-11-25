import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navItem} onPress={() => alert('Home')}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => alert('Profile')}>
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => alert('Settings')}>
                <Text style={styles.navText}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#6200EE',
        paddingVertical: 10,
    },
    navItem: {
        padding: 10,
    },
    navText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Navbar;
