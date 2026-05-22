import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const {width}=Dimensions.get("window")
export default function Index() {
  const router = useRouter();
  return (
    <View style={{flex:1,backgroundColor:"#a1c4da"}}>      

    
    
  <Image source={require("../assets/images/bcg-img.jpg")} style={Styles.container} resizeMode="cover"/>
 <View style={Styles.mainCard}>
   <Text style={Styles.title}>Le Petit Souk</Text>
 <Text style={Styles.subTitle}>Restaurant Traditionnel Marocain</Text>
        <Text style={Styles.subName}>Bienvenue dans l'authenticité marocaine</Text>
        <TouchableOpacity
          style={Styles.button}
  onPress={() => router.push("/menu")}
        >
<Text style={Styles.buttonText}>🍽️ Voir le Menu</Text>
 </TouchableOpacity>
            
 <Text style={Styles.info}> 📍Beni Mellal</Text>
          
  </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 50,
    width:width,
    borderWidth:10,
    height:2,
    borderBottomRightRadius: 250,
    borderBottomLeftRadius: 250,
    borderColor: "#80B4D4",
    backgroundColor: "#80B4D4"


  },
  mainCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#a1c4da"

  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: '#0f0f0f',
    textAlign: "center",
    marginTop: 30,
  },
  subTitle: {
    fontSize: 20,
    color: '#080808',
    marginTop: 26,
    textAlign: "center",

  },
  subName: {
    fontSize: 20,
    color: '#072e41',
    marginTop: 0,
    textAlign: "center",
  
  },
  buttonText: {
    fontSize: 20,
    color: '#0a0a0a',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#2e7da1a1',
    borderRadius: 20,
    textAlign: 'center',
  },
  info: {
    fontSize: 30,
    color: '#0a0a0a',
    marginTop: 30,
    textAlign: 'center',
    alignContent: "flex-start",
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});