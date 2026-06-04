import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('lobby');

  // கிட்ஹப்பில் நீங்கள் வைத்துள்ள துல்லியமான படங்களின் பெயர்கள்
  const images = {
    lobby_bg: require('./assets/bg_cosmic_lobby.png'),
    title_bg: require('./assets/bg_title_metamask.png'),
    arena_bg: require('./assets/bg_zodiac_arena.png'),
    swap_bg: require('./assets/bg_token_swap.png'),
    reveal_bg: require('./assets/bg_aries_reveal.png'),
    consult_bg: require('./assets/bg_astro_consultation.png'),
    
    btn_connect: require('./assets/btn_connect_metamask.png'),
    btn_arena: require('./assets/btn_arena_activation.png'),
    btn_claim: require('./assets/btn_claim_free_token.png'),
    btn_pay: require('./assets/btn_pay_aymp_coin.png'),
    panel_swap: require('./assets/panel_token_swap.png'),
    panel_zodiac: require('./assets/panel_zodiac_selection.png'),
  };

  return (
    <View style={styles.container}>
      {screen === 'lobby' && (
        <ImageBackground source={images.lobby_bg} style={styles.bg}>
          <Text style={styles.title}>AYMP 999xyz999 Global Council</Text>
          <TouchableOpacity onPress={() => setScreen('title')} style={styles.btnTouch}>
            <Image source={images.btn_connect} style={styles.btnImg} />
          </TouchableOpacity>
        </ImageBackground>
      )}

      {screen === 'title' && (
        <ImageBackground source={images.title_bg} style={styles.bg}>
          <TouchableOpacity onPress={() => setScreen('arena')} style={styles.btnTouch}>
            <Image source={images.btn_arena} style={styles.btnImg} />
          </TouchableOpacity>
        </ImageBackground>
      )}

      {screen === 'arena' && (
        <ImageBackground source={images.arena_bg} style={styles.bg}>
          <Image source={images.panel_zodiac} style={styles.panelImg} />
          <TouchableOpacity onPress={() => setScreen('swap')} style={styles.btnTouch}>
            <Image source={images.btn_claim} style={styles.btnImg} />
          </TouchableOpacity>
        </ImageBackground>
      )}

      {screen === 'swap' && (
        <ImageBackground source={images.swap_bg} style={styles.bg}>
          <Image source={images.panel_swap} style={styles.panelImg} />
          <TouchableOpacity onPress={() => setScreen('reveal')} style={styles.btnTouch}>
            <Image source={images.btn_pay} style={styles.btnImg} />
          </TouchableOpacity>
        </ImageBackground>
      )}

      {screen === 'reveal' && (
        <ImageBackground source={images.reveal_bg} style={styles.bg}>
          <TouchableOpacity onPress={() => setScreen('consult')} style={styles.btnBox}>
            <Text style={styles.btnText}>Proceed to Consultation</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}

      {screen === 'consult' && (
        <ImageBackground source={images.consult_bg} style={styles.bg}>
          <TouchableOpacity onPress={() => setScreen('lobby')} style={styles.btnBox}>
            <Text style={styles.btnText}>Back to Lobby</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0E1A' },
  bg: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' },
  title: { fontSize: 22, color: '#fff', fontWeight: 'bold', marginBottom: 50, textAlign: 'center' },
  btnTouch: { marginTop: 20 },
  btnImg: { width: 250, height: 60, resizeMode: 'contain' },
  panelImg: { width: 300, height: 200, resizeMode: 'contain' },
  btnBox: { backgroundColor: '#FFD700', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 25, marginTop: 40 },
  btnText: { color: '#000', fontSize: 16, fontWeight: 'bold' }
});
