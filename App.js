// import { StyleSheet, Text, View } from 'react-native';


// export default function App() {
//   return (
//     <View
//       style={styles.container}>
//       <Text>Hello, world!</Text>
//     </View>
//   )
// }


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

// import React from 'react';
// import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';

// export default function App() {
//   const [text, onChangeText] = React.useState('');
//   const [number, onChangeNumber] = React.useState(null);

//   return (
//     <SafeAreaView>
//       <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
//       {/* <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="useless placeholder"
//         keyboardType="numeric"
//       /> */}
//        <Text>{text}</Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Opening from './screens/Opening';
import Writing from './screens/Writing';
import Diary from './screens/Diary';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return(
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="Opening"
              component={Opening}
              options={{
                headerShown: false,
              }}
            /> */}
            <Stack.Screen 
              name='Opening'
              component={Opening}
              options={{
                headerTitle: "",
                headerShown: false,
                
              }}
            />
             <Stack.Screen 
              name='Writing'
              component={Writing}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: 'pink'
              }}
            />
            <Stack.Screen 
              name='Diary'
              component={Diary}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: 'pink'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
          {/* <Opening /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});