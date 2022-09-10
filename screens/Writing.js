import { StyleSheet, Text, View, TextInput } from 'react-native';
import {useState} from 'react';

function Writing() {
    const [date, setDate] = useState('');
    const [text, setText] = useState('');

  return (
    <View
      style={styles.container}>
      <Text style={styles.textContainer}>Insert Date</Text>
      <TextInput
        style={styles.inputDate}
        onChangeText={setDate}
        value={date}
      />
      <Text style={styles.textContainer}>Insert Text</Text>
      <TextInput
        multiline={true}
        style={styles.inputText}
        onChangeText={setText}
        value={text}
      />
    </View>
  )
}

export default Writing;

const styles = StyleSheet.create({
  inputDate: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputText: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    //padding: 10,
  },
  container: {
    //flex: 1,
    marginTop: 130,
    //justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
    //alignItems: "center"
  },
  textContainer:{
    fontSize: 20
  }
});