import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PolicyScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Our Policies</Text>
        
        <View style={styles.policyCard}>
          <Text style={styles.policyTitle}>Privacy Policy</Text>
          <Text style={styles.policyContent}>
            We value your privacy. All your data is protected and never shared without your consent.
          </Text>
        </View>
        
        <View style={styles.policyCard}>
          <Text style={styles.policyTitle}>Terms of Use</Text>
          <Text style={styles.policyContent}>
            By using this app, you agree to our terms of service and usage guidelines.
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Read More</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Background from Home Screen theme
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200EA', // Primary color
    textAlign: 'center',
    marginBottom: 20,
  },
  policyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  policyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333', // Text color
    marginBottom: 8,
  },
  policyContent: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#03DAC6', // Secondary color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PolicyScreen;
