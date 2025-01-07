import React, { useState, useEffect } from "react";
import { FlatList, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase"; // Adjust the path if needed
import { Ionicons } from "react-native-vector-icons";

const DiscoverScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "posts"));
        const postsList = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Document ID
          ...doc.data(), // Document Data
        }));
        setPosts(postsList);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image
          source={{ uri: item.userImage || "https://via.placeholder.com/100" }} // Default user image
          style={styles.userImage}
        />
        <Text style={styles.username}>{item.user}</Text>
      </View>
      
      <Image
        source={{ uri: item.video || "https://via.placeholder.com/300" }}
        style={styles.postImage}
      />
      
      <Text style={styles.content}>{item.content}</Text>

      <Text style={styles.location}>{item.location}</Text>

      <Text style={styles.date}>{item.date}</Text> {/* Moved the date below the image */}
      
      <View style={styles.metaData}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.views}>{item.views} Views</Text>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons name="heart-outline" size={24} color="#ff6347" />
          <Text style={styles.likeText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#3b5998" />
          <Text style={styles.commentText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Ionicons name="share-social-outline" size={24} color="#32CD32" />
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#e0f7fa",
  },
  postContainer: {
    backgroundColor: "#e0f7fa",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 5, // Shadow effect for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  content: {
    fontSize: 16, // Increased font size
    marginVertical: 10,
    color: "#444",
  },
  location: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10, // Space between date and other content
  },
  metaData: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  category: {
    fontSize: 12,
    color: "#007bff",
  },
  views: {
    fontSize: 12,
    color: "#555",
  },
  postImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginVertical: 10,
    resizeMode: "cover",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#ff6347",
  },
  commentButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#3b5998",
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#32CD32", // Green color for Share
  },
  followButton: {
    backgroundColor: "#00796b",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  followText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default DiscoverScreen;
