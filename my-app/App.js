import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, Image} from 'react-native';
const profileImage = require('./assets/icon.png');
export default function App() {
  return (
    <ScrollView style={{ backgroundColor:' #F7F0E8' }}>
      <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 32, marginLeft: 16, marginTop: 69}}>Hello, Devs</Text>
      <Text style={{marginLeft: 16 }}>14 tasks today</Text>
      <Image source={profileImage}
       style={styles.profileImage}/>

      <StatusBar style="auto" />

    <TextInput  style={styles.input}>Search</TextInput>

    <Text style={styles.subhead}>Categories</Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.category}>

          </ScrollView>
    </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    fontWeight:40,
    flex: 1,
    backgroundColor: '#F7F0E8',
    
  },

  profileImage:{
    width:50,
    height:50,
    borderRadius:2,
    
  },
  input: {
    marginLeft:16,
    marginTop: 20,
    backgroundColor:'#FBF9F7',
    height: 49,
    width:280,
    border:1, 
    borderRadius:30,
    borderColor:'#ccc',
    paddingHorizontal:20,
    fontWeight: 'bold',
    },

    subhead:{
      marginLeft:27,
      marginTop:32,
      fontSize: 23,
      backgroundColor: '#F7F0E8',


    }
});

  

