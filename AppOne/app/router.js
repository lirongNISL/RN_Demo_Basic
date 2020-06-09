/* @flow strict-local
 * @format
 */
// 跟路由，将示例封装成组件，导出使用
'use strict';
import ButtonBasics from './components/ButtonBasics';  
import FlexDirectionBasics from './components/FlexDirectionBasics';
import FlatListTest from './components/FlatListTest';
import ScrollViewTest from './components/ScrollViewTest';
import Banner from './components/Banner2';
// import Banner from './components/Banner';
// import PageThree from './components/PageThree';
export {ButtonBasics,FlexDirectionBasics,FlatListTest,ScrollViewTest,Banner};


// import * as React from 'react';
// import {
//   ButtonBasics,FlexDirectionBasics,FlatListTest,ScrollViewTest
// } from './app/router';
// import 'react-native-gesture-handler';
// import {Button, View, Text ,TextInput,StyleSheet} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// // 首屏
// function HomeScreen({ navigation }) {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//       <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/> 
//       <Button title="Go to FlatList" onPress={() => navigation.navigate('FlatList')}/> 
//       <Button title="Go to ButtonBasics" onPress={() => navigation.navigate('ButtonBasics')}/> 
//       <ScrollViewTest/>
//     </View>
//   );
// }

// // 详情页
// function DetailsScreen({ navigation }) {
//   const {setOptions} = navigation;
//   return (
//     <View>
//       <Text>Details Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//       <Button title="Go back" onPress={() => navigation.goBack()} />  
//       <TextInput style={styles.input}   onChangeText={text=>{
//           setOptions({
//             title: text
//            })
//         }}
//       />
//       <FlexDirectionBasics/>  
//       <FlatListTest/>
//     </View>
//   );
// }
// // FlatList示例
// function FlatListScreen({ navigation }) {
//   const {setOptions} = navigation;
//   return (
//     <View>
//       <Text>FlatList Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//       <Button title="Go back" onPress={() => navigation.goBack()} />  
//       <TextInput style={styles.input}   onChangeText={text=>{
//           setOptions({
//             title: text
//            })
//         }}
//       />
//       <FlatListTest/>
//     </View>
//   );
// }

// function ButtonBasicsScreen({ navigation }) {

//   return (
//     <View>
//       <Text>ButtonBasics Screen</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
//       <Button title="Go back" onPress={() => navigation.goBack()} />  
//       <ButtonBasics/>
//     </View>
//   );
// }


// const Stack = createStackNavigator();
// //返回包含2个属性的对象的函数：Screen和Navigator。它们都是用于配置导航器的React组件。的元素Navigator应Screen作为其子元素来定义路由的配置。
// // /* <FlatListTest/><ScrollViewTest/> VirtualizedList, SectionList*/
// {/* <FlexDirectionBasics/> */}
// {/* <ButtonBasics/> */}
// const App: () => React$Node = () => {
//   return (
//     // /* NavigationContainer是管理导航树并包含导航状态的组件。该组件必须包装所有导航器结构。 */
//     // {/* 每个屏幕都可以为导航器指定一些选项 */}
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Overview' }}/>
//         <Stack.Screen name="Details" component={DetailsScreen}  options={({ route }) => ({ title: route.params?.name })}/>
//         <Stack.Screen name="FlatList" component={FlatListScreen}  options={({ route }) => ({ title: route.params?.name })}/>  
//         <Stack.Screen name="ButtonBasics" component={ButtonBasicsScreen}/>               
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     width: 200,
//     height:50,
//     backgroundColor: '#ccc'
//   }
// })

// export default App;