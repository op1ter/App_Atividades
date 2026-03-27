import React from "react";
import { View, Text, Image } from "react-native";

function App() {
  let CorFundo = "#f4f7f6";
  let CorTextoSecundario = "#95a5a6";
  let CorTextoTerciario = "white";
  let CorMembros = "#2c3e50";
  let TamanhoImagem = 20;
  let TamanhoImagemPersonagem = 120; 
  let TamanhoClasse = 40;
  let BordaRadiusClasse = 10;
  let DistanciaClasse = 8;

  let OPCAO = "Tela1"; 

  if (OPCAO == "Tela1")
    return (
      <View id="Pesquisa" style={{ flex: 1, backgroundColor: CorFundo, padding: 25 }}>
        
        <View style={{ justifyContent: "center", marginTop: 20 }}>
          <View style={{ height: 45, width: "100%", flexDirection: "row", alignItems: "center", paddingHorizontal: 15, backgroundColor: "white", borderRadius: 12, borderColor: "#ddd", borderWidth: 1}}>
            <Image source={require("./img/SearchIcon.png")} style={{ width: TamanhoImagem, height: TamanhoImagem, marginRight: 10}}/>
            <Text style={{ color: CorTextoSecundario, fontSize: 16 }}>Buscar Pro-Teams...</Text>
          </View>
        </View>

        <View id='EscolhaDeJogo' style={{ flexDirection: "row", justifyContent: "center", paddingVertical: 20}}>
          <View style={{ flexDirection: "row", height: TamanhoClasse, paddingHorizontal: 12, backgroundColor: "#3498db", borderRadius: BordaRadiusClasse, marginRight: DistanciaClasse, alignItems: "center" }}>
            <Text style={{ color: CorTextoTerciario, fontWeight: 'bold' }}>FPS</Text>
          </View>
          <View style={{ flexDirection: "row", height: TamanhoClasse, paddingHorizontal: 12, backgroundColor: "#9b59b6", borderRadius: BordaRadiusClasse, marginRight: DistanciaClasse, alignItems: "center" }}>
            <Text style={{ color: CorTextoTerciario, fontWeight: 'bold' }}>MOBA</Text>
          </View>
          <View style={{ flexDirection: "row", height: TamanhoClasse, paddingHorizontal: 12, backgroundColor: "#e67e22", borderRadius: BordaRadiusClasse, marginRight: DistanciaClasse, alignItems: "center" }}>
            <Text style={{ color: CorTextoTerciario, fontWeight: 'bold' }}>Battle Royale</Text>
          </View>
        </View>

        <View id='Mensagens' style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-between", alignItems: 'center'}}>
          <Text style={{ color: CorMembros, fontSize: 22, fontWeight: 'bold' }}>Line-up Atual</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "#3498db", fontSize: 16, marginRight: 5 }}>Ranked</Text>
            <Image source={require("./img/Filter.png")} style={{ width: 15, height: 15 }}/>
          </View>
        </View>

        <View id="ListaPlayers">
          <View style={{ flexDirection: "row", backgroundColor: 'white', padding: 15, borderRadius: 20, marginBottom: 15, elevation: 2 }}>
            <Image source={require("./img/Player1.png")} style={{ width: 80, height: 80, borderRadius: 40, marginRight: 15}}/>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#2c3e50" }}>Ghost_Sniper</Text>
              <Text style={{ fontSize: 14, color: "#7f8c8d" }}>Posição: AWPer</Text>
              <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 5 }}>Win Rate: 75%</Text>
              <View style={{ height: 6, width: "100%", backgroundColor: "#ecf0f1", borderRadius: 3, marginTop: 5}}>
                <View style={{ height: "100%", width: "75%", backgroundColor: "#3498db", borderRadius: 3}}></View>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", backgroundColor: 'white', padding: 15, borderRadius: 20, elevation: 2 }}>
            <Image source={require("./img/Player2.png")} style={{ width: 80, height: 80, borderRadius: 40, marginRight: 15}}/>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#2c3e50" }}>Cyber_Queen</Text>
              <Text style={{ fontSize: 14, color: "#7f8c8d" }}>Posição: Suporte</Text>
              <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 5 }}>Win Rate: 90%</Text>
              <View style={{ height: 6, width: "100%", backgroundColor: "#ecf0f1", borderRadius: 3, marginTop: 5}}>
                <View style={{ height: "100%", width: "90%", backgroundColor: "#2ecc71", borderRadius: 3}}></View>
              </View>
            </View>
          </View>
        </View>

        <View id='CardTorneio' style={{ marginTop: 25, backgroundColor: '#2c3e50', borderRadius: 20, overflow: 'hidden' }}>
          <Image source={require('./img/ArenaGames.png')} style={{ width: '100%', height: 120 }} />
          <View style={{ padding: 15 }}>
            <Text style={{ fontSize: 14, color: '#bdc3c7' }}>Próximo Desafio:</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>World Cyber Championship 2026</Text>
          </View>
        </View>
      </View>
    );
  else
    return (
      <View id="TelaDetalhesTorneio" style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ height: 250, width: '100%' }}>
          <Image source={require('./img/ArenaGames.png')} style={{ width: '100%', height: '100%' }}/>
          <View style={{ position: 'absolute', top: 50, left: 20 }}>
            <Image source={require("./img/BackBtn.png")} style={{ width: 30, height: 30 }}/>
          </View>
        </View>

        <View id="CardDetalhes" style={{ backgroundColor: 'white', borderTopLeftRadius: 40, borderTopRightRadius: 40, marginTop: -40, padding: 30, flex: 1 }}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#2c3e50', textAlign: 'center' }}>World Cyber Championship</Text>
          <Text style={{ fontSize: 15, color: '#7f8c8d', textAlign: 'center', marginTop: 15, lineHeight: 22 }}>
            A maior competição de e-sports do ano. Prepare sua line-up, ajuste suas configurações e venha disputar o troféu mundial na Grande Arena Digital.
          </Text>

          <View id="Premio" style={{ width: '100%', backgroundColor: '#f8f9fa', borderRadius: 15, padding: 20, alignItems: 'center', marginTop: 25, borderWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#f1c40f' }}>$50,000.00</Text>
            <Text style={{ fontSize: 14, color: '#95a5a6', fontWeight: 'bold', letterSpacing: 1 }}>PREMIAÇÃO TOTAL</Text>
          </View>

          <View style={{ width: '100%', padding: 15, backgroundColor: '#ecf0f1', borderRadius: 10, marginTop: 20 }}>
            <Text style={{ color: '#7f8c8d', fontSize: 12, fontWeight: 'bold' }}>CÓDIGO DE ACESSO DA EQUIPE</Text>
          </View>

          <View id="BotaoInscricao" style={{ backgroundColor: '#3498db', width: '100%', padding: 18, borderRadius: 15, alignItems: 'center', marginTop: 30 }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>INSCREVER TIME</Text>
          </View>
        </View>
      </View>
   );
}
export default App;