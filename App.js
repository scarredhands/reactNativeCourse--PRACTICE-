import { View,Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import pokemonList from './data.json';
export default function App(){
  return (
    <SafeAreaView style= {styles.container}>
    <FlatList
     data={pokemonList}
     renderItem={({item})=>{
        return (
               <View key={item.id}>
                 <Text>{item.type}</Text>
                 <Text>{item.name}</Text>
               </View>
             )
     }}
     ListHeaderComponent={<Text >Pokemon List</Text>}>
     
    </FlatList>
    </SafeAreaView>
    // <ScrollView style={[styles.container, styles.ScrollView]}>
    // {
    //   pokemonList.map(pokemon=>{
    //     return (
    //       <View key={pokemon.id}>
    //         <Text>{pokemon.type}</Text>
    //         <Text>{pokemon.name}</Text>
    //       </View>
    //     )
    //   })
    // }

    // </ScrollView>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1, backgroundColor:"plum",
     paddingTop: StatusBar.currentHeight,
     
  },
  ScrollView: {
    paddingHorizontal: 20
  }
}
)