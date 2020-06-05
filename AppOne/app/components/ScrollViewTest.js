// ScrollView组件示例，滚动效果
import React, { Component } from 'react';
import { ScrollView, Image ,Text,View,StyleSheet} from 'react-native';
export default class ScrollViewTest extends Component {
    render(){
        return(     
        <View style={{marginBottom:50}}>
        {/* 列表滚动效果 */}
        <ScrollView >
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>Scroll me</Text>          
          </View>
           <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>   
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>If you like</Text>   
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>Scrolling down</Text>          
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}> 
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>Framework around?</Text>         
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>React Native</Text>
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>React Native</Text>
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
          <Text style={{fontSize:30,padding:10}}>React Native</Text>
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>If you like</Text>          
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>Scrolling down</Text>          
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>What's the best</Text>        
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>Framework around?</Text>         
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>React Native</Text>
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>React Native</Text>
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} style={{margin:10}}/>
            <Text style={{fontSize:30,padding:10}}>React Native</Text>
          </View>
          <View>
               <Text style={styles.text}>移动应用程序中最常见的导航风格可能是基于标签的导航。这可以是屏幕底部或标题下方顶部的标签</Text>
           </View>
      </ScrollView>
      </View>
        )
    }

}

const styles = StyleSheet.create({
    text: {
     fontSize:20,
     margin:10
     
    },
  })