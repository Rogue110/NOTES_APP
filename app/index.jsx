import { Text, View ,StyleSheet,Image,TouchableOpacity} from "react-native";
import PostIt from '@/assets/images/post-it.png';
import { router, useRouter } from "expo-router";
export default function Index() {

  const router = useRouter();

  return (
    <View
      style={
        Styles.container
      }
    >
      <Image
      source={PostIt}
      style={Styles.image}
      />
      <Text style={Styles.title}>Welcome To Notes App</Text>
      <Text style={Styles.subtitle}>Capture your thoughts</Text>
      <TouchableOpacity
      style={Styles.button}
      onPress={()=>router.push('/notes')}
      >
        <Text style={Styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:20,
    backgroundColor:'#f8f9fa',
  },
  image:{
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title:{
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color:'#333'
  },
  subtitle:{
    fontSize: 16,
    color:'#666',
    textAlign:'center',
    marginBottom:20,
  },
  button:{
    backgroundColor:'#ff8c00',
    padding:15,
    borderRadius:10,
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  }
});