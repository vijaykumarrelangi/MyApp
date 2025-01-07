import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('Vijay Kumar Relangi');
  const [location, setLocation] = useState('Velagathodu, Andhra Pradesh');
  const [jobTitle, setJobTitle] = useState('Software Developer');
  const [gender, setGender] = useState('Male');
  const [image, setImage] = useState('https://via.placeholder.com/150'); // Default image

  const handleSave = () => {
    // Handle saving updated profile details
    navigation.goBack(); // Go back to the profile screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.profileImage} />
        {/* You can add logic to change the image if required */}
      </View>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder="Enter your location"
      />
      <TextInput
        style={styles.input}
        value={jobTitle}
        onChangeText={setJobTitle}
        placeholder="Enter your job title"
      />
      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={setGender}
        placeholder="Enter your gender"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EditProfileScreen;
