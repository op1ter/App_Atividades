import React from "react";
import { Text, View, Image } from 'react-native';

export default function App() {
  let CorFundo1 = '#2b58de'; 
  let CorFundo2 = '#f0f4f7'; 
  let CorTextoTopo = 'white';
  let CorTitulo = '#4a90e2'; 
  let CorTextoCorpo = '#333333';
  let Negrito = 'bold';
  let Horizontal = 'row';
  let Vertical = 'column';
  let Espacamento = 30;
  let BordaRedonda = 30;

  // LINKS PÚBLICOS
  let imgPerfil = { uri: 'https://images.unsplash.com/photo-1566334344448-3110434b92c4?w=100&h=100&fit=crop' };
  let imgSino = { uri: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png' };
  let imgCat1 = { uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=200&fit=crop' };
  let imgCat2 = { uri: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200&h=200&fit=crop' };
  let imgCat3 = { uri: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=200&h=200&fit=crop' };
  let imgGame1 = { uri: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=300&h=200&fit=crop' };
  let imgGame2 = { uri: 'https://images.unsplash.com/photo-1580234811497-9bd7fd2f357d?w=300&h=200&fit=crop' };
  let imgBarraStatus = { uri: 'https://i.imgur.com/8Q6vPZ8.png' };

  return (
    <View style={{ backgroundColor: CorFundo1, flex: 1 }}>
      <View style={{ backgroundColor: CorFundo1, flex: 1.5, padding: Espacamento, justifyContent: 'center' }}>
        <View style={{ flexDirection: Horizontal, marginBottom: 20, justifyContent: 'space-between', alignItems: 'center' }}>
          <Image source={imgPerfil} style={{ width: 40, height: 40, borderRadius: 20 }} />
          <Image source={imgSino} style={{ width: 25, height: 25 }} />
        </View>
        <Text style={{ color: CorTextoTopo, fontSize: 13, lineHeight: 18 }}>Explore os lançamentos mais aguardados de 2026 e acompanhe suas conquistas.</Text>
      </View>

      <View style={{ backgroundColor: CorFundo2, flex: 5, borderTopLeftRadius: BordaRedonda, borderTopRightRadius: BordaRedonda, padding: Espacamento }}>
        <Text style={{ fontSize: 24, fontWeight: Negrito, color: CorTitulo, marginBottom: 15 }}>Gêneros</Text>
        <View style={{ flexDirection: Horizontal, justifyContent: 'space-between', marginBottom: 30 }}>
          <Image source={imgCat1} style={{ width: 70, height: 70, borderRadius: 15 }} />
          <Image source={imgCat2} style={{ width: 70, height: 70, borderRadius: 15 }} />
          <Image source={imgCat3} style={{ width: 70, height: 70, borderRadius: 15 }} />
        </View>

        <Text style={{ fontSize: 24, fontWeight: Negrito, color: CorTitulo, marginBottom: 15 }}>Lançamentos</Text>
        <View style={{ flexDirection: Horizontal, alignItems: 'center', marginBottom: 15 }}>
          <Image source={imgGame1} style={{ width: 100, height: 80, borderRadius: 15 }} />
          <Text style={{ flex: 1, fontSize: 11, marginLeft: 15, color: CorTextoCorpo }}>O novo RPG de mundo aberto que está revolucionando a indústria.</Text>
        </View>
        <Image source={imgBarraStatus} style={{ width: '100%', height: 15 }} />
      </View>
    </View>
  );
}