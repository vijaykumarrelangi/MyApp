import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import { Ionicons, MaterialIcons } from 'react-native-vector-icons';

const defaultProfileImage = 'https://via.placeholder.com/100';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Vijay Kumar Relangi');
  const [location, setLocation] = useState('Velagathodu, Andhra Pradesh');
  const [jobTitle, setJobTitle] = useState('Software Developer');
  const [aboutMe, setAboutMe] = useState('About me');
  const [postCount, setPostCount] = useState(10);
  const [followersCount, setFollowersCount] = useState(150);
  const [followingCount, setFollowingCount] = useState(200);
  const [blockedProfilesCount, setBlockedProfilesCount] = useState(5);
  const [fadeAnim] = useState(new Animated.Value(0));

  const handleEdit = () => {
    setIsEditing(!isEditing);
    Animated.timing(fadeAnim, {
      toValue: isEditing ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const iconSize = 20;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.profile}>
          <Image source={{ uri: defaultProfileImage }} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            {isEditing ? (
              <>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Name"
                />
                <TextInput
                  style={styles.input}
                  value={location}
                  onChangeText={setLocation}
                  placeholder="Location"
                />
                <TextInput
                  style={styles.input}
                  value={jobTitle}
                  onChangeText={setJobTitle}
                  placeholder="Job Title"
                />
                <TextInput
                  style={styles.input}
                  value={aboutMe}
                  onChangeText={setAboutMe}
                  placeholder="About Me"
                />
              </>
            ) : (
              <>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location}>{location}</Text>
                <Text style={styles.aboutMe}>{aboutMe}</Text>
              </>
            )}
            <TouchableOpacity style={styles.editButton} onPress={isEditing ? handleSave : handleEdit}>
              <Ionicons name="pencil-outline" size={iconSize} color="#fff" />
              <Text style={styles.editButtonText}>{isEditing ? 'Save' : 'Edit'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Animated.View style={styles.stats}>
          <View style={styles.statItem}>
            <Ionicons name="person" size={iconSize} color="#00796b" />
            <Text style={styles.statNumber}>{followersCount}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="person-add" size={iconSize} color="#00796b" />
            <Text style={styles.statNumber}>{followingCount}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="rss-feed" size={iconSize} color="#00796b" />
            <Text style={styles.statNumber}>{postCount}</Text>
            <Text style={styles.statLabel}>Feed</Text>
          </View>
          <View style={styles.statItem}>
            <MaterialIcons name="block" size={iconSize} color="#00796b" />
            <Text style={styles.statNumber}>{blockedProfilesCount}</Text>
            <Text style={styles.statLabel}>Blocked Profiles</Text>
          </View>
        </Animated.View>
          {/* Actions Section */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="trash-outline" size={iconSize} color="#fff" />
          <Text style={styles.actionText}>Trash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="document-text-outline" size={iconSize} color="#fff" />
          <Text style={styles.actionText}>Drafts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="time-outline" size={iconSize} color="#fff" />
          <Text style={styles.actionText}>History</Text>
        </TouchableOpacity>
      </View>
      </View>

      <Text style={styles.noPostsText}>No Post</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  profileCard: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    elevation: 3,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  profileDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#555'
  },
  aboutMe: {
    fontSize: 14,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    fontSize: 14,
    backgroundColor: '#fafafa',
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#004d40',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    borderRadius: 20,
    alignItems: 'center',
    width:'auto',
    paddingLeft: 30,
    marginLeft:20,
    marginRight:20,

  },
  editButtonText: {
    color: '#fff',
    fontSize: 20,
    
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
  },
  noPostsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 30,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 10,
  },
  actionButton: {
    flexDirection: 'row',
    backgroundColor: '#004d40',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 5,
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProfileScreen;
