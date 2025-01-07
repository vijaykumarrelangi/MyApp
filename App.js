import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';
import DiscoverScreen from './screens/DiscoverScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Ionicons } from 'react-native-vector-icons';
import HomeScreen from './screens/Home';
import AlertScreen from './screens/Alert';
import SettingsScreen from './screens/Settings';


// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Fixed purple color for all headers
const purpleHeaderColor = '#143444'; // Purple color

// Reusable Header Title Component
const HeaderTitle = () => (
  <View style={{ marginLeft:110}}>
    <Text style={{ fontSize: 30, color: '#fff', fontFamily:'serif',fontWeight:'900'}}>BWstory</Text>
    
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#f0f0f0',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#333',
          },
          headerStyle: {
            backgroundColor: purpleHeaderColor, // Purple header for all tabs
          },
          headerTitle: () => <HeaderTitle />, // Reusable header title for all tabs
        }}
      >
        <Tab.Screen
          name="Discover"
          component={DiscoverScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={AlertScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="notifications" color={color} size={size} />,
          }}
        />
        <Tab.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
