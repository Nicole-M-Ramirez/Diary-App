import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


 function Diary({navigation, route}) {

  const{DiaryData}=route.params;

  function DisplayData() {
    return DiaryData.map((item) => {
      return(
          <View style={styles.container}>
            <Text style={styles.textDate}>Date: {item.date}</Text>
            <Text style={styles.textEntryTitle}>Entry:</Text>
            <Text style={styles.textEntry}>{item.text}</Text>
            <View style={styles.line}/>
          </View>
      );
    });
  }

  return (
    <SafeAreaView> 
       <DisplayData />
    </SafeAreaView>
  )
}

export default Diary;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   textContainer:{
//     fontSize: 40
//   }
// });

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 30
  },
  textDate:{
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textEntryTitle:{
    fontSize: 25,
    fontWeight: "bold",
  },
  textEntry:{
    fontSize: 20,
    marginRight: 30
  },
  line: {
    borderBottomColor: 'pink',
    borderBottomWidth: 1,
    marginRight: 30,
    marginTop: 15
  }
});