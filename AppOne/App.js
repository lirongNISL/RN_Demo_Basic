import * as React from 'react';
import {ButtonBasics,FlexDirectionBasics,FlatListTest,ScrollViewTest,Banner} from './app/router';   //引入自定义组件
import 'react-native-gesture-handler';  //捕获手势
import {Button, View, Text , TextInput, StyleSheet,Platform,TouchableHighlight,Alert} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'; //安全区域
import { NavigationContainer } from '@react-navigation/native';   //引入导航
import { createStackNavigator } from '@react-navigation/stack'; ; //导航容器
import { createDrawerNavigator} from '@react-navigation/drawer'; ;// 最常见的导航样式可能是基于抽拉篮的导航
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';// 最常见的导航样式可能是基于选项卡的导航，它可以是屏幕底部的标题，也可以是标题下方的顶部
// import Icon from 'react-native-vector-icons/Ionicons'; //引入图标



// 首页 ，点击按钮跳转页面
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.title}> Home Screen</Text>
      <View style={{flexDirection: 'row',alignContent:"center",marginLeft:10}}>
        <View  style={styles.button}>
          <Button title="Drawer" onPress={() => navigation.navigate('Drawer')}  color="blue"  /> 
        </View>
        <View  style={styles.button}>
          <Button title="TabBar" onPress={() => navigation.navigate('TabBar')} color="blue"/>
        </View>    
        <View  style={styles.button}>
          <Button title="Banners" onPress={() => navigation.navigate('Banners')} color="blue" /> 
        </View>
      </View>
      <View style={{ flexDirection: 'row',alignContent:"center",marginLeft:10}}>
      <View  style={styles.button}>
        <Button title="GDetails" onPress={() => navigation.navigate('Details')} color="green" /> 
      </View>
      <View  style={styles.button}>
        <Button title="FlatList" onPress={() => navigation.navigate('FlatList')} color="blue" style={styles.button1}/> 
      </View>
      </View>
      <View style={{ flexDirection: 'row',alignContent:"center",marginLeft:10}}>
      <View  style={styles.button}>
        <Button title="Button" onPress={() => navigation.navigate('ButtonBasics')} style={styles.button1}/> 
      </View>
      <View  style={styles.button}>
      <Button title="Settings" onPress={()=> navigation.navigate('Settings', {screen: 'Details',params: { user: 'jane' },})} style={styles.button1}/> 
      </View>
      </View>
      <TouchableHighlight onPress={
                ()=> {
                    Alert.alert(
                        `你点击了按钮`,
                        'Hello World！',
                        [
                            {text: '以后再说', onPress: () => console.log('Ask me later pressed')},
                            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: '确定', onPress: () => console.log('OK Pressed')},
                        ]
                    )
                }
            }>
            <Text style={styles.button} color="#000">Button</Text>
            </TouchableHighlight>
  </View>
  </SafeAreaView>
  );
}

// 展示滚动效果
function SettingsScreen(){
  return(
    <SafeAreaView>
    <View>
      <Text style={styles.title}>Setting Screen</Text>
      <ScrollViewTest/>    
    </View>  
    </SafeAreaView>
  );
}

// 详情页，点击按钮进行跳转
function DetailsScreen({ navigation }) {
  const {setOptions} = navigation;
  return (
    <SafeAreaView>
    <View >
      <Text style={styles.title}>Details Screen</Text>
      <View style={{flexDirection: 'row',alignContent:"center",marginLeft:10}}>
        <View  style={styles.button}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View  style={styles.button}>
        <Button title="Go back" onPress={() => navigation.goBack()} />  
        </View>
      </View>
      <TextInput style={styles.input}   onChangeText={text=>{
          setOptions({
            title: text
           })
        }}
      />
      <FlexDirectionBasics/>  
    </View>
    </SafeAreaView>
  );
}


//  FlatList页面 ，FlatList示例
function FlatListScreen({ navigation }) {
  const {setOptions} = navigation;
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.title}>FlatList Screen</Text>
      <View style={{flexDirection: 'row',alignContent:"center",marginLeft:50}}>
      <View  style={styles.button}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
      </View>
      <View  style={styles.button}>
        <Button title="Go back" onPress={() => navigation.goBack()} />  
      </View>
      </View>
      <TextInput style={styles.input}   onChangeText={text=>{
          setOptions({
            title: text
           })
        }}
      />
      <FlatListTest/>
    </View>
    </SafeAreaView>
  );
}
// 按钮示例页面
function ButtonBasicsScreen({ navigation }) {
  return (
    <SafeAreaView>
   
      <Text style={styles.title}>ButtonBasics Screen</Text>
      <View style={{flexDirection: 'row',alignContent:"center",marginLeft:50}}>
        <View  style={styles.button}>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>
        </View>
        <View  style={styles.button}>
          <Button title="Go back" onPress={() => navigation.goBack()} />  
        </View>
      </View>
      <ButtonBasics/>
    </SafeAreaView>
  );
}
// Banner示例页面
function BannerScreen(){
  return(
    // <View>
        // {/* <Text style={styles.title}>Banner Screen</Text> */}
        // {/* <PageThree/> */}
        <View style={{flex: 1}}>
                <Banner/>
                {/*占满屏幕剩余空间  父View必须设置 flex的值（充满屏幕）*/}
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                    <Text>
                        我是一个会自动轮播的Banner
                    </Text>
                </View>
          </View>
    // </View>
   
  )
}
//  
// function IconWithBadge({ name, badgeCount, color, size }) {
//   return (
//     <View style={{ width: 24, height: 24, margin: 5 }}>
//       <Ionicons name={name} size={size} color={color} />
//       {badgeCount > 0 && (
//         <View
//           style={{
//             // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
//             position: 'absolute',
//             right: -6,
//             top: -3,
//             backgroundColor: 'red',
//             borderRadius: 6,
//             width: 12,
//             height: 12,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
//             {badgeCount}
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }

