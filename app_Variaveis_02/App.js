import react from "react";
import {Text, View, Image} from 'react-native';

export default function App(){
  let CorFundo1 = '#2b58de'; 
  let CorFundo2 = '#f0f4f7'; 
  let CorBorda = 'transparent'; 
  let CorTextoTopo = 'white';
  let CorTitulo = '#4a90e2'; 
  let CorTextoCorpo = '#333333';

  let Negrito = 'bold';
  let Horizontal = 'row';
  let Vertical = 'column';
  let Espacamento = 30;
  let Espacamento2 = 20;
  let BordaRedonda = 30;

  let TamanhoTexto2 = 13;
  let TamanhoTitulo = 24;
  let TextoTopo = "Explore os lançamentos mais aguardados de 2026, acompanhe suas conquistas e descubra novos mundos nos seus consoles favoritos.";
  let TextoItem = "O novo RPG de mundo aberto promete revolucionar a indústria com gráficos em 8K e inteligência artificial avançada nos NPCs.";

  let imgAvatar = require("./img/AvatarGamer.png");
  let imgNotif = require("./img/Notificacao.png");
  let imgRPG = require("./img/RPG.png");     
  let imgAcao = require("./img/Acao.png");
  let imgIndie = require("./img/Indie.png");
  let imgGame1 = require("./img/EldenRing2.png"); 
  let imgGame2 = require("./img/GTA6.png");
  let imgGame3 = require("./img/Zelda.png");
  let imgBarraExp = require("./img/BarraExperiencia.png"); 

  let TamanhoIconeTopo = 40;
  let TamanhoIconeNotif = 25;
  let TamanhoCategoria = 70;
  let LarguraGame = 100;
  let AlturaGame = 80;

  return(
    <View id = 'Tudo' style={{backgroundColor: CorFundo1, flex:1}}>
      
      <View id = 'Topo' style = {{backgroundColor: CorFundo1, flex:1.5, padding: Espacamento, justifyContent: 'center'}}>
        <View id = 'Perfil' style={{flexDirection: Horizontal, marginBottom: Espacamento2, justifyContent: 'space-between', alignItems: 'center'}}>
          <Image source={imgAvatar} style={{width: TamanhoIconeTopo, height: TamanhoIconeTopo, borderRadius: 20}} />
          <Image source={imgNotif} style={{width: TamanhoIconeNotif, height: TamanhoIconeNotif}} />
        </View>
        <View style = {{flexDirection: Vertical}}>
          <Text id = 'Texto App' style = {{color: CorTextoTopo, fontSize: TamanhoTexto2, lineHeight: 18}}>{TextoTopo}</Text>
        </View>
      </View>

      <View id = 'Segunda Metade' style = {{backgroundColor: CorFundo2, flex:5, borderTopLeftRadius: BordaRedonda, borderTopRightRadius: BordaRedonda, padding: Espacamento}}>
        
        <View style = {{flexDirection: Vertical}}>
          <Text id = 'Titulo1' style = {{color: CorTitulo, fontSize: TamanhoTitulo, marginBottom: Espacamento2, fontWeight: Negrito}}>Gêneros</Text>
          <View id = 'Seleção Categorias' style = {{ flexDirection: Horizontal, justifyContent: 'space-between', marginBottom: Espacamento}}>
            <Image source={imgRPG} style={{width: TamanhoCategoria, height: TamanhoCategoria, borderRadius: 15}} />
            <Image source={imgAcao} style={{width: TamanhoCategoria, height: TamanhoCategoria, borderRadius: 15}} />
            <Image source={imgIndie} style={{width: TamanhoCategoria, height: TamanhoCategoria, borderRadius: 15}} />
          </View>
        </View>  

        <View id = 'Lista Games' style = {{flexDirection: Vertical, flex: 1}}>
          <Text id = 'Titulo2' style = {{color: CorTitulo, fontSize: TamanhoTitulo, marginBottom: Espacamento2, fontWeight: Negrito}}>Lançamentos</Text>
          
          <View style = {{flexDirection: Horizontal, alignItems: 'center', marginBottom: 15}}>
            <Image source={imgGame1} style={{width: LarguraGame, height: AlturaGame, borderRadius: 15}} />
            <Text style = {{flex: 1, fontSize: 11, marginLeft: 15, color: CorTextoCorpo}}>{TextoItem}</Text>
          </View>

          <Image source={imgBarraExp} style={{width: '100%', height: 15, marginBottom: 15}} />

          <View style = {{flexDirection: Horizontal, alignItems: 'center', marginBottom: 15}}>
            <Image source={imgGame2} style={{width: LarguraGame, height: AlturaGame, borderRadius: 15}} />
            <Text style = {{flex: 1, fontSize: 11, marginLeft: 15, color: CorTextoCorpo}}>Aguardado por uma década, o próximo título da franquia promete o mapa mais denso e vivo já criado.</Text>
          </View>

          <View style = {{flexDirection: Horizontal, alignItems: 'center'}}>
            <Image source={imgGame3} style={{width: LarguraGame, height: AlturaGame, borderRadius: 15}} />
            <Text style = {{flex: 1, fontSize: 11, marginLeft: 15, color: CorTextoCorpo}}>Uma nova jornada épica que expande as fronteiras da exploração e puzzles criativos.</Text>
          </View>

        </View>
      </View>
    </View>
  );
}