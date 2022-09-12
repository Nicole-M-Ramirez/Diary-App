import { StyleSheet, Text, View, TextInput, Pressable, AsyncStorage} from 'react-native';
import {useState} from 'react';

let DiaryData = [
  {id:"June 28",
   date: "June 28", 
   text: "I was Sick today"
  },
  {id:"June 29",
   date:"June 29",
  text: "I feel better today"
  }
]

function Writing({navigation}) {
    const [date, setDate] = useState('');
    const [text, setText] = useState('');

    function DiaryArray() {
      if(date === '' || text === '' ){
        console.log("date or text promps is empty");
        setDate('');
        setText('');
        return;
      }

      DiaryData=[...DiaryData, {id: date, date: date, text: text}]

      setDate('');
      setText('');

      navigation.navigate('Diary', {DiaryData})

    }

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
      <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'pink' : 'violet',
              },
              styles.button,
            ]}
            onPress={DiaryArray}>
            <Text style={styles.buttonText}>Write Entry</Text>
          </Pressable>
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
  },
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginTop: 10,
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});