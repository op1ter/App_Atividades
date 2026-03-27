import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function App() {
  let ArrayPlayer = ["Viper_Shadow", "CyberPunk_99", "MasterChief_BR", "Princess_Peach"];
  let ArrayStatus = ["Jogando: Valorant", "Jogando: Cyberpunk", "Jogando: Halo", "Jogando: Mario Kart"];
  let ArrayNivel = ["150", "88", "210", "45"];
  let ArrayCor = ["#3498db", "#f1c40f", "#2ecc71", "#e84393"];
  let ArrayXP = ["85%", "12%", "95%", "50%"];
  
  // LINKS PÚBLICOS
  let imgPC = { uri: 'https://cdn-icons-png.flaticon.com/512/3039/3039430.png' };
  let imgArena = { uri: 'https://cdn-icons-png.flaticon.com/512/1067/1067357.png' };
  let imgGuilda = { uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' };

  let elemento = null;
  for (let i = 0; i < ArrayPlayer.length; i++) {
    elemento = (
      <>
        {elemento}
        <View style={{ flexDirection: 'row', backgroundColor: '#2d3436', marginVertical: 10, padding: 20, borderRadius: 20, alignItems: 'center', borderWidth: 2, borderColor: ArrayCor[i] }}>
          <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: ArrayCor[i] }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{ArrayNivel[i]}</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{ArrayPlayer[i]}</Text>
            <Text style={{ fontSize: 12, color: ArrayCor[i] }}>{ArrayStatus[i]}</Text>
            <View style={{ height: 6, width: '90%', backgroundColor: '#1e272e', marginTop: 10, borderRadius: 3 }}>
                <View style={{ height: '100%', width: ArrayXP[i], backgroundColor: ArrayCor[i], borderRadius: 3 }} />
            </View>
          </View>
          <Image source={imgPC} style={{ width: 30, height: 30, tintColor: 'white' }} />
        </View>
      </>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={{ height: 150, backgroundColor: '#1e272e', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#3498db', fontSize: 26, fontWeight: 'bold' }}>CENTRAL GAMER</Text>
      </View>
      <ScrollView style={{ flex: 1, padding: 15 }}>{elemento}</ScrollView>
      <View style={{ height: 70, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#1e272e' }}>
          <Image source={imgArena} style={{ width: 30, height: 30 }} />
          <Image source={imgGuilda} style={{ width: 30, height: 30 }} />
      </View>
    </View>
  );
}