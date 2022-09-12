import {StyleSheet, Pressable, Alert, Text, View} from 'react-native';

let page = null;

function Opening({navigation}) {

    function pressHandlerW () {
        navigation.navigate('Writing')
    }

    function pressHandlerD () {
        navigation.navigate('Diary')
    }

    return (
        <View style={styles.container}>
          <Text style={styles.textContainer}>Diary App!</Text>
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'pink' : 'violet',
              },
              styles.button,
            ]}
            onPress={pressHandlerW}>
            <Text style={styles.buttonText}>Write Entry</Text>
          </Pressable>
        </View>
      );
}

export default Opening;

const styles = StyleSheet.create({
    textContainer:{
        fontSize: 40,
        marginBottom: 20
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      borderRadius: 8,
      padding: 6,
      height: 50,
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      marginBottom: 10
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
    },
  });