import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Text>Olha só que brisa</Text>
        <StatusBar style="auto" />
        <Button onPress="" title='Torres mano'></Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db5d09',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ScrollView: {
    flex: 1,
  }
});
