import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'; // Importing icons

const HomeScreen = () => {
  const handleNavigate = (section) => {
    alert(`Navigating to ${section}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Welcome Image */}
      <Image 
        source={{ uri: 'https://via.placeholder.com/350x150' }} // Replace with your image URL or local image
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to the Home Screen!</Text>

      {/* Description */}
      <Text style={styles.description}>
        This is your homepage where you can find all the important information and navigate to other sections of the app.
      </Text>

      {/* Buttons to navigate to other sections */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => handleNavigate('Settings')}
        >
          <Ionicons name="settings" size={20} color="#fff" />
          <Text style={styles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => handleNavigate('Profile')}
        >
          <Ionicons name="person" size={20} color="#fff" />
          <Text style={styles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => handleNavigate('Notifications')}
        >
          <Ionicons name="notifications" size={20} color="#fff" />
          <Text style={styles.buttonText}>Go to Notifications</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa', // Light background color
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b', // Rich greenish color
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#004d40', // Darker green
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00796b',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    marginBottom: 15,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
});

export default HomeScreen;
