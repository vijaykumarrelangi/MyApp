import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons'; // Importing icons

const SettingsScreen = () => {
  // Function to handle settings options (for example, profile update)
  const handleOptionPress = (option) => {
    alert(`${option} pressed`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      {/* Profile Setting */}
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Profile')}>
        <Ionicons name="person" size={24} color="#4CAF50" />
        <Text style={styles.optionText}>Profile</Text>
      </TouchableOpacity>
      
      {/* Notifications Setting */}
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Notifications')}>
        <Ionicons name="notifications" size={24} color="#2196F3" />
        <Text style={styles.optionText}>Notifications</Text>
      </TouchableOpacity>

      {/* Privacy Setting */}
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Privacy')}>
        <Ionicons name="shield-checkmark" size={24} color="#F44336" />
        <Text style={styles.optionText}>Privacy</Text>
      </TouchableOpacity>

      {/* Language Setting */}
      <TouchableOpacity style={styles.option} onPress={() => handleOptionPress('Language')}>
        <MaterialIcons name="language" size={24} color="#9C27B0" />
        <Text style={styles.optionText}>Language</Text>
      </TouchableOpacity>

      {/* Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => handleOptionPress('Logout')}>
        <Ionicons name="log-out" size={24} color="#fff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa', // Light background color (matching HomeScreen)
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00796b', // Rich greenish color (matching HomeScreen)
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
    color: '#004d40', // Darker green (matching HomeScreen)
    marginLeft: 15,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00796b', // Rich greenish color (matching HomeScreen)
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 15,
  },
});

export default SettingsScreen;
