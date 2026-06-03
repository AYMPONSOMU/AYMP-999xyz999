import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  // திரைகளை மாற்றுவதற்கான ஸ்டேட் (Navigation State)
  const [currentScreen, setCurrentScreen] = useState('Title');

  // 1. Title Screen (முகப்புத் திரை)
  const renderTitleScreen = () => (
    <View style={styles.centerContainer}>
      <Text style={styles.cosmicLogo}>🪐</Text>
      <Text style={styles.mainTitle}>AYMP 999xyz999</Text>
      <Text style={styles.subTitle}>ASTRO-STRATEGIC GLOBAL COUNCIL GAME</Text>
      <Text style={styles.welcomeText}>Welcome, S Somu</Text>
      
      <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentScreen('CosmicLobby')}>
        <Text style={styles.buttonText}>START JOURNEY</Text>
      </TouchableOpacity>
    </View>
  );

  // 2. Cosmic Lobby Screen (பிரபஞ்ச வரவேற்பறை)
  const renderCosmicLobbyScreen = () => (
    <View style={styles.centerContainer}>
      <Text style={styles.screenHeader}>🌌 COSMIC LOBBY</Text>
      <Text style={styles.descriptionText}>
        உங்கள் பிரபஞ்சப் பயணத்தின் நுழைவாயில் இது. இங்குதான் ஆஸ்ட்ரோ-ஸ்ட்ரேட்டஜி மேலாண்மைத் திட்டங்கள் வகுக்கப்படும்.
      </Text>
      
      <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentScreen('AstroProfile')}>
        <Text style={styles.buttonText}>CREATE ASTRO-PROFILE</Text>
      </TouchableOpacity>
    </View>
  );

  // 3. Astro-Profile Creation Screen (ஜாதகக் கட்டமைப்பு)
  const renderAstroProfileScreen = () => (
    <View style={styles.centerContainer}>
      <Text style={styles.screenHeader}>🔮 ASTRO-PROFILE</Text>
      <Text style={styles.descriptionText}>
        கிரகங்களின் நிலைகள் மற்றும் உங்களுடைய ஆஸ்ட்ரோ-ஸ்ட்ரேட்டஜிக் பலங்களைக் கணக்கிடும் களம்.
      </Text>
      
      <View style={styles.chartMock}>
        <Text style={styles.chartText}>[ 9 கிரகங்களின் கூட்டு லக்ன அமைப்பு ]</Text>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentScreen('StrategyRoom')}>
        <Text style={styles.buttonText}>ENTER STRATEGY ROOM</Text>
      </TouchableOpacity>
    </View>
  );

  // 4. Astro-Strategic Room Screen (வியூக அறை)
  const renderStrategyRoomScreen = () => (
    <View style={styles.centerContainer}>
      <Text style={styles.screenHeader}>📊 STRATEGY ROOM</Text>
      <Text style={styles.descriptionText}>
        கார்ப்பரேட் மேலாண்மை மற்றும் உலகளாவிய நிதிச் சந்தை (Financial Markets) வியூகங்களை கிரகங்களின் துணையோடு கணிக்கும் அறை.
      </Text>
      
      <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentScreen('RemedyLab')}>
        <Text style={styles.buttonText}>GO TO REMEDY LAB</Text>
      </TouchableOpacity>
    </View>
  );

  // 5. Cosmic Remedy Lab Screen (பரிகார ஆய்வகம்)
  const renderRemedyLabScreen = () => (
    <View style={styles.centerContainer}>
      <Text style={styles.screenHeader}>🔥 COSMIC REMEDY LAB</Text>
      <Text style={styles.descriptionText}>
        தடைகளைத் தகர்த்து, வெற்றியை ஈர்ப்பதற்கான மகா யாகங்கள் மற்றும் பிரபஞ்சப் பரிகாரங்கள் நிர்வகிக்கப்படும் இடம்.
      </Text>
      
      <TouchableOpacity style={styles.primaryButton} onPress={() => setCurrentScreen('Leaderboard')}>
        <Text style={styles.buttonText}>VIEW LEADERBOARD</Text>
      </TouchableOpacity>
    </View>
  );

  // 6. Global Leaderboard Screen (உலகளாவிய தரவரிசை)
  const renderLeaderboardScreen = () => (
    <View style={styles.centerContainer}>
      <Text style={styles.screenHeader}>🏆 GLOBAL LEADERBOARD</Text>
      <Text style={styles.descriptionText}>
        உலக அளவில் சிறந்த ஆஸ்ட்ரோ-ஸ்ட்ரேட்டஜிஸ்டுகளின் தரவரிசைப் பட்டியல்.
      </Text>
      
      <View style={styles.leaderboardBox}>
        <Text style={styles.leaderboardRow}>1. S Somu — 9,850 pts</Text>
        <Text style={styles.leaderboardRow}>2. Global Client A — 8,200 pts</Text>
        <Text style={styles.leaderboardRow}>3. Global Client B — 7,450 pts</Text>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={() => setCurrentScreen('Title')}>
        <Text style={styles.resetButtonText}>BACK TO MAIN MENU</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {currentScreen === 'Title' && renderTitleScreen()}
        {currentScreen === 'CosmicLobby' && renderCosmicLobbyScreen()}
        {currentScreen === 'AstroProfile' && renderAstroProfileScreen()}
        {currentScreen === 'StrategyRoom' && renderStrategyRoomScreen()}
        {currentScreen === 'RemedyLab' && renderRemedyLabScreen()}
        {currentScreen === 'Leaderboard' && renderLeaderboardScreen()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#050510',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  centerContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cosmicLogo: {
    fontSize: 60,
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 24,
    color: '#ffd700',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subTitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 8,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  welcomeText: {
    fontSize: 14,
    color: '#8a8ab0',
    marginBottom: 40,
    fontStyle: 'italic',
  },
  screenHeader: {
    fontSize: 22,
    color: '#ffd700',
    fontWeight: 'bold',
    marginBottom: 20,
    letterSpacing: 1,
  },
  descriptionText: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  primaryButton: {
    backgroundColor: '#ffd700',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
  },
  buttonText: {
    color: '#050510',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  chartMock: {
    width: width * 0.8,
    height: 120,
    borderColor: '#ffd700',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#0a0a20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  chartText: {
    color: '#8a8ab0',
    fontSize: 14,
  },
  leaderboardBox: {
    width: width * 0.8,
    backgroundColor: '#0a0a20',
    padding: 20,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#444466',
    marginBottom: 40,
  },
  leaderboardRow: {
    color: '#ffffff',
    fontSize: 16,
    marginVertical: 8,
    fontWeight: '500',
  },
  resetButton: {
    borderColor: '#ffd700',
    borderWidth: 1.5,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  resetButtonText: {
    color: '#ffd700',
    fontSize: 14,
    fontWeight: 'bold',
  },
});