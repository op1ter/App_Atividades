import React from "react";
import { View, Text, Image } from "react-native";

export default function App() {
  let OPCAO = "Tela1"; 

  // LINKS PÚBLICOS
  let imgSearch = { uri: 'https://cdn-icons-png.flaticon.com/512/622/622669.png' };
  let imgPlayer = { uri: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=150&h=150&fit=crop' };
  let imgArena = { uri: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop' };

  if (OPCAO == "Tela1")
    return (
      <View style={{ flex: 1, backgroundColor: "#f4f7f6", padding: 25 }}>
        <View style={{ height: 45, flexDirection: "row", alignItems: "center", paddingHorizontal: 15, backgroundColor: "white", borderRadius: 12, borderWidth: 1, borderColor: '#ddd', marginTop: 20}}>
          <Image source={imgSearch} style={{ width: 20, height: 20, marginRight: 10 }}/>
          <Text style={{ color: "gray" }}>Buscar Pro-Teams...</Text>
        </View>
        
        <View style={{ flexDirection: "row", backgroundColor: 'white', padding: 15, borderRadius: 20, marginTop: 30 }}>
          <Image source={imgPlayer} style={{ width: 70, height: 70, borderRadius: 35, marginRight: 15}}/>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Ghost_Sniper</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>Win Rate: 75%</Text>
          </View>
        </View>

        <View style={{ marginTop: 30, backgroundColor: '#2c3e50', borderRadius: 20, overflow: 'hidden' }}>
          <Image source={imgArena} style={{ width: '100%', height: 120 }} />
          <View style={{ padding: 15 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>World Cyber Championship 2026</Text>
          </View>
        </View>
      </View>
    );
  else
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Image source={imgArena} style={{ width: '100%', height: 250 }} />
        <View style={{ backgroundColor: 'white', borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: -40, padding: 30, flex: 1 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Detalhes do Torneio</Text>
          <View style={{ backgroundColor: '#f8f9fa', padding: 20, borderRadius: 15, marginTop: 30, alignItems: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#f1c40f' }}>$50,000.00</Text>
          </View>
        </View>
      </View>
    );
}