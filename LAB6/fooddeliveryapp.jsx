import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

// Local JSON Data
const menuData = [
  { id: 1, name: "Paneer Butter Masala", category: "Veg", price: 250, rating: 4.5 },
  { id: 2, name: "Chicken Biryani", category: "Non-Veg", price: 300, rating: 4.7 },
  { id: 3, name: "Cold Coffee", category: "Beverage", price: 120, rating: 4.2 },
  { id: 4, name: "Veg Burger", category: "Veg", price: 150, rating: 4.3 },
  { id: 5, name: "Mutton Curry", category: "Non-Veg", price: 350, rating: 4.6 },
];

// Function to get card color based on category
const getCardColor = (category) => {
  switch (category) {
    case "Veg":
      return "#d4f8d4"; // Light Green
    case "Non-Veg":
      return "#f8d4d4"; // Light Red
    case "Beverage":
      return "#d4e8f8"; // Light Blue
    default:
      return "#ffffff";
  }
};

export default function App() {
  const renderItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: getCardColor(item.category) }]}>
      <Text style={styles.name}>🍽 {item.name}</Text>
      <Text style={styles.text}>📂 {item.category}</Text>
      <Text style={styles.text}>💰 ₹{item.price}</Text>
      <Text style={styles.text}>⭐ {item.rating}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}

        ListHeaderComponent={<Text style={styles.header}>Restaurant Menu</Text>}
        ListFooterComponent={<Text style={styles.footer}>Thank You for Visiting</Text>}

        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}

        ListEmptyComponent={<Text style={styles.empty}>No items available</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  footer: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  empty: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    width: 200,
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    elevation: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 3,
  },
});
