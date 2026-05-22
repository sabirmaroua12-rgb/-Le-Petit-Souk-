import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Menu = ({ navigation }: any) => {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu du jour</Text>

      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Accueil")}
      >
        <Text style={styles.buttonText}>← Retour à l'accueil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9B7C0",
    padding: 15,
  },
  header: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#EAEFF2",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    color: "#6C7A89",
  },
  priceContainer: {
    borderLeftWidth: 2,
    borderLeftColor: "#7FB3D5",
    paddingLeft: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  button: {
    marginTop: 15,
    backgroundColor: "#D6EAF8",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#2C3E50",
  },
});
   