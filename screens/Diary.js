import { StyleSheet, Text, View } from 'react-native';


 function Diary() {
  return (
    <View
      style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  )
}

export default Diary;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer:{
    fontSize: 40
  }
});