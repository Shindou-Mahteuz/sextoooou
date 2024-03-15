import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.cima}>
        <Text>A</Text>
        
      </View>
      <View style={styles.meio}>
        <Text>B</Text>
        
      </View>
      <View style={styles.baixo}>
      
        
        <Image
        style={{width: '80%',height:'100%'}}
        source={require("./assets/xianyun-cloud-retainer.gif")} />
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cima: {
    //flex: 1,
    backgroundColor: 'lightgreen',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '30%',
  },
  meio: {
    flex: 1,
    backgroundColor: 'lightblue',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '20%',
    left: 100,
  },
  baixo: {
    //flex: 3,
    backgroundColor: 'blue',
    marginTop: 0,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '70%',
    right: 80,
    
  },
});
