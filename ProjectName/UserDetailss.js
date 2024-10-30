// UserDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserDetails = ({ route }) => {
  const { user } = route.params; // Get the user data passed from UserList

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.userImage} />
      <Text style={styles.userName}>{user.firstName} {user.lastName}</Text>
      <Text style={styles.userDetails}>Email: {user.email}</Text>
      <Text style={styles.userDetails}>Phone: {user.phone}</Text>
      <Text style={styles.userDetails}>Age: {user.age}</Text>
      <Text style={styles.userDetails}>Address: {user.address.address}, {user.address.city}, {user.address.state}</Text>
      <Text style={styles.userDetails}>Blood Group: {user.bloodGroup}</Text>
      <Text style={styles.userDetails}>Height: {user.height} cm</Text>
      <Text style={styles.userDetails}>Weight: {user.weight} kg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userDetails: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
});

export default UserDetails;
