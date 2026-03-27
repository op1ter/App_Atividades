import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  let ArrayPlayer = ["Viper_Shadow", "CyberPunk_99", "MasterChief_BR", "Princess_Peach", "Gamer_De_Elite", "NoobMaster69", "Legendary_User"];
  let ArrayStatus = ["Jogando: Valorant", "Jogando: Cyberpunk", "Jogando: Halo", "Jogando: Mario Kart", "Jogando: CS:GO", "Jogando: Roblox", "Jogando: Elden Ring"];
  let ArrayNivel = ["150", "88", "210", "45", "12", "5", "300"];
  let ArrayCor = ["#3498db", "#f1c40f", "#2ecc71", "#e84393", "#e67e22", "#95a5a6", "#9b59b6"];
  
  let ArrayIcones = [
    require("./img/PC.png"), 
    require("./img/Console.png"), 
    require("./img/Xbox.png"), 
    require("./img/Switch.png"), 
    require("./img/PC.png"), 
    require("./img/Mobile.png"), 
    require("./img/Console.png")
  ];
  
  let ArrayProgressoMissao = ["85%", "12%", "95%", "50%", "10%", "5%", "100%"];
  let elemento = null;
  let i = 0;

  while (i < ArrayPlayer.length) {
    elemento = (
      <>
        {elemento}

        <View id='conteiner' style={{ flexDirection: 'row', backgroundColor: '#2d3436', marginVertical: 10, padding: 20, borderRadius: 20, alignItems: 'center', borderWidth: 2, borderColor: ArrayCor[i]}}>
          
          <View id='nivel' style={{ width: 55, height: 55, borderRadius: 27, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: ArrayCor[i] }}>
            <Text style={{ color: ArrayCor[i], fontSize: 10, fontWeight: 'bold' }}>RANK</Text>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{ArrayNivel[i]}</Text>
          </View>

          <View id='personagem' style={{ flex: 1, marginLeft: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{ArrayPlayer[i]}</Text>
            <Text style={{ fontSize: 13, color: ArrayCor[i], fontWeight: 'bold' }}>{ArrayStatus[i]}</Text>
            
            <View id='XP' style={{ height: 6, width: '90%', backgroundColor: '#1e272e', marginTop: 10, borderRadius: 3 }}>
                <View style={{ height: '100%', width: ArrayProgressoMissao[i], backgroundColor: ArrayCor[i], borderRadius: 3 }} />
            </View>
          </View>

          <Image id='imgClasse' source={ArrayIcones[i]} style={{ width: 35, height: 35, tintColor: 'white' }} />
        </View>
      </>
    );
    i++;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={{ height: 160, backgroundColor: '#1e272e', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 4, borderBottomColor: '#3498db' }}>
        <Text style={{ color: '#3498db', fontSize: 28, fontWeight: 'bold' }}>CENTRAL GAMER</Text>
        <Text style={{ color: '#ecf0f1', fontSize: 12, letterSpacing: 2 }}>AMIGOS ONLINE</Text>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 15 }}>
        <View style={{ marginTop: 10, marginBottom: 30 }}>{elemento}</View>
      </ScrollView>

      <View id='Rodapé' style={{backgroundColor: '#1e272e', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopWidth: 2, borderTopColor: '#3498db', paddingBottom: 5, height: 85}}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./img/Store.png')} style={{ width: 30, height: 30 }}  />
          <Text style={{ color: '#7f8c8d', fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>LOJA</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./img/Library.png')} style={{ width: 30, height: 30 }} />
          <Text style={{ color: '#7f8c8d', fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>BIBLIOTECA</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./img/Social.png')} style={{ width: 35, height: 35 }}/>
          <Text style={{ color: '#3498db', fontSize: 11, fontWeight: 'bold', marginTop: 5 }}>SOCIAL</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./img/Config.png')} style={{ width: 30, height: 30 }} />
          <Text style={{ color: '#7f8c8d', fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>AJUSTES</Text>
        </View>
      </View>
    </View>
  );
}

export default App;