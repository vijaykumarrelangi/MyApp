import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const NotificationScreen = () => {
  // Sample notifications
  const [notifications, setNotifications] = useState([
    { id: '1', type: 'message', title: 'New Message', message: 'You have a new message from John!', read: false },
    { id: '2', type: 'update', title: 'App Update', message: 'A new update is available for the app.', read: false },
    { id: '3', type: 'alert', title: 'Alert', message: 'Your subscription will expire in 3 days.', read: false },
  ]);

  // Function to mark notification as read
  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  // Render each notification item
  const renderItem = ({ item }) => (
    <View style={[styles.notificationItem, item.read && styles.readNotification]}>
      {/* Notification Icon */}
      <Ionicons
        name={item.type === 'message' ? 'chatbubble' : item.type === 'update' ? 'cloud-download' : 'alert-circle'}
        size={24}
        color={item.read ? '#aaa' : '#00796b'} // Matching the HomeScreen greenish color
        style={styles.icon}
      />

      {/* Notification Content */}
      <View style={styles.notificationContent}>
        <Text style={[styles.notificationTitle, item.read && styles.readText]}>{item.title}</Text>
        <Text style={[styles.notificationMessage, item.read && styles.readText]}>{item.message}</Text>
        <TouchableOpacity onPress={() => markAsRead(item.id)} style={styles.markAsReadButton}>
          <Text style={styles.markAsReadText}>{item.read ? 'Read' : 'Mark as Read'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.notificationList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa', // Light background color (matching HomeScreen)
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b', // Rich greenish color (matching HomeScreen)
    textAlign: 'center',
    marginBottom: 20,
  },
  notificationList: {
    marginTop: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3, // Shadow effect on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  readNotification: {
    backgroundColor: '#e0e0e0', // Greyed-out background for read notifications
  },
  icon: {
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationMessage: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  markAsReadButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: '#00796b', // Rich greenish color (matching HomeScreen)
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  markAsReadText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  readText: {
    color: '#aaa',
  },
});

export default NotificationScreen;