//Navigator，返回包含2个属性的对象的函数：Screen和Navigator。它们都是用于配置导航器的React组件。的元素Navigator应Screen作为其子元素来定义路由的配置。


const Stack = createStackNavigator();  
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

//注册tab底部按钮导航
function TabScreen(){
  return (  
    <Tab.Navigator  tabBarOptions={{activeTintColor: 'white',inactiveTintColor: 'black', activeBackgroundColor: 'green',inactiveBackgroundColor: 'white',labelStyle: { fontSize: 20},}}> 
    {/* tabBarOptions设置按钮选择颜色和未选择颜色 */}
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Drawer" component={DrawerScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
// activeTintColor: 'blue',//活动选项卡的标签和图标颜色。
// activeBackgroundColor: 'red',//活动选项卡的背景颜色。
// inactiveTintColor: 'yellow',//非活动选项卡的标签和图标颜色。
// inactiveBackgroundColor: 'pink',//非活动选项卡的背景颜色。


// 注册抽屉导航
function DrawerScreen(){
  return (    
      <Drawer.Navigator>
        <Drawer.Screen name="ButtonBasics" component={ButtonBasicsScreen}/> 
        <Drawer.Screen name="FlatList" component={FlatListScreen} />   
        <Drawer.Screen name="Details" component={DetailsScreen} />     
      </Drawer.Navigator>
  );
}


//// 初始化,在App中注册所有使用到的组件，当然也可以不用注册所有的，注册后初始化之后就可以使用，否则会报错，或者其他页面中注册后再使用
const App: () => React$Node = () => {
  
  return (
    // /* NavigationContainer是管理导航树并包含导航状态的组件。该组件必须包装所有导航器结构。 */
    // {/* 每个屏幕都可以为导航器指定一些选项 */}
    <SafeAreaProvider>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="TabBar" component={TabScreen}/>
        <Stack.Screen name="Drawer" component={DrawerScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="ButtonBasics" component={ButtonBasicsScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />   
        <Stack.Screen name="Details" component={DetailsScreen} />  
        <Stack.Screen name="Banners" component={BannerScreen} />            
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};


// 页面中的样式列表
const styles = StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:50,
    textAlign:"center",   
    shadowColor:'#6435c9',//设置一个阴影的颜色
    shadowOpacity: 0.5 ,//阴影的透明度  0~1
    shadowRadius:20 ,//阴影的扩散程度
    shadowOffset:{
      height:1,
        width:2
    }//阴影的偏移量
  },
  input: {
    width: 200,
    height:50,
    backgroundColor: 'powderblue',
    marginLeft:50,
    marginBottom:50
  },
  button:{
    width: 100 ,
    height:50,
    lineHeight:50,
    textAlign:"center",
    marginTop:50,
    marginRight:10,
    marginBottom:20,
    // backgroundColor: 'powderblue',
    fontSize:16,
    // borderWidth:1, //外边距的宽度
    // borderColor:'red',//外边距的颜色
    // borderRadius:30,//设置圆角的效果

  },
  button1:{
    width: 100 ,
    height:50,
    lineHeight:50,
    // backgroundColor: 'powderblue',
  }
})
console.disableYellowBox = true; // 关闭全部黄色警告
export default App;



// import PageOne from './PageOne';
// import PageTwo from './PageTwo';
// import PageThree from './PageThree';

// 注册和声明页面
// const AppNavigator = createStackNavigator({
// 	PageOne: PageOne,
// 	PageTwo: PageTwo,
//   PageThree: PageThree,
// }, {
// 	initialRouteName : "PageTwo"
// });

// // 方法一：
// const AppContainer = createAppContainer(AppNavigator);
// export default class App extends React.Component {
// 	render() {
// 		return <AppContainer />;
// 	}
// }

// 方法二：
// export default createAppContainer(AppNavigator);